import React from 'react';
import { FileDown } from 'lucide-react';

const HybridProfile = () => {
  return (
    <section id="hybrid-profile" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Encabezado Centrado */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl break-words">
            Driven by Impact, <br className="hidden md:block" />
            <span className="text-muted-foreground italic font-medium">Defined by Versatility.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">

          {/* Columna de Imagen */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
              <img
                src="https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776235981/518400297_4119971268246978_6422889270926759859_n_xy1fji.jpg"
                alt="Jean Pierre Salguero in the field"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Columna de Texto */}
          <div className="md:col-span-7 order-1 md:order-2 flex flex-col justify-center">
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium italic hyphens-auto">
              <p>
                With over a decade of experience at the intersection of communication, technology, and social impact,
                I have dedicated my career to amplifying the voices of those protecting our planet’s most vital ecosystems.
              </p>

              <p>
                My approach is inherently hybrid. I am as comfortable scripting a documentary at 14,700 ft in the Andes
                as I am architecting a high-performance web platform or managing a $15K global PR campaign.
                This duality allows me to bridge the gap between complex field operations and the sophisticated
                digital narratives that international donors and stakeholders demand.
              </p>

              <p>
                Currently serving as the Communications Lead for Acción Andina, I focus on building resilient
                digital infrastructures and human-centric storytelling that doesn’t just report impact—it inspires it.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-border flex flex-col md:flex-row md:items-center justify-between items-center md:items-start gap-8">
              <div className="text-center md:text-left">
                <p className="text-foreground font-black text-xl tracking-tighter uppercase mb-1">
                  Jean Pierre Salguero
                </p>
                <p className="text-xs md:text-sm text-primary font-bold uppercase tracking-widest">
                  Communications Lead & Web Developer
                </p>
              </div>

              <a
                href="/resume"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-neutral-800 transition-all group w-fit mx-auto md:mx-0"
                target='blank'
              >
                <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span>Download Full CV</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HybridProfile;
