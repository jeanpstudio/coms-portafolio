# Contexto de la Aplicación y Sistema de Diseño Unificado

Este archivo es la fuente única de verdad para el portafolio profesional de **Jean Pierre Salguero**. Aquí se detalla la arquitectura de la aplicación, los componentes funcionales, las directrices estéticas unificadas y los tokens de diseño que controlan la apariencia visual del sitio.

---

## 📖 1. Arquitectura y Funciones de la Aplicación

La aplicación está construida sobre **Astro v6** utilizando componentes híbridos de **React (TypeScript)** y estilos basados en **Tailwind CSS v4** (con importación nativa en CSS `@import "tailwindcss";`).

### Páginas Principales
1. **Página de Inicio (`src/pages/index.astro`)**:
   - La landing page principal del portafolio. Carga los componentes modulares e implementa la navegación dinámica basada en anclas.
2. **Página de Currículum (`src/pages/resume.astro`)**:
   - Currículum interactivo optimizado para lectura digital e impresión física (`@media print`). Permite exportar/imprimir un PDF limpio.
3. **Página de Detalle de Proyectos (`src/pages/projects/[id].astro`)**:
   - Ruta dinámica que lee casos de estudio en formato MDX desde `src/content/projects/` y los renderiza usando componentes especializados de presentación.

### Componentes de Presentación y Funcionales
- **`Navigation.astro`**: Barra de navegación sticky inteligente que cambia de estilo (fondo transparente a semi-blanco con blur) al hacer scroll.
- **`Hero.tsx`**: Sección de impacto con soporte dinámico para tres tipos de fondo: imagen, video en loop (`/hero-video.mp4`) o color plano.
- **`CasesGrid.tsx`**: Cuadrícula de casos de éxito (Operations, Creative, Partnerships, Performance) que introduce el problema, la solución y el resultado con un enlace a la vista detallada.
- **`HybridSkills.tsx`**: Visualización de los tres pilares de experiencia (Estrategia, Creativo, Tecnología) en tarjetas estructuradas.
- **`FieldGallery.tsx`**: Galería fotográfica interactiva tipo "Bento Box" con un lightbox integrado para visualizar expediciones de alta montaña.
- **`HybridProfile.tsx`**: Biografía detallada sobre Jean Pierre, destacando su perfil híbrido y ofreciendo la descarga directa del currículum.
- **`ContactCTA.tsx`**: Formulario de contacto integrado con Formspree para la captación directa de mensajes, enlazado a redes sociales.
- **`ProjectHeader.astro`**: Cabecera dinámica de proyecto que carga el título, la frase de impacto, los metadatos (año, herramientas, rol) y la imagen principal.
- **`ProjectChallenge.astro`**: Renderiza el contexto, el desafío y la solución técnica del proyecto, incorporando imágenes del trabajo en campo.
- **`ProjectStrategy.astro`**: Detalla la estrategia de narrativa y producción multimedia junto con las especificaciones y características de la implementación técnica.
- **`ProjectImpact.astro`**: Muestra las métricas clave y resultados cuantitativos obtenidos en el proyecto.
- **`ProjectNavigation.astro`**: Controles de navegación para regresar al inicio o avanzar al siguiente caso de estudio en loop.

---

## 🎨 2. Tokens de Diseño Sincronizables (Configuración Modificable)

El bloque JSON de abajo contiene la configuración visual de la aplicación. **Cualquier cambio aquí se propagará automáticamente al código fuente** ejecutando el script de sincronización.

### 📝 Guía de Formatos en el JSON:
1. **`googleFontsUrl`**: El enlace directo del archivo de estilos generado por Google Fonts. Debes incluir las familias que deseas usar con sus respectivos grosores (`wght`).
2. **`fontSans`** y **`fontHeading`**: Nombre exacto de la fuente para las hojas de estilo CSS. 
   - *Ejemplo*: `"fontSans": "'Inter', sans-serif"` o `"fontHeading": "'Montserrat', sans-serif"`.
   - *Fuentes Populares de Google Fonts como Referencia (Comentarios)*:
     - **Inter** (Limpia, ideal para lectura de textos largos): `'Inter', sans-serif`
     - **Montserrat** (Geométrica, excelente para títulos llamativos): `'Montserrat', sans-serif`
     - **Outfit** (Moderna y redonda): `'Outfit', sans-serif`
 3. **Colores (`colors`)**: Se configuran usando códigos hexadecimales estándar (HEX) con el formato `"#RRGGBB"`. A continuación se detalla qué modifica cada variable en la web:

   | Variable JSON | Tipo de Elemento que Modifica | Descripción |
   | :--- | :--- | :--- |
   | `background` | Fondo Principal | Color de fondo general del sitio web (generalmente blanco o claro). |
   | `foreground` | Texto General | Color de los textos de párrafo estándar y cuerpo de la página. |
   | `card` | Fondo de Tarjeta | Color de fondo de los bloques (Bento Grid, tarjetas de casos de éxito, etc.). |
   | `card-foreground`| Texto de Tarjeta | Color del texto que va dentro de las tarjetas y bloques. |
   | `primary` | Color de Marca Principal | Color de los botones principales, badges superiores, iconos de estado y realces generales en fondos claros. |
   | `primary-foreground`| Texto sobre Primary | Color del texto que se dibuja sobre fondos con el color `primary` (ej. letras blancas en botones). |
   | `secondary` | Fondo Secundario | Color de fondo para botones secundarios y secciones auxiliares. |
   | `secondary-foreground`| Texto Secundario | Color de texto sobre elementos con color secundario. |
   | `muted` | Elementos Desvanecidos| Color de fondo para estados inactivos o separadores con muy bajo contraste. |
   | `muted-foreground`| Texto Desvanecido | Color para leyendas secundarias o etiquetas de metadatos. |
   | `accent` | Acento Interactivo | Color para estados hover, enlaces interactivos y pequeños detalles de marca. |
   | `accent-foreground`| Texto sobre Acento | Color del texto que va sobre elementos con color `accent`. |
   | `destructive` | Color de Alerta | Color para indicar errores, alertas o acciones destructivas (ej. rojo). |
   | `destructive-foreground`| Texto sobre Alerta | Color del texto sobre elementos destructivos. |
   | `border` | Línea de Borde | Color de los bordes de tarjetas, líneas separadoras y campos de formulario. |
   | `input` | Entrada de Formularios | Color de fondo de los campos de texto e inputs de formularios. |
   | `ring` | Anillo de Foco | Color del contorno de accesibilidad al seleccionar botones con el teclado. |
   | `text-title` | Títulos en Claro | Color de los encabezados principales (H1, H2, H3, H4) sobre fondo blanco. |
   | `text-subtitle` | Subtítulos en Claro | Color de los textos secundarios y descripciones sobre fondo blanco. |
   | `text-title-dark-bg`| Títulos en Oscuro | Color de los títulos que van sobre imágenes o fondos oscuros (como en el Hero). |
   | `text-subtitle-dark-bg`| Subtítulos en Oscuro | Color de los subtítulos que van sobre imágenes o fondos oscuros (como en el Hero). |
   | `text-highlight-dark-bg`| Resaltado en Oscuro | Color del texto verde/resaltado brillante en títulos que se superponen a vídeos o imágenes (ej. en el banner Hero). |

4. **Bordes Redondeados (`imageRadius` y `radius`)**: Tamaños en unidades CSS como `rem` o `px`.
5. **headingSizes**: Tamaños específicos para encabezados en móviles (`mobile`) y en pantallas grandes (`desktop`).

<!-- DESIGN_TOKENS_START -->
```json
{
  "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap",
  "fontSans": "\"Inter\", system-ui, -apple-system, sans-serif",
  "fontHeading": "\"Montserrat\", var(--font-sans)",
  "colors": {
    "background": "#ffffff",
    "foreground": "#242f3d",
    "card": "#ffffff",
    "card-foreground": "#242f3d",
    "popover": "#ffffff",
    "popover-foreground": "#242f3d",
    "primary": "#166534",
    "primary-foreground": "#ffffff",
    "secondary": "#f1f3f5",
    "secondary-foreground": "#0d3a1e",
    "muted": "#f1f3f5",
    "muted-foreground": "#5c6e80",
    "accent": "#166534",
    "accent-foreground": "#ffffff",
    "destructive": "#ef4444",
    "destructive-foreground": "#ffffff",
    "border": "#e2e8f0",
    "input": "#e2e8f0",
    "ring": "#166534",
    "radius": "0.5rem",
    "text-title": "#242f3d",
    "text-subtitle": "#5c6e80",
    "text-title-dark-bg": "#ffffff",
    "text-subtitle-dark-bg": "#dcdcdc",
    "text-highlight-dark-bg": "#34d399"
  },
  "imageRadius": "2.5rem",
  "headingSizes": {
    "h1-mobile": "2.25rem",
    "h1-desktop": "4.5rem",
    "h2-mobile": "1.875rem",
    "h2-desktop": "3rem",
    "h3-mobile": "1.5rem",
    "h3-desktop": "1.875rem",
    "h4-mobile": "1.25rem",
    "h4-desktop": "1.25rem"
  },
  "paragraphSizes": {
    "p-lead-mobile": "1.125rem",
    "p-lead-desktop": "1.25rem",
    "p-body": "1rem",
    "p-sm": "0.875rem"
  }
}
```
<!-- DESIGN_TOKENS_END -->

---

## ⚡ 3. ¿Cómo Aplicar Cambios de Diseño?

Cuando modifiques el JSON de arriba en `contexto.md`, ejecuta el siguiente comando en la terminal para propagar los cambios automáticamente a todo el proyecto:

```bash
npm run sync-design
```

Este script actualizará:
1. Las fuentes de Google cargadas en [BaseLayout.astro](file:///Users/jeanpstudio/Desktop/Apps/portafolio-coms/coms-portafolio/src/layouts/BaseLayout.astro).
2. Las variables de tipografía CSS en [BaseLayout.astro](file:///Users/jeanpstudio/Desktop/Apps/portafolio-coms/coms-portafolio/src/layouts/BaseLayout.astro).
3. Todas las variables CSS de colores de interfaz, colores de texto, bordes redondeados y tamaños de encabezados en [global.css](file:///Users/jeanpstudio/Desktop/Apps/portafolio-coms/coms-portafolio/src/assets/styles/global.css).

---

## 📏 4. Directrices de Estética Unificada (Patrones de Diseño)

Para mantener la consistencia en todas las secciones actuales y cualquier página o sección nueva, **debes usar las siguientes clases y patrones unificados**:

### A. Tipografía y Encabezados
No utilices tamaños ad-hoc como `text-4xl md:text-7xl` directamente en el HTML de los encabezados. Usa las siguientes utilidades responsivas en su lugar:
- **`text-h1`**: Título de gran impacto (ej. Hero de la home, cabecera de proyectos).
- **`text-h2`**: Títulos de secciones principales (ej. "Success Stories", "Core Expertise").
- **`text-h3`**: Títulos de tarjetas o subsecciones (ej. nombres de proyectos individuales, pilares de habilidades).
- **`text-h4`**: Etiquetas y metadatos de menor jerarquía.

### B. Colores de Texto
Utiliza las variables unificadas para dar legibilidad:
- **Títulos (Fondo Claro)**: Utiliza la clase `text-title` (mapeada a `--color-title`).
- **Subtítulos (Fondo Claro)**: Utiliza la clase `text-subtitle` (mapeada a `--color-subtitle`).
- **Títulos (Fondo Oscuro/Imagen)**: Utiliza la clase `text-title-darkbg` (mapeada a `--color-title-darkbg`).
- **Subtítulos (Fondo Oscuro/Imagen)**: Utiliza la clase `text-subtitle-darkbg` (mapeada a `--color-subtitle-darkbg`).

### C. Redondeado de Imágenes
- Todas las imágenes que representen portadas de proyectos, fotos en Bento boxes o fotos de perfil deben usar la clase **`rounded-img`** (mapeada a `--radius-img` que lee la propiedad `imageRadius` de este archivo de contexto).
- Evita el uso de clases duras como `rounded-2xl` o `rounded-[2.5rem]` para imágenes principales.

### D. Jerarquía y Tamaños de Párrafo (P)
Se auditaron y unificaron los textos de párrafo del sitio bajo exactamente **3 tipologías específicas** para asegurar una lectura equilibrada y coherente en todo el sitio:
- **`text-p-lead`**: Párrafo destacado de impacto (móvil: 1.125rem / 18px, desktop: 1.25rem / 20px).
  - *¿Por qué existe?* Se utiliza únicamente para textos clave que introducen secciones principales y que van justo debajo de los títulos principales (ej. la bio corta en el Hero, la descripción final del Contacto y la frase de impacto del proyecto).
- **`text-p-body`**: Párrafo estándar de lectura y narración (1rem / 16px).
  - *¿Por qué existe?* Es el tamaño universal para todo el texto corrido del sitio. Se aplica a las descripciones detalladas de los proyectos en la home, la historia del Sobre Mí, y los bloques de "Contexto", "Desafío" y "Solución" en la subpágina de proyectos. Esto asegura que la narrativa de cada proyecto no compita con los títulos y tenga un tamaño de lectura cómodo y unificado.
- **`text-p-sm`**: Párrafo secundario o compacto (0.875rem / 14px).
  - *¿Por qué existe?* Se utiliza exclusivamente para elementos auxiliares como viñetas de listas (bullets), descripciones breves bajo métricas numéricas y metadatos complementarios. Evita que la información secundaria sobrecargue la interfaz.

---

## 📝 5. Historial de Modificaciones

Aquí se detallan todos los cambios significativos y auditorías que se van realizando en la aplicación:

| Fecha | Autor | Tipo de Cambio | Archivos Modificados / Creados | Descripción del Cambio |
| :--- | :--- | :--- | :--- | :--- |
| 18/07/2026 | Antigravity | Auditoría y Documentación | `contexto.md` (NUEVO) | Creación de la fuente única de verdad para el diseño y funciones de la web. |
| 18/07/2026 | Antigravity | Infraestructura Estilos | `src/assets/styles/global.css`, `src/layouts/BaseLayout.astro` | Eliminación definitiva del soporte de modo oscuro a petición del usuario. Adición de marcadores de diseño e inyección de nuevas variables dinámicas de tipografía, colores y redondeado. |
| 18/07/2026 | Antigravity | Sincronización Automática | `scripts/sync-design.js` (NUEVO), `package.json` | Creación del script de sincronización `sync-design` y registro en los comandos npm de la aplicación. |
| 18/07/2026 | Antigravity | Consolidación Tipografía | `contexto.md`, `scripts/sync-design.cjs`, `src/assets/styles/global.css`, componentes | Auditoría completa y simplificación a 3 tamaños de párrafos (`text-p-lead`, `text-p-body`, `text-p-sm`). Agrandamiento de descripciones de proyectos en la home y reducción del tamaño del contexto/desafío en proyectos para unificación estética. |
