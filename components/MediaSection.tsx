
import React from 'react';
import { PlayCircle } from 'lucide-react';

const MediaSection: React.FC = () => {
  const media = [
    { 
      type: 'video', 
      url: '#', 
      thumb: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop' // Concierto jazz en vivo
    },
    { 
      type: 'video', 
      url: '#', 
      thumb: 'https://images.unsplash.com/photo-1514525253344-f256bb59218d?q=80&w=1200&auto=format&fit=crop' // Banda de jazz en club
    },
    { 
      type: 'image', 
      url: '#', 
      thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop' // Primer plano instrumento bronce
    },
    { 
      type: 'image', 
      url: '#', 
      thumb: 'https://images.unsplash.com/photo-1520522139391-0f79b6d0ef06?q=80&w=800&auto=format&fit=crop' // Manos en piano jazz
    },
    { 
      type: 'image', 
      url: '#', 
      thumb: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop' // Micrófono vintage jazz club
    },
    { 
      type: 'image', 
      url: '#', 
      thumb: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=800&auto=format&fit=crop' // Ambiente de club nocturno elegante
    },
  ];

  return (
    <section id="media" className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 poster-shadow">
              Media
            </h2>
            <p className="text-[#CFCFD4] tracking-widest uppercase text-sm font-bold">Un pedacito de lo que se viene en vivo</p>
          </div>
          <div className="bg-[#8A1A30] px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
            Ensayos & Momentos
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Video Slots */}
          {media.slice(0, 2).map((item, idx) => (
            <div key={idx} className="relative aspect-video rounded-3xl overflow-hidden group border border-white/10 shadow-2xl">
              <img 
                src={item.thumb} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                alt="Jazz Live Performance" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </div>
            </div>
          ))}

          {/* Grid Slots */}
          {media.slice(2).map((item, idx) => (
            <div key={idx} className="relative aspect-square rounded-3xl overflow-hidden group border border-white/10 shadow-xl">
              <img 
                src={item.thumb} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                alt="Jazz Atmosphere" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
