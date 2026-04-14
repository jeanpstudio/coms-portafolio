# 🚀 Astro Professional Starter Template

Esta es una plantilla base para proyectos Astro, diseñada bajo los estándares de un **Senior Frontend Developer**. Incluye una estructura de carpetas altamente escalable, configurada con **TypeScript**, **Tailwind CSS**, **React** y **MDX**.

## 📁 Estructura de Carpetas

```text
/
├── src/
│   ├── assets/             # Recursos estáticos optimizados
│   │   ├── images/         # Imágenes procesadas por Astro Assets
│   │   └── styles/         # CSS Global y utilidades de Tailwind
│   ├── components/         # Componentes UI (Astro, React, etc.)
│   │   ├── common/         # Componentes transversales (Botones, Chips)
│   │   ├── layout/         # Header, Footer, Hero
│   │   └── ui/             # Componentes de UI atómicos (shadcn style)
│   ├── content/            # Contenido en Markdown/MDX
│   │   ├── blog/           # Colección de artículos
│   │   └── config.ts       # Configuración de Content Collections (Zod)
│   ├── layouts/            # Estructuras HTML base para las páginas
│   ├── lib/                # Lógica de negocio y librerías externas
│   ├── pages/              # Enrutado basado en archivos (Astro)
│   ├── types/              # Definiciones de TypeScript (Interfaces, Enums)
│   └── utils/              # Funciones auxiliares puras
├── public/                 # Archivos estáticos directos (favicons, robots.txt)
├── astro.config.mjs        # Configuración principal de Astro
├── tailwind.config.mjs      # Configuración de Tailwind CSS
└── tsconfig.json           # Configuración estricta de TypeScript
```

## ✨ Características Principales

- **Content Collections**: Gestión de contenido robusta con validación de esquemas vía **Zod**.
- **Layouts con SEO**: Componente base que maneja Meta Tags, Open Graph y visibilidad en redes sociales.
- **Tailwind CSS + Variables CSS**: Sistema de diseño basado en capas y temas.
- **TypeScript Strict**: Configuración para un desarrollo libre de errores comunes.
- **Optimización de Assets**: Uso nativo de `<Image />` para performance máximo.

## 🛠️ Comandos Disponibles

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local |
| `npm run build` | Compila el sitio para producción |
| `npm run preview` | Previsualiza la compilación localmente |
| `npm run astro ...` | Ejecuta comandos nativos de Astro |

## 📚 Documentación y Comentarios

Cada archivo dentro de `src/` está debidamente comentado para explicar su propósito. Esta estructura permite separar la lógica de presentación de la lógica de datos, facilitando el mantenimiento a largo plazo.

---

*Base de proyecto generada por tu Senior Frontend Assistant.*
