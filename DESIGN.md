# Design System: TWIG AI

> CSS variables and exact token values → [TOKENS.md](TOKENS.md) (auto-generated, do not edit).
> Live components → [Storybook](https://akuzmishchev.github.io/twig/storybook/)

---

## 1. Product Context

**Twig AI** is an AI Operating System for Restaurants — B2B SaaS that connects POS, inventory, staff scheduling, and finance into a single AI layer. Target users: restaurant operators and managers.

**Brand personality:** Confident, precise, data-driven. Professional without being cold. The UI should feel like a premium productivity tool.

---

## 2. Visual Theme

Clean, modern, and intelligent. Purple is the single dominant accent — used for CTAs, interactive elements, and key highlights. Light surfaces dominate with a warm off-white page background. Generous whitespace paired with purposeful structure.

---

## 3. Color System

All colors are defined as CSS custom properties. **Always use CSS vars — never hardcode hex values.**

### Brand (Purple)
| Role | CSS Variable | Value |
|---|---|---|
| Primary action / CTA | `--twig-color-brand-default` | `#6D28D9` |
| Hover state | `--twig-color-brand-hover` | `#7C35EB` |
| Subtle bg / tags / badges | `--twig-color-brand-subtle` | `#F0E9FB` |

### Backgrounds
| Role | CSS Variable | Value |
|---|---|---|
| Page background | `--twig-color-bg-page` | `#F7F8FA` |
| Card / input surface | `--twig-color-bg-surface` | `#FFFFFF` |
| Overlay / tooltip bg | `--twig-color-bg-overlay` | `#1E1E1E` |

### Text
| Role | CSS Variable | Value |
|---|---|---|
| Primary body text | `--twig-color-text-primary` | `#0A0A0A` |
| Secondary / supporting | `--twig-color-text-secondary` | `#717182` |
| Disabled / placeholder | `--twig-color-text-disabled` | `#AEAEAE` |
| Text on dark surface | `--twig-color-text-inverse` | `#FCFCFC` |
| Brand-colored text | `--twig-color-text-brand` | `#6D28D9` |

### Borders
| Role | CSS Variable | Value |
|---|---|---|
| Default divider | `--twig-color-border-default` | `#EBEBEB` |
| Brand / active | `--twig-color-border-brand` | `#6D28D9` |
| Focus ring | `--twig-color-border-focus` | `#7C35EB` |

### Status
| Role | CSS Variable | Value |
|---|---|---|
| Success | `--twig-color-status-success` | `#009689` |
| Success bg tint | `--twig-color-status-success-subtle` | `#DCFCE7` |
| Warning | `--twig-color-status-warning` | `#FE9A00` |
| Warning bg tint | `--twig-color-status-warning-subtle` | `#FFEDD4` |
| Error | `--twig-color-status-error` | `#F54900` |
| Error bg tint | `--twig-color-status-error-subtle` | `#FFDDDB` |

For all primitive tokens (purple scale, neutral scale, chart colors) → [TOKENS.md](TOKENS.md).

---

## 4. Typography

**Font:** Inter (Regular 400, Medium 500, Semi Bold 600, Extra Bold 800). Loaded from Google Fonts.

| Role | Weight | Size | Line Height |
|---|---|---|---|
| Hero heading | 800 | 28px | 36px |
| Section heading | 600 | 32px | 38px |
| Large emphasis | 500 | 20px | 30px |
| Subheading | 500 | 18px | 27px |
| Body default | 500 | 16px | 24px |
| Body small | 500 | 14px | 21px |
| Caption / section label | 600 | 12px | 18px |
| Body regular | 400 | 16px | 24px |
| Body regular small | 400 | 14px | 21px |
| Chat messages | 400 | 16px | 22px, letter-spacing: −0.04em |
| Chat placeholders | 400 | 14px | 18px, letter-spacing: −0.04em |

Letter-spacing `−0.04em` is used **only** in chat interface contexts.

---

## 5. Components

### Buttons

Two variants: `btn--primary`, `btn--secondary`. Two sizes: `btn--lg`, `btn--sm`.

**Primary** — solid brand fill, inverse text:
- `background: var(--twig-button-primary-bg)` → `#6D28D9`
- `color: var(--twig-button-primary-text)` → `#FCFCFC`
- Hover: `var(--twig-button-primary-bg-hover)` → `#7C35EB`
- `btn--lg`: 16px font, 14px 28px padding, 12px radius
- `btn--sm`: 14px font, 10px 18px padding, 12px radius

**Secondary** — transparent bg, border, brand text:
- `border: 1px solid var(--twig-button-secondary-border)` → `#EBEBEB`
- `color: var(--twig-button-secondary-text)` → `#6D28D9`
- Hover: bg `var(--twig-button-secondary-bg-hover)`, border `var(--twig-button-secondary-border-hover)`

### Cards / Containers

- Background: `var(--twig-color-bg-surface)` on `var(--twig-color-bg-page)`
- Border: `1px solid var(--twig-color-border-default)`, radius `8–12px`
- Shadow: soft drop shadow, ~20% opacity black

### Badges (`.p-card__badge`)

Small status chips used inside cards. Three variants:

- `--green` → success/positive. `background: var(--twig-color-status-success-subtle)`, `color: var(--twig-color-status-success)`
- `--purple` → AI/brand insight. `background: var(--twig-color-brand-subtle)`, `color: var(--twig-color-text-brand)`
- `--red` → alert/error. `background: var(--twig-color-status-error-subtle)`, `color: var(--twig-color-status-error)`

### Tags (`.p-tag`)

Pill-shaped category labels. Always brand style:
- `background: var(--twig-color-brand-subtle)`, `color: var(--twig-color-text-brand)`

### Section Labels (`.section-label`)

Uppercase eyebrow text above section headings:
- `font-size: 12px`, `font-weight: 600`, `letter-spacing: 0.08em`, `text-transform: uppercase`
- `color: var(--twig-color-brand-default)`

### Inputs / Forms

- Background: `var(--twig-color-bg-surface)`
- Border: `var(--twig-color-border-default)` default; `var(--twig-color-border-focus)` on focus
- Placeholder: `var(--twig-color-text-disabled)`
- Radius: `8px`

### Tooltips / Overlays

- Background: `var(--twig-color-bg-overlay)` → `#1E1E1E`
- Text: `var(--twig-color-text-inverse)` → `#FCFCFC`
- Radius: `6–8px`

---

## 6. Layout

- **Page background:** `var(--twig-color-bg-page)` — `#F7F8FA`, warm off-white.
- **Spacing base unit:** 4px. Common steps: 8, 12, 16, 24, 32, 48px. Reference tokens: `--twig-spacing-*` (values in px, exported as integers).
- **Border radius:** sm `4px`, md `8px`, lg `12px`, xl `16px`, full `999px`. Tokens: `--twig-radius-*`.
- **Max content width:** `1200px`.
- **Alignment:** Left-aligned content; centered only for hero/marketing sections.
- **Hierarchy:** Visual weight through color and font size — not borders or shadows. Purple accents direct attention to key actions.

---

## 7. Do's and Don'ts

✅ Use `--twig-color-brand-default` (Purple `#6D28D9`) as the single dominant accent.
✅ Keep backgrounds light: `--twig-color-bg-page` as default, `--twig-color-bg-surface` for elevated surfaces.
✅ Use status colors (success / warning / error) only for their semantic meaning — never decoratively.
✅ Prefer Inter Medium (500) for most UI text; Regular (400) for body copy; Extra Bold (800) only for hero headings.
✅ Always use semantic CSS variables — never hardcode hex values.

❌ Don't use multiple competing accent colors in the same section.
❌ Don't use `--twig-color-text-primary` (`#0A0A0A`) as a background.
❌ Don't use chart colors (`--twig-twig-grph-*`) in UI components — data visualization only.
❌ Don't apply `−0.04em` letter-spacing outside chat interface contexts.
