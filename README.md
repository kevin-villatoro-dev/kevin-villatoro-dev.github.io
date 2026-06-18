# Portfolio - Software Engineer

Portafolio personal para perfil de Software Engineer, construido con Astro y diseño creativo dark theme con acentos neón.

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 22.12.0
- [fnm](https://fnm.vercel.app/) (Fast Node Manager)
- npm

## Inicio rápido

```bash
# Navegar al directorio del proyecto
cd portfolio

# Instalar dependencias
fnm exec --using=default -- npm install

# Iniciar servidor de desarrollo
fnm exec --using=default -- npm run dev
```

El servidor se iniciará en `http://localhost:4321`

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `fnm exec --using=default -- npm run dev` | Iniciar servidor de desarrollo |
| `fnm exec --using=default -- npm run build` | Construir proyecto para producción |
| `fnm exec --using=default -- npm run preview` | Vista previa de la build de producción |

## Estructura del proyecto

```
portfolio/
├── public/
│   └── favicon.svg              # Favicon personalizado
├── src/
│   ├── components/
│   │   ├── Header.astro         # Navegación con logo
│   │   ├── Hero.astro           # Sección principal
│   │   ├── Projects.astro       # Grid de proyectos
│   │   ├── ProjectCard.astro    # Tarjeta de proyecto
│   │   ├── Contact.astro        # Formulario + info contacto
│   │   └── Footer.astro         # Footer con redes sociales
│   ├── layouts/
│   │   └── Layout.astro         # Layout base (meta tags, fonts)
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       └── global.css           # Estilos globales y variables CSS
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Secciones del portafolio

### Hero
- Nombre completo: Alejandro Martínez
- Título: Software Engineer
- Resumen profesional
- Estadísticas: años de experiencia, proyectos, clientes
- Bloque de código decorativo

### Proyectos Destacados
6 proyectos de ejemplo:
- **TaskFlow** - Gestión de proyectos (React, Node.js, PostgreSQL)
- **CryptoTracker** - Dashboard criptomonedas (Next.js, TypeScript)
- **DevBlog** - Blog tecnología (Astro, MDX)
- **WeatherApp** - App del clima (Vue.js, PWA)
- **API Gateway** - Microservicios (Go, Redis, K8s)
- **Design System** - Sistema de diseño (React, Storybook)

### Contacto
- Formulario de contacto
- Email: alejandro@example.com
- LinkedIn: /in/alejandrom
- GitHub: @alejandrom

## Personalización

### Cambiar datos personales

Edita los siguientes archivos:

1. **Nombre y resumen**: `src/components/Hero.astro`
2. **Proyectos**: `src/components/Projects.astro`
3. **Contacto**: `src/components/Contact.astro`
4. **Redes sociales**: `src/components/Footer.astro`

### Cambiar colores

Modifica las variables CSS en `src/styles/global.css`:

```css
:root {
  --accent-cyan: #00d4ff;    /* Color principal */
  --accent-magenta: #ff00aa; /* Color secundario */
  --bg-primary: #0a0a0f;     /* Fondo principal */
  --bg-secondary: #12121a;   /* Fondo secundario */
}
```

### Cambiar tipografía

Actualiza los enlaces de Google Fonts en `src/layouts/Layout.astro` y las variables de fuente en `src/styles/global.css`.

## Despliegue

### Vercel (Recomendado)

```bash
# Instalar CLI de Vercel
npm i -g vercel

# Desplegar
vercel
```

### Netlify

```bash
# Instalar CLI de Netlify
npm install netlify-cli -g

# Desplegar
netlify deploy --prod
```

### GitHub Pages

1. Configura el repositorio en GitHub
2. Añade un workflow de GitHub Actions:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Tecnologías

- [Astro](https://astro.build/) - Framework estático
- CSS Variables - Sistema de diseño
- Google Fonts - Space Grotesk + Inter

## Licencia

MIT
