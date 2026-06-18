# AGENTS.md

## Project

Astro 6 static portfolio site. Single-page, no SSR, no API routes.

## Commands

```bash
fnm exec --using=default -- npm run dev      # dev server (localhost:4321)
fnm exec --using=default -- npm run build    # static output to dist/
fnm exec --using=default -- npm run preview  # preview production build
```

**fnm required**: all npm commands must run through `fnm exec --using=default --` to use the correct Node version (>=22.12.0).

No lint, typecheck, or test scripts are configured. `npm run build` is the only verification step.

## Structure

```
src/
├── components/   # Astro components (Header, Hero, Projects, ProjectCard, Contact, Footer)
├── layouts/      # Layout.astro (base HTML, Google Fonts, meta tags)
├── pages/        # index.astro (only page)
└── styles/       # global.css (CSS variables, theme, animations)
```

All content is hardcoded in component files. No CMS, no markdown, no dynamic data.

## Conventions

- Dark theme with CSS custom properties (`--accent-cyan`, `--accent-magenta`, etc.) in `src/styles/global.css`
- Glassmorphism card style via `.glass-card` class
- Google Fonts: Space Grotesk (headings) + Inter (body)
- Components use `<style>` blocks with scoped CSS (Astro default)
- No client-side JS. All interactivity is CSS-only (hover effects, animations)
