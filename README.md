# Portfolio - Software Engineer

Portafolio personal para perfil de Software Engineer, construido con Astro 6 y diseño dark theme con acentos neón.

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 22.12.0
- [fnm](https://fnm.vercel.app/) (Fast Node Manager)

## Inicio rápido

```bash
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
├── public/
│   ├── kevin_villatoro_cv.pdf     # Archivo CV
│   ├── recomendaciones.pdf        # Cartas de recomendación
│   └── images/projects/           # Imágenes de proyectos
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navegación con logo
│   │   ├── Hero.astro             # Sección principal
│   │   ├── Projects.astro         # Grid de proyectos
│   │   ├── ProjectCard.astro      # Tarjeta de proyecto con slideshow
│   │   ├── Contact.astro          # Métodos de contacto
│   │   └── Footer.astro           # Footer
│   ├── layouts/
│   │   └── Layout.astro           # Layout base (meta tags, fonts)
│   ├── pages/
│   │   ├── index.astro            # Página principal
│   │   ├── cv.astro               # Visor de CV con PDF.js
│   │   └── recomendaciones.astro  # Carrusel de recomendaciones
│   └── styles/
│       └── global.css             # Estilos globales y variables CSS
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Secciones del portafolio

### Hero
- Nombre completo
- Título profesional
- Resumen profesional
- Roles preferidos
- Bloque de código decorativo con animación Float + Shimmer

### Proyectos Destacados
6 proyectos:
- 4 proyectos demo con imágenes
- 2 proyectos confidenciales con overlay de candado

### Contacto
- Email
- LinkedIn
- GitHub
- WhatsApp

## Personalización

### Cambiar datos personales

1. **Nombre y roles**: `src/components/Hero.astro`
2. **Proyectos**: `src/components/Projects.astro`
3. **Contacto**: `src/components/Contact.astro`
4. **CV**: Coloca tu CV en `public/kevin_villatoro_cv.pdf`
5. **Recomendaciones**: Coloca tus cartas en `public/recomendaciones.pdf`

### Cambiar colores

Modifica las variables CSS en `src/styles/global.css`:

```css
:root {
  --accent-cyan: #00d4ff;
  --accent-magenta: #ff00aa;
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
}
```

## Tecnologías

- [Astro](https://astro.build/) - Framework estático
- CSS Variables - Sistema de diseño
- Google Fonts - Space Grotesk + Inter
- PDF.js - Visor de PDFs
