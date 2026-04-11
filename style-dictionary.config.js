import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import fs from 'fs';

register(StyleDictionary);

// tokens-studio group has both name/kebab and name/camel (camel wins as last).
// Register a CSS variant that drops name/camel so kebab-case is used.
const sd0 = new StyleDictionary({ tokens: {}, platforms: {} });
await sd0.hasInitialized;
const tsTransforms = sd0.hooks.transformGroups['tokens-studio'];
const cssTransforms = tsTransforms.filter(t => t !== 'name/camel');

StyleDictionary.registerTransformGroup({ name: 'tokens-studio/css', transforms: cssTransforms });

// Read Token Studio tokens.json
const raw = JSON.parse(fs.readFileSync('tokens/tokens.json', 'utf-8'));
const setOrder = raw.$metadata?.tokenSetOrder ?? [];

// Figma-synced sets (non-legacy) take priority; skip text-string sets
const LEGACY = new Set(['primitives', 'semantic', 'component', 'spacing', 'radius']);
const SKIP_TYPES = new Set(['twigTexts/Mode']);
const figmaSets = setOrder.filter(k => raw[k] && !LEGACY.has(k) && !SKIP_TYPES.has(k));
const legacySets = [...LEGACY].filter(k => raw[k]);
const activeSets = figmaSets.length > 0 ? figmaSets : legacySets;

// Merge active sets into flat token structure
const tokens = {};
for (const setName of activeSets) {
  Object.assign(tokens, raw[setName]);
}

const sd = new StyleDictionary({
  tokens,
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio/css',
      prefix: 'twig',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
      ],
    },
    js: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();

// Generate TOKENS.md by parsing the built tokens.css — guaranteed to be in sync.
generateTokensMd();

function generateTokensMd() {
  const css = fs.readFileSync('src/tokens/tokens.css', 'utf-8');

  // Parse all --twig-* custom properties
  const vars = [];
  for (const line of css.split('\n')) {
    const m = line.match(/^\s+--(twig-[^:]+):\s*(.+?);/);
    if (m) vars.push({ name: `--${m[1]}`, value: m[2].trim() });
  }

  // Groups in priority order. Legacy DS tokens excluded — they are
  // the old flat Figma export and are superseded by semantic tokens.
  const groups = {
    'Semantic — Brand':        v => v.name.startsWith('--twig-color-brand'),
    'Semantic — Background':   v => v.name.startsWith('--twig-color-bg'),
    'Semantic — Text':         v => v.name.startsWith('--twig-color-text'),
    'Semantic — Border':       v => v.name.startsWith('--twig-color-border'),
    'Semantic — Status':       v => v.name.startsWith('--twig-color-status'),
    'Buttons':                 v => v.name.startsWith('--twig-button'),
    'Spacing':                 v => v.name.startsWith('--twig-spacing'),
    'Border Radius':           v => v.name.startsWith('--twig-radius'),
    'Primitives — Purple':     v => v.name.startsWith('--twig-purple'),
    'Primitives — Neutral':    v => v.name.startsWith('--twig-neutral'),
    'Primitives — Green':      v => v.name.startsWith('--twig-green'),
    'Primitives — Orange':     v => v.name.startsWith('--twig-orange'),
    'Primitives — Red':        v => v.name.startsWith('--twig-red'),
    'Chart Colors':            v => v.name.startsWith('--twig-twig-grph'),
  };

  // Tokens to skip entirely (old flat DS export, raw type/spacing primitives)
  const skip = v =>
    v.name.startsWith('--twig-twig-ds') ||
    v.name.startsWith('--twig-font-families') ||
    v.name.startsWith('--twig-font-weights') ||
    v.name.startsWith('--twig-font-size') ||
    v.name.startsWith('--twig-line-heights') ||
    v.name.startsWith('--twig-letter-spacing') ||
    v.name.startsWith('--twig-paragraph') ||
    v.name.startsWith('--twig-text-case') ||
    v.name.startsWith('--twig-text-decoration');

  const assigned = new Set();
  let md = `# Twig Design Tokens\n\n`;
  md += `> Auto-generated from \`tokens/tokens.json\` via Style Dictionary. **Do not edit manually.**\n`;
  md += `> Rebuild: \`npm run build:tokens\`\n\n`;
  md += `## Usage\n\n`;
  md += `Import \`src/tokens/tokens.css\` and use CSS custom properties:\n\n`;
  md += `\`\`\`css\n`;
  md += `.component {\n`;
  md += `  color: var(--twig-color-text-primary);\n`;
  md += `  background: var(--twig-color-bg-surface);\n`;
  md += `  border: 1px solid var(--twig-color-border-default);\n`;
  md += `}\n`;
  md += `\`\`\`\n\n`;

  for (const [title, match] of Object.entries(groups)) {
    const group = vars.filter(v => match(v) && !skip(v) && !assigned.has(v.name));
    if (!group.length) continue;
    group.forEach(v => assigned.add(v.name));

    md += `## ${title}\n\n`;
    md += `| CSS Variable | Value |\n|---|---|\n`;
    for (const v of group) {
      md += `| \`${v.name}\` | \`${v.value}\` |\n`;
    }
    md += `\n`;
  }

  fs.writeFileSync('TOKENS.md', md);
  console.log('\nmarkdown\n✔︎  TOKENS.md');
}
