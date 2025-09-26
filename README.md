# Pinx Creative Agency - Landing Page

Una landing page moderna y responsive para Pinx Creative Agency, especializada en diseño gráfico, impresión de gran formato, letreros LED y desarrollo web.

## 🚀 Características

- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Tabs Interactivas**: Sección de servicios con navegación dinámica
- **SEO Optimizado**: Meta tags, structured data y sitemap incluidos
- **Variables de Figma**: Sistema de diseño basado en tokens de Figma
- **Bootstrap Integration**: Framework CSS con customizaciones
- **SCSS Modular**: Arquitectura organizada y mantenible

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5
- **Preprocesador**: SCSS/Sass
- **Fuentes**: Google Fonts (Onest, Open Sans, Roboto)
- **Iconos**: Font Awesome 6
- **Build Tool**: npm scripts

## 📁 Estructura del Proyecto

```
pinx/
├── main/                       # Carpeta publicable (deploy)
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css      # CSS compilado desde SCSS
│   │   ├── images/             # Imágenes y assets
│   │   └── js/
│   │       ├── main.js         # Comportamientos globales
│   │       └── services-tabs.js# Funcionalidad de tabs
│   ├── index.html              # Página principal
│   ├── sitemap.xml             # Mapa del sitio
│   └── robots.txt              # Directivas para crawlers
├── scss/
│   ├── custom/
│   │   ├── _variables.scss     # Variables unificadas (tokens Sass + CSS vars Figma)
│   │   ├── _typography.scss    # Estilos tipográficos
│   │   ├── _buttons.scss       # Estilos de botones (Bootstrap + aliases px-*)
│   │   ├── _forms.scss         # Estilos de formularios
│   │   ├── _secciones.scss     # Estilos de secciones
│   │   ├── _figma-landing.scss # Layout y helpers px-* (Hero, About, etc.)
│   │   └── _px-cards.scss      # Componentes de tarjeta px-*
│   └── styles.scss             # Archivo principal SCSS
├── package.json                # Dependencias y scripts
└── README.md                   # Documentación
```

## 🎨 Sistema de Diseño

### Variables de Figma
El proyecto utiliza un sistema de variables CSS basado en los tokens de Figma:

- **Colores**: Paleta completa con modos claro/oscuro
- **Tipografía**: Escalas de fuentes y pesos
- **Espaciado**: Sistema de padding y margins
- **Bordes**: Radios y estilos consistentes

### Componentes
- **Botones**: Variantes primary, secondary, outline
- **Tabs**: Navegación interactiva con transiciones
- **Cards**: Contenedores con sombras y bordes
- **Forms**: Inputs estilizados con estados de focus

## 🚀 Instalación y Desarrollo

### Prerrequisitos

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd pinx

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Compilar SCSS a CSS
npm run build:sass

# Compilar y observar cambios
npm run watch:sass

# Build completo
npm run build

# Iniciar desarrollo
npm start
```

## MCP → SCSS workflow (Figma to Code)

Use the Figma MCP server to pull design output and integrate it into our SCSS system.

1) Prepare
- Ensure the MCP server is configured (see `.vscode/settings.example.json`). Set `FIGMA_API_KEY` in your shell.
- In VS Code, use the MCP tools panel to select Figma nodes.

2) Generate artifacts
- get_code: Export selection as code. Prefer plain HTML/CSS. Save raw output under `assets/html/` when useful for reference.
- create_design_system_rules: Regenerate `.github/DESIGN_SYSTEM_RULES.md` when tokens/usage change.
- get_metadata: Save to `assets/figma/selection-metadata.xml` for traceability.
- get_screenshot: Save to `assets/images/figma/<name>.png` for docs or PRs.

3) Integrate into SCSS
- Move reusable styles into partials under `scss/custom/`:
  - `_buttons.scss` for `.btn*` (Bootstrap) y aliases `.px-btn*`.
  - `_px-cards.scss` for `.px-card*`.
  - `_figma-landing.scss` for layout primitives (`.px-section`, typography helpers). Use Bootstrap's `.container` for layout.
- Map colors/spacing/typography to tokens from `scss/custom/_variables.scss` (archivo unificado).
- Import partials in `scss/styles.scss` via `@use`.

4) Wire HTML
- Replace sections in `index.html` using the `px-*` classes (Hero, About, Services, etc.).
- Keep JS behaviors: tabs use `.pinx-tabs` container, `.pinx-tab-btn` with `data-tab`, and `.pinx-tab-content[data-content]`.

5) Build & verify
- Run `npm run build:sass` and check `main/assets/css/styles.css` updates.
- Quick smoke test: open `main/index.html` and verify layout and interactivity.

Notes
- Never commit secrets. `.vscode/settings.json` is git-ignored. Use `.vscode/settings.example.json` for sharing.
- Keep Figma node `data-node-id` attributes when helpful.

## Backend (Optional)

This repository includes a small optional `server/` scaffold that demonstrates how to set the `OPENAI_MODEL` environment variable and provides a simple `/api/chat` endpoint which defaults to `gpt-5-mini`.

To use it:

```bash
cd server
cp .env.example .env
# set OPENAI_API_KEY if you have one; OPENAI_MODEL defaults to gpt-5-mini
npm install
npm start
```

The server exposes `GET /.well-known/health` which returns the active model.


## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Características Responsive
- Navegación adaptativa
- Grid system flexible
- Tipografía escalable
- Imágenes optimizadas
- Tabs colapsables en móvil

## 🔍 SEO Features

### Meta Tags
- Title optimizado
- Description descriptiva
- Keywords relevantes
- Open Graph tags
- Twitter Card tags

### Structured Data
- Schema.org Organization
- Contact information
- Social media links

### Performance
- Lazy loading de imágenes
- CSS minificado
- JavaScript optimizado
- Fonts preloaded

## 🎯 Funcionalidades

### Secciones
1. **Hero**: Presentación principal con CTA
2. **About Us**: Información de la empresa
3. **Services**: Tabs interactivas con 4 servicios
4. **Portfolio**: Galería de trabajos
5. **Contact**: Formulario de contacto
6. **Testimonials**: Reseñas de clientes

### Interactividad
- **Tabs de Servicios**: Cambio dinámico de contenido
- **Navegación Suave**: Scroll a secciones
- **Hover Effects**: Estados interactivos
- **Form Validation**: Validación de formularios

## 🎨 Personalización

### Colores
Los colores se pueden modificar en `scss/custom/_variables.scss` (unificado):

```scss
:root {
  --Background-Pink-Default: #ff006c;
  --Text-Neutral-Primary: #1c1a1c;
  // ... más variables
}
```

## 🧩 Variables unificadas y cambio de tema

Este proyecto usa un único archivo de variables: `scss/custom/_variables.scss`.

- Contiene tokens Sass `$pinx-*` usados para configurar Bootstrap vía `@use "bootstrap/scss/bootstrap" with (...)`.
- Incluye variables CSS generadas desde Figma (primitives, aliases y fallbacks en `:root`).

### ¿Cómo cambiar de tema (Light/Dark u otros)?

Puedes activar colecciones de Figma por atributo data en cualquier contenedor (ej. `html`, `body` o un div específico):

```html
<html data-Primitives="Dark">
  <!-- toda la página usa los tokens de Dark -->
  ...
</html>

<!-- O a nivel de sección -->
<section data-Primitives="Light" data-Colour-Usage="Mode-1">
  ...contenido con Light + aliases Colour-Usage Mode-1...
</section>
```

Notas:
- Los fallbacks en `:root` garantizan colores por defecto si no se define ningún data-attribute.
- Puedes combinar colecciones (Primitives, Colour-Usage, Gallery) según tus necesidades.
- Los componentes y utilidades leen de las variables CSS, por lo que el tema cambia sin recompilar Sass.

### Tipografía
Las fuentes se configuran en `scss/custom/_typography.scss`:

```scss
$font-primary: 'Onest', sans-serif;
$font-size-base: 18px;
// ... más configuraciones
```

## 📈 Performance

### Optimizaciones Implementadas
- CSS compilado y minificado
- JavaScript modular
- Imágenes optimizadas
- Fonts preloaded
- Lazy loading

### Métricas Objetivo
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: 90+

## 🚀 Deployment

### Producción
1. Ejecutar `npm run build`
2. Publicar el contenido de la carpeta `main/` (es tu directorio de salida)
3. Configurar HTTPS
4. Verificar `main/sitemap.xml`

### Hosting Recomendado
- Netlify: Publish directory = `main`
- Vercel: Output directory = `main`
- GitHub Pages: Configura Pages para servir desde la carpeta `main/`
- AWS S3 + CloudFront: Sube el contenido de `main/` al bucket

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Pinx Creative Agency**
- Website: [https://pinx.agency](https://pinx.agency)
- Email: info@pinx.agency
- Phone: +1-555-0123

---

Desarrollado con ❤️ por Pinx Creative Agency
