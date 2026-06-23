# Design System: Kevin Villatoro Portfolio

## Configuration

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `7` | Editorial with restrained boldness. Inline visual accents, strong typography hierarchy, asymmetric layouts. Not chaotic, but never boring. |
| **Density** | `4` | Gallery-airy with purposeful whitespace. Each section breathes. Content earns its space. |
| **Variance** | `7` | High offset energy. No two sections share the same layout grammar. Hero split, masonry projects, centered contact. |
| **Motion Intent** | `5` | Fluid CSS transitions, spring-physics hover states, staggered reveals. Alive but never theatrical. |

---

## 1. Visual Theme & Atmosphere

A nocturnal, cyberpunk-tinged portfolio with clinical precision and electric warmth. The atmosphere is a dimly lit control room — dark surfaces punctuated by sharp cyan and magenta accents, like instruments glowing in the dark. Density is airy (Level 4), variance runs high (Level 7) to prevent monotonous rhythm, and motion is fluid but restrained (Level 5). The overall impression: technical, confident, alive.

The background carries a subtle grid pattern (`rgba(0, 212, 255, 0.03)`) — a nod to technical blueprints without being literal. Floating geometric shapes drift through the depth layer, adding ambient life without distraction.

---

## 2. Color Palette & Roles

### Core Palette
- **Void Black** (#0A0A0F) — Primary canvas. Deep, near-black with blue undertone. Never pure #000000
- **Surface Dark** (#12121A) — Secondary surfaces, section backgrounds. Slightly lifted from canvas
- **Glass Tint** (rgba(255,255,255,0.05)) — Card fills. Semi-transparent for depth layering
- **Glass Border** (rgba(255,255,255,0.08)) — Structural lines, card borders. Whisper-thin, semi-transparent
- **Text Primary** (#F0F0F5) — Headings, primary content. Off-white, never pure #FFFFFF
- **Text Secondary** (#A0A0B0) — Body text, descriptions. Muted warmth
- **Text Muted** (#6B6B80) — Labels, metadata, disabled states

### Accent System (Dual-accent, restrained)
- **Electric Cyan** (#00D4FF) — Primary accent. Links, active states, focus rings, tag borders. Saturation 100% but used sparingly
- **Neon Magenta** (#FF00AA) — Secondary accent. Gradient endpoints, decorative highlights. Never used alone for interactive elements
- **Accent Gradient** (linear-gradient 135deg, Cyan → Magenta) — Reserved for: section title highlights, featured badges, scrollbar thumb. Maximum 3 uses per viewport

### Functional Colors
- **Danger Red** (#FF4444) — Confidential/NDA states, security warnings
- **Success Green** (#34D399) — Copy confirmation, active states
- **Accent Purple** (#A855F7) — Reportería service indicator
- **Accent Red** (#FF4444) — Laravel service indicator
- **LinkedIn Blue** (#0A66C2) — Brand-specific icon backgrounds
- **GitHub White** (#F0F0F0) — Brand-specific icon backgrounds
- **WhatsApp Green** (#25D366) — Brand-specific icon backgrounds
- **Email Red** (#EA4335) — Brand-specific icon backgrounds

### Banned Colors
- Pure Black (#000000) — Use Void Black (#0A0A0F) instead
- Pure White (#FFFFFF) — Use Text Primary (#F0F0F5) instead
- Purple/Violet neon — The "AI Purple" aesthetic is forbidden
- Oversaturated backgrounds — Max 10% opacity for any accent-tinted surface

---

## 3. Typography Rules

### Font Stack
- **Display/Headlines:** `Space Grotesk` — Geometric, technical character. Weight 600. Track-tight (-0.02em). Scale via `clamp(1.75rem, 4vw, 2.5rem)` for h2
- **Body:** `Inter` — Clean, readable. Weight 400. Leading 1.6. Max-width 65ch. Color: Text Secondary (#A0A0B0)
- **Mono:** System monospace — For code blocks, technical metadata only

### Type Scale
- **h1:** `clamp(2.5rem, 6vw, 4rem)` — Hero headlines only
- **h2:** `clamp(1.75rem, 4vw, 2.5rem)` — Section titles
- **h3:** `clamp(1.25rem, 2vw, 1.5rem)` — Card titles, subsections
- **Body:** `1rem` (16px) — Minimum readable size
- **Small:** `0.875rem` — Card descriptions, secondary content
- **Tiny:** `0.75rem` — Tags, labels, metadata

### Gradient Text Treatment
- Applied via `.gradient-text` class
- `background: linear-gradient(135deg, Cyan, Magenta)`
- `background-clip: text` with `-webkit-text-fill-color: transparent`
- Use sparingly: section title accents only ("Destacados", "Contacto")

### Banned Typography
- Serif fonts in any context
- Font sizes below 14px for body text
- Gradient text on full headings (accents only)
- Letter-spacing above 0.1em except for tiny labels

---

## 4. Component Stylings

### Glass Cards (`.glass-card`)
- **Fill:** `rgba(255,255,255,0.05)` — Semi-transparent glass
- **Border:** `1px solid rgba(255,255,255,0.08)` — Whisper border
- **Radius:** `20px` — Generously rounded
- **Shadow:** `0 8px 32px rgba(0,0,0,0.3)` — Deep, diffused
- **Hover:** `translateY(-4px)` lift, border brightens to `rgba(255,255,255,0.12)`
- **Backdrop:** `blur(12px)` with `@supports` fallback for older browsers

### Project Cards
- **Layout:** Flex column, overflow hidden
- **Image area:** `aspect-ratio: 16/10` for compact, no ratio for hero
- **Content padding:** `1.5rem` (compact), `2rem` (hero)
- **Hover:** `scale(1.02)` — Subtle magnification, no shadow addition
- **Confidential state:** Red overlay with lock icon, `cursor: not-allowed`
- **NDA reveal:** Lock scales 1.4x with red glow, text appears with spring animation

### Tags/Pills
- **Fill:** `rgba(0, 212, 255, 0.1)` — Cyan tinted
- **Border:** `1px solid rgba(0, 212, 255, 0.2)` — Subtle cyan outline
- **Text:** Electric Cyan (#00D4FF)
- **Radius:** `9999px` — Full pill shape
- **Size:** `0.75rem` font, `0.25rem 0.75rem` padding

### Buttons
- **Primary:** Gradient fill (Cyan → Magenta), dark text
- **Ghost/Outline:** Transparent fill, glass border, light text
- **Active:** `translateY(-2px)` — Tactile push
- **Copy Button:** Appears on hover, success state with green checkmark

### Contact Cards
- **Icon containers:** 56px squares, brand-tinted backgrounds at 10% opacity
- **Layout:** Horizontal flex, icon | content | action
- **Hover:** `translateY(-2px)` — Gentle lift

---

## 5. Preloader & Animations

### Preloader Component
- **Duration:** 1.5s loading screen
- **Elements:** Orbit system, hex grid, code rain, progress bar, scan line
- **Name Display:** "KEVIN VILLATORO" with glitch effect
- **Event System:** Dispatches `preloader:done` event when complete
- **Duration Control:** Reduced from 3s to 1.5s for faster initial load

### ScrollButton Component
- **Position:** Fixed, bottom-right corner
- **Functionality:** Scroll to top/bottom toggle
- **Visibility:** Appears after scrolling down
- **Icon:** Chevron up/down with rotation animation

### Glitch Effects
- **Preloader Glitch:** "KEVIN VILLATORO" in preloader
- **Hero Glitch:** "Kevin Villatoro" in Hero section
- **Event System:** Preloader dispatches `preloader:done` event, Hero listens to trigger glitch
- **Hero Glitch Timing:** Cascada 150ms entre nombre y apellido, solo se activa post-preloader

---

## 6. Hero Section

### Structure
- **Layout:** Full-width, centered text within container
- **Title:** "Hola, soy" (muted) + "Kevin Villatoro" (glitch effect, activated after preloader)
- **Subtitle:** "Tech Lead" in Text Secondary
- **Action Buttons:** Recomendaciones (heart icon, magenta) + CV (document icon, cyan) + LinkedIn + GitHub
- **Code Block:** Centered on mobile, shows example code with syntax highlighting
- **Background:** Void Black with grid pattern overlay
- **Floating shapes:** Geometric primitives (circle, square, triangle, hexagon) with slow vertical drift animation

### Glitch Effect
- **Trigger:** `preloader:done` event from Preloader component
- **Timing:** Cascada 150ms entre nombre y apellido
- **Class:** `.glitch-active` added via JS listener
- **Cascada:** Nombre primero, apellido después

### Constraints
- Maximum 2 lines of subtitle text
- No scroll indicators or bouncing arrows
- Glitch on name only, not full title
- Shapes never overlap text content
- Code block centered on mobile with `margin: 0 auto; text-align: left`

---

## 7. About Section

### Photo Effects
- **Frame:** Bracket frame with cyan/magenta corners
- **Hover:** Scale 1.05 with scan line effect
- **Experience Badge:** "10+" static, inside photo-frame
- **Easter Egg:** Typing effect below photo frame on hover (6rem height, 2rem padding-top)

### Skills Grid
- **Layout:** 2-column grid on desktop, 1-column on mobile
- **Categories:** Arquitectura, DevOps, Liderazgo
- **Style:** Glass cards with icons

### Education
- **Layout:** Card with institution, degree, year
- **Style:** Consistent with glass card design

### Recommendations Link
- **Text:** "Ver recomendaciones →" with heart icon
- **Animation:** Heartbeat animation on heart icon
- **Position:** Between bio paragraphs, centered on mobile (≤968px)

---

## 7. Layout Principles

### Grid System
- **Container:** `max-width: 1200px`, centered with `padding: 0 1.5rem`
- **Projects grid:** `repeat(auto-fill, minmax(350px, 1fr))` — Responsive auto-fit
- **Featured cards:** `grid-column: span 2` on desktop, collapse to 1 on mobile
- **Section padding:** `clamp(4rem, 8vw, 8rem)` vertical

### Section Structure
Each section follows:
1. `.section-title` — Centered, h2 with gradient accent, muted subtitle
2. Content container — Grid or flex layout specific to section type
3. Consistent vertical rhythm via `--section-padding`

### Responsive Breakpoints
- **Desktop:** `> 1024px` — Full grid, horizontal hero cards
- **Tablet:** `768px - 1024px` — 2-column grids, stacked heroes
- **Mobile:** `< 768px` — Single column, stacked layouts, reduced padding

### Banned Layout Patterns
- `calc()` percentage hacks — Use CSS Grid
- `height: 100vh` — Always `min-height: 100dvh` for iOS Safari
- Horizontal scroll on mobile — Critical failure
- Overlapping content elements — Clean spatial separation

---

## 10. Motion & Interaction

### Transition Defaults
- **Fast:** `0.2s ease` — Tags, small interactions
- **Normal:** `0.3s ease` — Cards, hover states
- **Slow:** `0.5s ease` — Image transforms, reveals

### Hover States
- **Cards:** `scale(1.02)` — Subtle magnification
- **Contact cards:** `translateY(-2px)` — Gentle lift
- **Links:** Color transition to accent on hover
- **Tags:** Background opacity increase

### Confidential/NDA Animation
- **Lock icon:** `scale(1 → 1.4)` with red glow `drop-shadow(0 0 12px rgba(255, 68, 68, 0.8))`
- **NDA text:** Spring entrance `translateY(-10px → 0) scaleY(0.5 → 1)` with `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Glitch shake:** `translateX(±6px)` cascade after entrance

### Ambient Motion
- **Floating shapes:** `shapeFloat` — Vertical drift with rotation, 20-30s duration
- **Slideshow:** `fadeSlide` — Crossfade between project images, 12s cycle
- **Reduced motion:** All animations respect `prefers-reduced-motion: reduce`

### Hardware Rules
- Animate only `transform` and `opacity`
- Never animate `top`, `left`, `width`, `height`
- Use `will-change` sparingly on animated elements

---

## 11. Anti-Patterns (Banned)

### Visual
- No pure black (#000000) or pure white (#FFFFFF)
- No purple/violet neon aesthetics
- No oversaturated accent backgrounds (>10% opacity)
- No generic card grids (3 equal columns)
- No overlapping content elements

### Typography
- No serif fonts in any context
- No font sizes below 14px
- No gradient text on full headings (accents only)
- No excessive letter-spacing on body text

### Interaction
- No hover shadows with accent colors (cyan glow removed)
- No animated borders or unnecessary decorative animations
- No custom cursors
- No scroll indicators or bouncing arrows

### Content
- No emojis in UI
- No AI copywriting clichés ("Elevate", "Seamless", "Next-Gen")
- No fake metrics or fabricated statistics
- No generic placeholder names
- No "Scroll to explore" or similar filler text

### Technical
- No `h-screen` — Always `min-h-[100dvh]`
- No flexbox percentage math — Use CSS Grid
- No horizontal scroll on mobile
- No circular loading spinners (use skeletal shimmer)

---

## 12. Security Visual Language

### Confidential Projects
- **Overlay:** `rgba(0, 0, 0, 0.5)` with `backdrop-filter: blur(3px)`
- **Icon:** Lock SVG, 48px, danger red (#FF4444)
- **Hover state:** Blur increases to 8px, lock scales 1.4x with red glow
- **NDA text:** "[ NDA: PROTEGIDO ]" — Appears with spring animation + glitch shake
- **Cursor:** `not-allowed` on entire card

### Contact Security
- No sensitive data visible in UI (email, phone hidden)
- Cards show only brand icon + label
- Direct actions: mailto, LinkedIn redirect, GitHub redirect, WhatsApp API
- No copy buttons, no clipboard exposure
- Brand-colored icon containers (Gmail red, LinkedIn blue, GitHub white, WhatsApp green)
