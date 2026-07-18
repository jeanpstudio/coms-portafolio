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
          <h2 className="text-h2 font-extrabold tracking-tight text-title-darkbg mb-6">
            Let’s build the next global narrative together.
          </h2>
          {/* 🟢 EDITAR: Descripción del CTA */}
          <p className="text-p-lead text-subtitle-darkbg max-w-2xl mx-auto mb-10 font-medium">
            Looking for a strategic partner to bridge high-altitude field operations with world-class digital performance? Reach out to start the conversation.
          </p>

          <form
            action="https://formspree.io/f/meevejeg"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 text-left"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="How can we collaborate?"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
            <a
              href="https://linkedin.com/in/jeanpstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
            >
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="/resume"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
            >
              <FileText className="h-5 w-5" />
              Resume
            </a>
            <a
              href="mailto:admin@jeanpstudio.com"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
