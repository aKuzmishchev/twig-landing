# TWIG

[![Deploy to GitHub Pages](https://github.com/aKuzmishchev/twig/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/aKuzmishchev/twig/actions/workflows/deploy-storybook.yml)

Design system, landing page, and Storybook for the TWIG AI product.

**Live:**
- [Landing](https://akuzmishchev.github.io/twig/) — product landing page
- [Storybook](https://akuzmishchev.github.io/twig/storybook/) — component library

---

## Structure

```
tokens/          # Design tokens (JSON source)
src/
  tokens/        # Generated CSS/JS tokens (via Style Dictionary)
  stories/
    tokens/      # Token documentation stories
    atoms/       # Buttons, inputs, labels, icons
    molecules/   # Composed UI elements
    organisms/   # Page sections
    pages/       # Full page compositions
css/             # Landing styles
js/              # Landing scripts
index.html       # Landing page
```

---

## Development

Install dependencies:

```bash
npm install
```

Build design tokens:

```bash
npm run build:tokens
```

Run Storybook locally:

```bash
npm run storybook
```

---

## Design

See [DESIGN.md](DESIGN.md) for the full design spec — color palette, typography, spacing, and component guidelines.
