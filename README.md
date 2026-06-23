# 🚀 Kevin Villatoro - Tech Lead Portfolio

**Portafolio personal de un Tech Lead con más de 10 años de experiencia arquitectando soluciones escalables y liderando equipos de desarrollo.**

🔗 **[Ver Portfolio en Producción](https://kevin-villatoro-dev.github.io/)**

---

## 🛠️ Tech Stack

| Tecnología | Uso |
|------------|-----|
| ![Astro](https://img.shields.io/badge/Astro-6.x-FF5D01?logo=astro&logoColor=white) | Framework estático de alto rendimiento |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | Estructura semántica |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) | Diseño responsive con variables CSS |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) | Interactividad y animaciones |
| ![PDF.js](https://img.shields.io/badge/PDF.js-Mozilla-FF0000) | Visor de documentos PDF |
| ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white) | CI/CD y despliegue automático |

---

## ✨ Características Principales

### 🎨 Diseño & UX
- **Dark Theme** con acentos neón (cyan y magenta)
- **Glassmorphism** cards con efecto de cristal esmerilado
- **Animaciones fluidas** respetando `prefers-reduced-motion`
- **100% Responsive** - Optimizado para desktop, tablet y móvil

### ⚡ Rendimiento
- **Static Site Generation (SSG)** - Velocidad de carga instantánea
- **SEO Optimizado** - Meta tags y estructura semántica
- **Lighthouse Score** - 100/100 en todas las categorías

### 🎯 Funcionalidades
- **Preloader animado** con efecto glitch y sistema de órbitas
- **Easter egg interactivo** en la foto de perfil
- **Línea de tiempo laboral** con highlights de experiencia
- **Grid de proyectos** con imágenes SVG personalizadas
- **Visor de CV** con navegación por páginas
- **Carrusel de recomendaciones** con PDF.js
- **Botón de scroll** flotante para navegación rápida

### 📱 Navegación
- **Header responsive** con menú hamburguesa para móvil
- **Iconos SVG** personalizados para cada sección
- **Atajos de iconos** para Recomendaciones y CV

---

## 📂 Estructura del Proyecto

```
├── 📁 public/
│   ├── *.pdf                    # Documentos PDF (CV, recomendaciones)
│   └── 📁 images/projects/      # Imágenes SVG de proyectos
├── 📁 src/
│   ├── 📁 components/           # Componentes Astro reutilizables
│   │   ├── Header.astro         # Navegación principal
│   │   ├── Hero.astro           # Sección hero con glitch effect
│   │   ├── Timeline.astro       # Línea de tiempo laboral
│   │   ├── Projects.astro       # Grid de proyectos destacados
│   │   ├── ProjectCard.astro    # Tarjeta individual de proyecto
│   │   ├── About.astro          # Biografía y habilidades
│   │   ├── Contact.astro        # Métodos de contacto
│   │   ├── Footer.astro         # Pie de página
│   │   ├── Preloader.astro      # Pantalla de carga animada
│   │   ├── ScrollButton.astro   # Botón flotante scroll
│   │   └── PdfViewerStyles.astro # CSS compartido visores
│   ├── 📁 layouts/
│   │   └── Layout.astro         # Layout base del sitio
│   ├── 📁 pages/
│   │   ├── index.astro          # Página principal
│   │   ├── cv.astro             # Visor de currículum
│   │   └── recomendaciones.astro # Visor de recomendaciones
│   └── 📁 styles/
│       └── global.css           # Variables y estilos globales
├── 📁 .github/workflows/
│   └── deploy.yml               # GitHub Actions para Pages
├── astro.config.mjs             # Configuración de Astro
└── package.json                 # Dependencias del proyecto
```

---

## 🚀 Inicio Rápido

### Prerrequisitos
- [Node.js](https://nodejs.org/) >= 22.12.0
- [fnm](https://fnm.vercel.app/) (Fast Node Manager)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/kevin-villatoro-dev/kevin-villatoro-dev.github.io.git

# Entrar al directorio
cd kevin-villatoro-dev.github.io

# Instalar dependencias
fnm exec --using=default -- npm install

# Iniciar servidor de desarrollo
fnm exec --using=default -- npm run dev
```

El servidor se iniciará en `http://localhost:4321`

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `fnm exec --using=default -- npm run dev` | 🖥️ Servidor de desarrollo |
| `fnm exec --using=default -- npm run build` | 📦 Construir para producción |
| `fnm exec --using=default -- npm run preview` | 👁️ Vista previa de producción |

---

## 🌐 Despliegue

El proyecto está configurado para desplegarse **automáticamente** en GitHub Pages al hacer push a la rama `main`.

### Configuración de GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Build and deployment**, selecciona **Source: GitHub Actions**
3. Cada push a `main` desplegará el sitio automáticamente

**URL de Producción:** `https://kevin-villatoro-dev.github.io/`

---

## 🎨 Personalización

### Cambiar Información Personal
- **Nombre y roles:** `src/components/Hero.astro`
- **Experiencia laboral:** `src/components/Timeline.astro`
- **Biografía y skills:** `src/components/About.astro`
- **Proyectos:** `src/components/Projects.astro`
- **Contacto:** `src/components/Contact.astro`

### Cambiar Colores
Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --accent-cyan: #00d4ff;      /* Color primario */
  --accent-magenta: #ff00aa;   /* Color secundario */
  --bg-primary: #0a0a0f;       /* Fondo principal */
  /* ... más variables */
}
```

### Agregar Proyectos
1. Coloca la imagen SVG en `public/images/projects/`
2. Actualiza la información en `src/components/Projects.astro`

### Actualizar PDFs
1. Coloca tus archivos PDF en `public/`
2. Actualiza las rutas en `src/pages/cv.astro` y `src/pages/recomendaciones.astro`

---

## 📄 Páginas

| Página | Descripción |
|--------|-------------|
| [🏠 Inicio](https://kevin-villatoro-dev.github.io/) | Página principal con todas las secciones |
| [📋 CV](https://kevin-villatoro-dev.github.io/cv/) | Visor de currículum interactivo |
| [⭐ Recomendaciones](https://kevin-villatoro-dev.github.io/recomendaciones/) | Carrusel de cartas de recomendación |

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`)
3. Haz commit de tus cambios (`git commit -m 'Agregar nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

**Kevin Villatoro** - Tech Lead

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kevin-villatoro-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-F0F0F0?style=for-the-badge&logo=github&logoColor=black)](https://github.com/kevin-villatoro-dev)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kevin.villatoro.dev@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/50259027761?text=Hola%20Kevin,%20acabo%20de%20ver%20tu%20Portafolio%20y%20me%20gustar%C3%ADa%20que%20agend%C3%A1ramos%20una%20reuni%C3%B3n)

---

> *"El código conecta, pero las personas hacen la diferencia."*
