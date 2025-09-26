# Pinx Design System Rules (for MCP + Figma)

This document guides generating and integrating UI from Figma using MCP.

## 1) Token Definitions
- Location: `scss/custom/_Pinx-variables.scss`, `scss/custom/_typography.scss`
- Types: Colors, spacing, radii, typography. Also exposed as CSS variables in compiled CSS when appropriate.
- Update flow: Modify tokens in SCSS partials, then run `npm run build:sass`.

## 2) Component Library
- HTML/CSS components live in `index.html` and SCSS partials under `scss/custom/`.
- JS behaviors in `assets/js/main.js` and `assets/js/services-tabs.js`.
- Architecture: Bootstrap 5 base overridden by SCSS modules (buttons, forms, layout, utilities).

## 3) Frameworks & Libraries
- Bootstrap 5 (customized via SCSS).
- Vanilla JS for interactivity.
- Build: npm scripts (`build:sass`, `watch:sass`, `build`, `start`).

## 4) Asset Management
- Images: `assets/images/` (prefer SVG for icons logos).
- JS: `assets/js/`. CSS built to `assets/css/`.
- Performance: use lazy loading and minified assets; prefer SVG for vector.

## 5) Icon System
- Font Awesome 6 via CDN in `index.html`.
- Prefer SVG icons when practical for precision.

## 6) Styling Approach
- SCSS modularization under `scss/custom/`.
- Responsive breakpoints: desktop (1200+), tablet (768–1199), mobile (320–767).
- Use Bootstrap grid where helpful; override with custom classes per section.

## 7) Project Structure
- Entry: `index.html`
- Styles: `scss/styles.scss` imports partials in `scss/custom/`
- Scripts: `assets/js/*.js`

## How to integrate Figma output
- Use MCP `get_code` to export. If Tailwind is not in the project, rewrite to plain HTML + CSS using SCSS tokens.
- Map Figma tokens to SCSS variables:
  - Pink: `$pinx-pink` (Hex: #ff006c)
  - Border brand: `$pinx-border` (#de005e)
  - Text primary: `$pinx-text-primary` (#1c1a1c)
  - Neutral secondary: `$pinx-neutral-200` (#eeeced)
- Prefer semantic sections: `.px-section`, `.px-card`, `.px-btn` and keep `data-node-id`.

## Example token usage (SCSS)
```scss
$pinx-pink: #ff006c;
$pinx-border: #de005e;
$pinx-text-primary: #1c1a1c;
$pinx-neutral-200: #eeeced;

.px-btn--primary {
  background: $pinx-pink;
  border: 1px solid $pinx-border;
  color: #fff;
}
```

## Code generation tips
- Strip framework-specific classes if not present (e.g., Tailwind).
- Convert to semantic HTML + classnames matching the project (`px-*`).
- Extract repeated patterns into SCSS partials if used sitewide (buttons, cards, forms).

## QA checklist
- Responsive at 320px, 768px, 1200px.
- Colors and typography match tokens.
- No hardcoded secrets or external deps added.
