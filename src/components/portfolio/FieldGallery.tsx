import React, { useState, useEffect } from 'react';
import { MapPin, X, Video, Camera, Zap } from 'lucide-react';

const fieldItems = [
  {
    id: 'andes',
    title: 'High-Altitude Documentary',
    subtitle: 'Producing 4K cinematic content at 14,700 ft (4,500 masl). Expert in ultralight Sony Alpha configurations for extreme vertical logistics.',
    tag: 'High Mountain',
    image: 'https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776240422/DSC02576_wvrc6h.jpg',
    type: 'image',
    gridClass: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'amazon',
    title: 'Glacial & Paramo Expeditions',
    subtitle: 'Documenting the frontline of climate change in water-source ecosystems and high-altitude wetlands.',
    tag: 'Ecosystems',
    image: 'https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776241044/IMG_3981_bipuex.jpg',
    type: 'image',
    gridClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'community',
    title: 'Community Engagement',
    subtitle: 'Documenting ancestral knowledge with a sensitive, human-centric approach. Building trust in frontline communities.',
    tag: 'Social Impact',
    image: 'https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776241464/DSC00669_jc3vpo.jpg',
    type: 'image',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'setup',
    title: 'Off-grid Production Hub',
    subtitle: '4K Production + Drone operations in zero-connectivity zones. Delivering broadcast-quality assets from the heart of the Andes.',
    tag: 'Tech',
    image: 'https://res.cloudinary.com/dyiighsvd/image/upload/q_auto/f_auto/v1776241377/DSC00566_emonum.jpg',
    type: 'image',
    gridClass: 'md:col-span-1 md:row-span-1'
  }
];

export default function FieldGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof fieldItems[0] | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  return (
    <section id="field-experience" className="py-24 bg-muted/20 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="max-w-3xl">
            {/* 🟢 EDITAR: Título de la sección de la galería de campo */}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">High Andean Range & Remote Highlands</h2>
            {/* 🟢 EDITAR: Descripción de la experiencia en campo */}
            <p className="mt-4 text-lg text-muted-foreground uppercase text-xs font-bold tracking-widest">
              Delivering premium visual assets under the most challenging high-altitude conditions.
            </p>

            {/* 🟢 EDITAR: Ubicación destacada */}
            <div className="mt-6 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <MapPin className="w-3 h-3 mr-2" />
              <span>South American Highlands & Rainforest</span>
            </div>
          </div>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {fieldItems.map((item) => {
            if (item.type === 'special') {
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative overflow-hidden rounded-[2rem] bg-primary p-8 flex flex-col justify-end shadow-sm cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${item.gridClass}`}
                >
                  <div className="h-full flex flex-col justify-between relative z-20 text-primary-foreground">
                    <Zap className="w-10 h-10 opacity-80" />
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                      <p className="text-primary-foreground/80 text-sm font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-bl-full z-10 transition-transform group-hover:scale-110 duration-700" />
                </div>
              );
            }

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative overflow-hidden rounded-[2rem] shadow-sm cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${item.gridClass}`}
              >
                {/* Visual Overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />

                <div className="absolute bottom-6 left-6 z-20 pr-6">
                  {item.tag && (
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-3 inline-block">
                      {item.tag}
                    </span>
                  )}
                  <h3 className={`font-black uppercase tracking-tighter text-white ${item.id === 'andes' ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>
                  {item.id === 'andes' && (
                    <p className="text-white/80 mt-2 max-w-sm text-sm font-medium line-clamp-2">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onKeyDown={(e) => e.key === 'Escape' && setSelectedItem(null)}
        >
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          />

          <div className="relative w-full max-w-6xl aspect-video md:aspect-auto md:max-h-[85vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl z-20 flex flex-col">
            {/* Modal Header/Close */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-30"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-hidden relative group">
              {selectedItem.type === 'special' ? (
                <div className="w-full h-full flex items-center justify-center bg-primary p-12 text-center text-white">
                  <div className="max-w-2xl space-y-6">
                    <Zap className="w-20 h-20 mx-auto opacity-50" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{selectedItem.title}</h2>
                    <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed italic">{selectedItem.subtitle}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <div className="p-8 md:p-12 bg-black/40 backdrop-blur-md border-t border-white/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">{selectedItem.tag || 'Field Expertise'}</span>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">{selectedItem.title}</h2>
                  <p className="text-zinc-400 mt-2 max-w-3xl font-medium">{selectedItem.subtitle}</p>
                </div>
                {selectedItem.type !== 'special' && (
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold whitespace-nowrap">
                      <Video className="w-4 h-4 text-primary" />
                      4K Log Production
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
