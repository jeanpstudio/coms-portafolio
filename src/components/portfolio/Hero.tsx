import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  // ==========================================
  // CONFIGURACIÓN DE FONDO (Hero Background)
  // Cambia el valor de bgType a tu preferencia:
  // 'image' -> Muestra una foto de fondo
  // 'video' -> Muestra un video en loop
  // 'color' -> Muestra el fondo simple (claro/oscuro según el tema)
  const bgType = 'image' as 'color' | 'image' | 'video';
  // ==========================================

  // Clases dinámicas: Si es foto o video, forzamos textos blancos y superponemos una sombra
  const hasMediaBg = bgType === 'image' || bgType === 'video';
  const headingColor = hasMediaBg ? 'text-title-darkbg' : 'text-title';
  const paragraphColor = hasMediaBg ? 'text-subtitle-darkbg' : 'text-subtitle';
  const badgeBg = hasMediaBg ? 'bg-black/30 border-white/20 text-white' : 'bg-primary/5 border-primary/20 text-primary';

  return (
    <section className={`relative overflow-hidden pt-24 pb-32 min-h-[90vh] flex items-center ${bgType === 'color' ? 'bg-background' : 'bg-black'}`}>

      {/* 1. FONDO IMAGEN */}
      {bgType === 'image' && (
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776238037/DSC02564_bgyl5o.jpg"
            alt="Andes Background"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      )}

      {/* 2. FONDO VIDEO */}
      {bgType === 'video' && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            {/* Solo tienes que guardar tu video como 'hero-video.mp4' en la carpeta public/ del proyecto */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* CAPA DE CONTRASTE: Oscurece el fondo multimedia para que las letras blancas sean 100% legibles */}
      {hasMediaBg && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-0" />
      )}

      {/* 3. FONDO COLOR (Diseño predeterminado antiguo) */}
      {bgType === 'color' && (
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none z-0" />
      )}

      <div className="container px-4 md:px-6 mx-auto relative z-10 w-full mt-8">
        <div className="flex flex-col items-start gap-8 max-w-4xl">
          {/* 🟢 EDITAR: Rol profesional en el badge superior */}
          <div className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm ${badgeBg}`}>
            <Globe className="mr-2 h-4 w-4" />
            <span>Communications Officer & Content Strategist</span>
          </div>

          {/* 🟢 EDITAR: Título principal de la web */}
          <h1 className={`text-h1 font-extrabold tracking-tight leading-[1.1] ${headingColor}`}>
            Driving Global Narratives{' '}
            <span className={`${hasMediaBg ? 'text-highlight-darkbg drop-shadow-sm' : 'text-primary'} relative inline`}>
              <span className={`relative z-10 break-words`}>
                for Ecosystem Restoration & Social Impact
              </span>
            </span>
          </h1>

          {/* 🟢 EDITAR: Descripción corta (Bio) */}
          <p className={`mt-4 text-p-lead max-w-2xl font-medium leading-relaxed ${paragraphColor}`}>
            <span className={`font-semibold ${headingColor}`}>Communications Lead & Multimedia Specialist.</span> I bridge the gap between high-altitude field storytelling and modern technical execution. Based in the Andes, working for the world.
          </p>

          <div className="flex flex-col gap-8 mt-4 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#casos"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/resume"
                className={`inline-flex items-center justify-center rounded-md border px-8 py-4 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${hasMediaBg
                  ? 'border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
                  : 'border-border bg-background text-foreground hover:bg-muted'
                  }`}
                target='blank'
              >
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://linkedin.com/in/jeanpstudio"
                className={`transition-all hover:scale-110 active:scale-95 ${hasMediaBg ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/jeanpstudio"
                className={`transition-all hover:scale-110 active:scale-95 ${hasMediaBg ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-primary'}`}
                target='_blank'
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CRÉDITO DE DIRECCIÓN DE ARTE (Flex Técnico) */}
      {/* 🟢 EDITAR: Nombre en los créditos de fotografía / video */}
      {hasMediaBg && (
        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 text-white/60 text-[10px] md:text-xs font-light tracking-widest uppercase flex items-center gap-2 backdrop-blur-sm bg-black/10 px-3 py-1.5 rounded border border-white/10 hover:text-white/90 transition-colors cursor-default">
          <span className="w-3 h-px bg-highlight-darkbg/80"></span>
          {bgType === 'video' ? 'Cinematography' : 'Photography'} & Creative Direction by Jean Pierre Salguero
        </div>
      )}

    </section>
  );
}
