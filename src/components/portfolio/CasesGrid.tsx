import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

/**
 * COMPONENTE: CasesGrid
 * UBICACIÓN: src/components/portfolio/CasesGrid.tsx
 * 
 * PARA EDITAR: 
 * 1. Modifica el array 'cases' de abajo para cambiar los textos del home.
 * 2. Asegúrate de que el 'slug' coincida con el nombre del archivo en src/content/projects/
 */
const cases = [
  {
    id: 1,
    project: 'Operations Architecture & Tech Implementation',
    slug: 'operations-tech',
    problem: 'Critical lack of oversight for multi-country campaigns and partner deliverables. The organization needed a centralized way to track storytelling, mailing, and task completion across 5 countries.',
    solution: 'Engineered a custom Administration Dashboard to centralize operations. I architected a full oversight system for partner products, storytelling pipelines, and mailing campaigns, aligning it with a regional DAM (Digital Asset Management).',
    result: 'Transitioned from fragmented tracking to 100% operational transparency, enabling real-time supervision of all regional communication products.',
    image: 'https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776233896/featured-dashboard_nkl8id.jpg'
  },
  {
    id: 2,
    project: 'Creative Direction & Global PR Strategy',
    slug: 'creative-global-strategy',
    problem: 'Managing high-stakes global recognition (UN & Earthshot Prize) while maintaining a consistent visual narrative across 5 countries and multiple languages.',
    solution: 'Led the creative direction for international documentary series and PR campaigns, coordinating external agencies and field teams to deliver real-time content for global audiences.',
    result: 'Successfully synchronized global launches for UN Flagship and Earthshot Prize, achieving worldwide media coverage and multi-channel engagement.',
    image: 'https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776236162/L1020003_j95khe_f297d7.jpg'
  },
  {
    id: 3,
    project: 'Strategic Partnerships & Institutional Alignment',
    slug: 'partnership-alignment',
    problem: 'Coordinating 15+ regional partners with different operational capacities while meeting the high-standard reporting requirements of US-based donors (GFG).',
    solution: 'Established a centralized strategic framework, managing multi-country budgets with Finance and translating complex field achievements into impact reports for global stakeholders.',
    result: '100% compliance with international donor requirements and the creation of a unified brand voice through global campaigns (Earth Day, Forests Day).',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    project: 'Performance Marketing & Data-Driven Insights',
    slug: 'marketing-data',
    problem: 'Navigating the "measurement gap" in a decentralized network of 15+ independent partners with varying digital capacities.',
    solution: 'Built a technical tracking ecosystem using Google Tag Manager and Analytics to monitor landing page performance, ad campaigns, and user behavior.',
    result: 'Optimized content strategy based on real-time data, pivoting towards high-impact narratives (Women in Conservation/Crisis Response) to maximize engagement.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function CasesGrid() {
  return (
    <section id="casos" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-h2 font-extrabold tracking-tight text-title">Success Stories</h2>
          <p className="mt-4 max-w-2xl text-lg text-subtitle uppercase text-xs font-bold tracking-widest">
            Scaling impact through technology, narrative strategy, and field expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((c) => (
            <div key={c.id} className="group relative flex flex-col overflow-hidden rounded-img bg-white border border-border shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10" />
                <img
                  src={c.image}
                  alt={c.project}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-h3 font-black text-title-darkbg uppercase tracking-tighter leading-none">{c.project}</h3>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="space-y-8 flex-1 mb-10">
                  <div>
                    <div className="flex items-center text-primary font-bold mb-3 uppercase text-[10px] tracking-[0.2em]">
                      <Target className="w-4 h-4 mr-2" />
                      <span>01. The Problem</span>
                    </div>
                    <p className="text-p-body text-subtitle leading-relaxed font-medium">{c.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-primary font-bold mb-3 uppercase text-[10px] tracking-[0.2em]">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      <span>02. The Solution</span>
                    </div>
                    <p className="text-p-body text-subtitle leading-relaxed font-medium">{c.solution}</p>
                  </div>

                  <div className="pt-6 border-t border-zinc-100">
                    <div className="flex items-center text-primary font-bold mb-3 uppercase text-[10px] tracking-[0.2em]">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>03. The Result</span>
                    </div>
                    <p className="text-p-body text-title font-bold leading-tight italic">"{c.result}"</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={`/projects/${c.slug}`}
                    className="inline-flex items-center justify-center w-full px-8 py-4 rounded-xl bg-foreground text-background font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 group/btn shadow-lg"
                  >
                    Project Details
                    <svg className="w-4 h-4 ml-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
