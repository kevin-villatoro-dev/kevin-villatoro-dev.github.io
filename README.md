# Portfolio - Software Engineer

Portafolio personal para perfil de Software Engineer, construido con Astro 6 y diseño dark theme con acentos neón.

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 22.12.0
- [fnm](https://fnm.vercel.app/) (Fast Node Manager)

## Inicio rápido

```bash
fnm exec --using=default -- npm install
fnm exec --using=default -- npm run dev
```

El servidor se iniciará en `http://localhost:4321`

## Comandos

| Comando | Descripción |
|---------|-------------|
| `fnm exec --using=default -- npm run dev` | Servidor de desarrollo |
| `fnm exec --using=default -- npm run build` | Construir para producción |
| `fnm exec --using=default -- npm run preview` | Vista previa de producción |

## Estructura

```
├── public/
│   ├── *.pdf                    # Archivos PDF (CV, recomendaciones)
│   └── images/projects/         # Imágenes de proyectos (SVG)
├── src/
│   ├── components/              # Componentes Astro
│   │   ├── Header.astro         # Navegación con logo
│   │   ├── Hero.astro           # Sección principal
│   │   ├── Projects.astro       # Grid de proyectos
│   │   ├── ProjectCard.astro    # Tarjeta con slideshow
│   │   ├── Contact.astro        # Métodos de contacto
│   │   └── Footer.astro         # Footer
│   ├── layouts/
│   │   └── Layout.astro         # Layout base
│   ├── pages/
│   │   ├── index.astro          # Página principal
│   │   ├── cv.astro             # Visor de CV
│   │   └── recomendaciones.astro # Visor de recomendaciones
│   └── styles/
│       └── global.css           # Variables CSS y estilos
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Personalización

1. **Nombre y roles**: `src/components/Hero.astro`
2. **Proyectos**: `src/components/Projects.astro`
3. **Contacto**: `src/components/Contact.astro`
4. **PDFs**: Coloca archivos en `public/`
5. **Colores**: Editar variables CSS en `src/styles/global.css`

## Tecnologías

- [Astro](https://astro.build/) - Framework estático
- CSS Variables - Sistema de diseño
- Google Fonts - Space Grotesk + Inter
- PDF.js - Visor de PDFs
