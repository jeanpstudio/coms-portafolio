import React from 'react';
import { FileText, Mail } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
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

export default function ContactCTA() {
  return (
    <section id="contacto" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* 🟢 DECORACIÓN: Elementos visuales de fondo para mejorar la estética */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* 🟢 EDITAR: Título de la llamada a la acción final */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Let’s build the next global narrative together.
          </h2>
          {/* 🟢 EDITAR: Descripción del CTA */}
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
            Looking for a strategic partner to bridge high-altitude field operations with world-class digital performance? Reach out to start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#0077b5] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#0077b5]/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              <LinkedinIcon className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </a>

            <a
              href="/resume"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-zinc-700 bg-transparent px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Professional Resume
            </a>
          </div>

          <div className="pt-16 mt-16 border-t border-zinc-800">
            <a className="text-zinc-500 flex items-center justify-center text-sm">
              <Mail className="w-4 h-4 mr-2" />
              admin@jeanpstudio.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
