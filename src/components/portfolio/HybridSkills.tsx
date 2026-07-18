import React from 'react';
import { Users, Camera, Code } from 'lucide-react';

const skills = [
  {
    title: 'Strategy & Leadership',
    icon: Users,
    description: 'Leading high-stakes international operations by aligning global stakeholder interests with local field realities through strategic diplomacy and crisis-ready communication.',
    bullets: [
      'Stakeholder Management: Orchestrating alignment between US-based donors and multinational government partners.',
      'Crisis & Reputation: Rapid response protocols to safeguard institutional integrity in complex social environments.',
      'Cross-functional Leadership: Directing multidisciplinary teams across remote Andean and Amazonian operations.',
      'Strategic Alliances: Building global press relations and high-impact institutional partnerships.'
    ]
  },
  {
    title: 'Creative & Storytelling',
    icon: Camera,
    description: 'Crafting cinematic narratives that transform complex ecological data into emotional human stories, designed to drive international funding and awareness.',
    bullets: [
      'Premium Cinematography: High-end visual production at 14,700 ft using Sony Alpha systems and aerial drones.',
      'Impact-Driven Narrative: Converting field achievements into world-class storytelling for UN and Earthshot levels.',
      'Art Direction: Overseeing visual consistency and premium brand aesthetics across global digital channels.',
      'Documentary Ethics: Professional documentation of frontline communities with a sensitive, human-centric approach.'
    ]
  },
  {
    title: 'Tech & Development',
    icon: Code,
    description: 'Architecting high-performance digital infrastructure that bridges the gap between remote field impact and global stakeholder accessibility.',
    bullets: [
      'Next-Gen Web Stack: High-performance platforms built with React, Astro, and Tailwind CSS for global scale.',
      'Digital Intelligence: Implementation of GA4 and GTM for deep behavioral tracking and conversion optimization.',
      'Technical SEO: Architectural optimization for peak visibility in competitive international search markets.',
      'Operations Ecosystems: Advanced management of custom CMS and Digital Asset Management (DAM) workflows.'
    ]
  }
];

export default function HybridSkills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          {/* 🟢 EDITAR: Título de la sección de habilidades (Core Expertise) */}
          <h2 className="text-h2 font-extrabold tracking-tight text-title">Core Expertise</h2>
          {/* 🟢 EDITAR: Descripción de los pilares estratégicos */}
          <p className="mt-4 max-w-2xl mx-auto text-lg text-subtitle uppercase text-xs font-bold tracking-widest">
            Strategic pillars designed to scale global impact and resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-img bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full text-center md:text-left"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto md:mx-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-h3 font-bold text-title mb-3">{skill.title}</h3>
                <p className="text-p-body text-subtitle mb-6 flex-grow">
                  {skill.description}
                </p>

                <ul className="space-y-3 pt-4 border-t border-border/50">
                  {skill.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start justify-center md:justify-start font-medium text-p-sm leading-tight text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
