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
├── assets/
│   ├── css/
│   │   └── styles.css          # CSS compilado
│   ├── images/                 # Imágenes y assets
│   └── js/
│       └── services-tabs.js    # Funcionalidad de tabs
├── scss/
│   ├── custom/
│   │   ├── _typography.scss    # Estilos tipográficos
│   │   ├── _buttons.scss       # Estilos de botones
│   │   ├── _layout.scss        # Sistema de grid y espaciado
│   │   ├── _secciones.scss     # Estilos de secciones
│   │   └── _Pinx-variables.scss # Variables de Figma
│   └── styles.scss             # Archivo principal SCSS
├── index.html                  # Página principal
├── sitemap.xml                 # Mapa del sitio
├── robots.txt                  # Directivas para crawlers
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
- Node.js (v14 o superior)
- npm

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
Los colores se pueden modificar en `scss/custom/_Pinx-variables.scss`:

```scss
:root {
  --Background-Pink-Default: #ff006c;
  --Text-Neutral-Primary: #1c1a1c;
  // ... más variables
}
```

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
2. Subir archivos al servidor
3. Configurar HTTPS
4. Verificar sitemap.xml

### Hosting Recomendado
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

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
