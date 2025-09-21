# Copilot Instructions for Pinx Creative Agency Landing Page

## Project Overview
- Modern, responsive landing page for a creative agency (design, print, LED, web).
- Built with HTML5, SCSS (modular), Bootstrap 5, and vanilla JS.
- Figma design tokens drive variables in SCSS (`scss/custom/_Pinx-variables.scss`).
- SEO and performance optimizations are first-class: meta tags, structured data, lazy loading, minified assets.

## Key Architecture & Patterns
- **SCSS Modularization**: All styles are split by concern in `scss/custom/` (buttons, layout, typography, etc.). Main entry: `scss/styles.scss`.
- **Design Tokens**: Colors, typography, spacing, and borders are defined as CSS variables and SCSS variables. Update tokens in `_Pinx-variables.scss` and `_typography.scss`.
- **JS Interactivity**: Tabs and navigation logic in `assets/js/services-tabs.js` and `assets/js/main.js`. Use event listeners and Bootstrap APIs for UI behaviors.
- **Responsive Design**: Breakpoints: desktop (1200px+), tablet (768-1199px), mobile (320-767px). Grid and typography scale accordingly.
- **SEO**: Meta tags, Open Graph, Twitter Card, and Schema.org data in `index.html`. Sitemap and robots.txt included.

## Developer Workflows
- **Install**: `npm install`
- **Build SCSS**: `npm run build:sass` (compiles SCSS to CSS)
- **Watch SCSS**: `npm run watch:sass` (auto-recompiles on change)
- **Full Build**: `npm run build`
- **Start Dev**: `npm start` (local dev server)
- **Deploy**: `npm run build` then upload to Netlify/Vercel/GitHub Pages/AWS S3

## Project-Specific Conventions
- **Custom Bootstrap**: Use Bootstrap 5, but override with SCSS in `custom/` for brand look.
- **Figma Variables**: All design tokens should match Figma source. Sync changes in `_Pinx-variables.scss`.
- **Component Styles**: Each UI element (buttons, forms, cards, tabs) has its own partial in `scss/custom/`.
- **Images**: Store in `assets/images/`. Use SVG for icons/logos when possible.
- **JS**: Keep scripts modular. `main.js` for global behaviors, `services-tabs.js` for tabs logic.

## Integration Points
- **Fonts**: Google Fonts loaded in `index.html`.
- **Icons**: Font Awesome 6 via CDN.
- **Bootstrap**: Use CDN or local build, but always customize via SCSS.

## Examples
.btn-sm { padding: 8px 16px; font-size: $font-size-sm; }
- Main entry: `index.html`
- Styles: `scss/styles.scss`, `scss/custom/`
- JS: `assets/js/`
- Images: `assets/images/`
- SEO: `sitemap.xml`, `robots.txt`, meta tags in `index.html`

---

If any conventions or workflows are unclear, ask for clarification or check the README for details. Always match Figma tokens and keep code modular.
