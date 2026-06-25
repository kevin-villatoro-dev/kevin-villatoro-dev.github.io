# AGENTS.md

## Project

Astro 6 static portfolio site for Kevin Villatoro (Tech Lead). Single-page, no SSR, no API routes.

## Commands

```bash
fnm exec --using=default -- npm run dev      # dev server (localhost:4321)
fnm exec --using=default -- npm run build    # static output to dist/
fnm exec --using=default -- npm run preview  # preview production build
```

**fnm required**: all npm commands must run through `fnm exec --using=default --` to use the correct Node version (>=22.12.0).

No lint, typecheck, or test scripts are configured. `npm run build` is the only verification step.

## Deployment

Configured for GitHub Pages with automatic deployment via GitHub Actions.

- **Repository:** `kevin-villatoro-dev.github.io`
- **URL:** `https://kevin-villatoro-dev.github.io/`
- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** Push to `main` branch

## Structure

```
src/
├── components/   # Header, Hero, Timeline, Projects, ProjectCard, About, Contact, Footer, ScrollButton, Preloader, PdfViewerStyles
├── layouts/      # Layout.astro (base HTML, Google Fonts, meta tags, ScrollButton, Preloader)
├── pages/        # index.astro, cv.astro, recomendaciones.astro
└── styles/       # global.css (CSS variables, theme, animations)
```

## Index Section Order

- Hero → Timeline → Timeline -> Skills -> Projects → About → Contact

## Conventions

- Client-side JS: Header hamburger menu (mobile), ScrollButton (scroll to top/bottom), PDF viewer pages (cv, recomendaciones) via PDF.js
- `prefers-reduced-motion` respected globally
- Tab with 4 spaces in code

## Preloader & Animations

- **Preloader**: 1.5s loading screen with orbit system, hex grid, glitch name effect
- **Glitch effect**: "KEVIN ALBERTO VILLATORO ARROYO" in preloader, "Kevin Alberto Villatoro Arroyo" in Hero section
- **Event system**: Preloader dispatches `preloader:done` event, Hero listens to trigger glitch
- **Hero glitch**: Cascada 150ms entre nombre y apellido, solo se activa post-preloader

## PDF Files

- `public/*.pdf` - PDF files (CV, recommendations)
- `src/pages/cv.astro` - CV viewer page (renders PDF via PDF.js)
- `src/pages/recomendaciones.astro` - Recommendations viewer page (carousel with PDF.js)

## CSS Variables

```css
--bg-primary: #0a0a0f
--bg-secondary: #12121a
--bg-card: rgba(255, 255, 255, 0.03)
--accent-cyan: #00d4ff
--accent-magenta: #ff00aa
--accent-green: #34d399
--accent-purple: #a855f7
--accent-red: #ff4444
--color-email: #ea4335
--color-linkedin: #0a66c2
--color-github: #f0f0f0
--color-whatsapp: #25d366
```

## Rules

- Use skills astro, frontend-design for any structural change
- Testing and verification of your changes
