# 🚀 Hybrid Strategy & Engineering Portfolio | Astro Framework

This is the technical core of my professional portfolio, architected under **Senior Frontend standards**. It demonstrates a highly scalable, content-driven structure optimized for performance, SEO, and deep integration between multimedia storytelling and modern web technology.

## 📁 Architectural Structure

```text
/
├── src/
│   ├── assets/             # Optimized static resources (Cloudinary-ready)
│   │   ├── images/         # Processed assets via Astro Image
│   │   └── styles/         # Tailwind CSS Layers & Design Tokens
│   ├── components/         # Atomic UI components (Astro & React)
│   │   ├── common/         # Cross-functional UI (Buttons, Chips, Icons)
│   │   ├── layout/         # Core Structure: Navbar, Footer, Bento Grids
│   │   └── ui/             # Atomic design components (Shadcn-inspired)
│   ├── content/            # Data Layer: MDX Project Case Studies
│   │   ├── projects/       # Narrative & Technical documentation
│   │   └── config.ts       # Content Collections Schema (Zod Validation)
│   ├── layouts/            # Base HTML Structures with SEO Meta-tags
│   ├── lib/                # External libraries & Business logic
│   ├── pages/              # File-based routing (Astro App Router)
│   ├── types/              # Strict TypeScript Definitions
│   └── utils/              # Pure auxiliary functions
├── public/                 # Static direct assets (Resume PDF, Favicons)
├── astro.config.mjs        # Main Astro configuration & Integrations
└── tailwind.config.mjs     # Custom Design System configuration

✨ Core Engineering Features
Content Collections & Zod: Robust data management with strict schema validation for project case studies and metadata.

Dynamic MDX Integration: Leveraging MDX to blend high-end visual storytelling with interactive React components.

SEO-First Architecture: Integrated BaseLayout handling Meta Tags, Open Graph, and Social Visibility out of the box.

Strict Type Safety: Full TypeScript implementation for error-free development and maintainable codebases.

Performance Optimized: Native use of <Image /> component and zero-JS islands architecture for maximum Core Web Vitals scores.

🛠️ Development Workflow
Command	Action
npm run dev	Starts the high-speed Vite development server
npm run build	Compiles a production-ready static site
npm run preview	Previews the production build locally
📄 Professional Purpose
This repository is more than a portfolio; it is a demonstration of Technical Communication. It showcases how to translate complex field operations—like the UN Flagship and Earthshot Prize narratives—into a high-performance digital ecosystem.

Architected & Developed by Jean Pierre Salguero
