# Pinx Design System Rules

This document captures how Figma tokens map into the codebase (Bootstrap + SCSS) and how to maintain them going forward.

## 1) Token Definitions

- Source of truth: `scss/custom/_variables.scss`
- Structure:
  - Figma “Primitives” colors are declared in CSS via attribute scopes:
    - `[data-Primitives="Light"]` and `[data-Primitives="Dark"]` include families: Purple, Pink, Orange, Sand, Green, Grayscale (0–999) with 50–950 shades.
  - Semantic aliases in CSS (`:root`, `[data-Colour-Usage]`): Background, Text, Border, Brand, Semantic states.
  - Sass tokens (variables and maps) mirror CSS tokens for Bootstrap theming and utilities: colors, spacers, breakpoints, typography.
  - Spacing tokens (CSS): `--Space-*` and semantic spacing aliases like `--px-section-padding-y`, `--px-gap-md`, etc.

## 2) Component Styles

- Location: `scss/custom/` split by concern (`_buttons.scss`, `_forms.scss`, `_figma-landing.scss`, etc.).
- Components consume CSS variables (semantic tokens) and Bootstrap utilities.
- Forms (Figma spec): `.px-form`, `.px-input`, `.px-textarea` use spacing aliases and semantic color tokens.

## 3) Frameworks

- Bootstrap 5 (Sass) with custom theming.
- Build: `npm run build:sass` (quiet deps) compiles `scss/styles.scss` → `assets/css/styles.css`.

## 4) Assets & Icons

- Assets in `assets/images/`. Icons via Font Awesome (CDN) per `index.html`.

## 5) Styling Approach

- CSS variables enable runtime theming; Sass variables configure Bootstrap at build time.
- Responsive via Bootstrap grid + media queries in component partials.

## 6) Primitives Coverage

Present in `[data-Primitives]`:
- Purple 50–900 (+950)
- Pink 50–900 (+950)
- Orange 50–900 (+950)
- Sand 50–900 (+950)
- Green 50–900 (+950)
- Grayscale 0, 50–999 (+950)

Not observed (add if Figma defines): Blue, Cyan, Teal, Yellow, Red, Brown, Brand-names beyond current sets.

## 7) Mappings

- `:root` defines defaults so site works without attributes.
- Semantic aliases (examples):
  - `--Background-Neutral-Primary` → base backgrounds.
  - `--Text-Neutral-Primary` → main text color.
  - `--Border-Brand-Primary` → focus/brand borders.
- Sass constants map to Bootstrap palette to avoid color math on CSS vars.

## 8) Maintenance Workflow

1. Update Figma primitives and export their RGB values.
2. Add missing shades to `[data-Primitives="Light|Dark"]` and to `:root` defaults.
3. If a new family is added (e.g., Blue), add it in both Light/Dark and defaults.
4. Expose semantic aliases for common UI needs.
5. If Bootstrap needs the color, add a hex Sass constant and map it in `scss/styles.scss`.
6. Keep spacing scale in sync: update `--Space-*` and `$pinx-spacers` as needed.

## 9) QA Checklist

- Build compiles with `npm run build:sass`.
- No duplicated variables.
- New tokens referenced in components where relevant.
- Visual parity with Figma for colors and spacing.
