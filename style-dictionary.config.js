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
