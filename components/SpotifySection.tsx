
import React from 'react';
import { ExternalLink, Heart, Music } from 'lucide-react';
import { SPOTIFY_LINKS } from '../constants';

const SpotifySection: React.FC = () => {
  return (
    <section id="musica" className="py-24 music-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                <Music size={20} className="text-[#8A1A30]" />
             </div>
          </div>
          <h2 className="font-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 poster-shadow">
            Música
          </h2>
          <p className="text-[#CFCFD4] tracking-[0.3em] uppercase text-xs font-black">Explorá nuestro sonido</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Playlist Container */}
          <div className="bg-[#0B0B0D]/80 backdrop-blur-xl p-4 md:p-10 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#8A1A30] rounded-full animate-ping"></span>
              Playlist Oficial
            </h3>
            <div className="w-full overflow-hidden rounded-3xl shadow-2xl border border-white/5 bg-black/40">
              <iframe 
                src={SPOTIFY_LINKS.PLAYLIST_URL} 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="SIMÓNIMO Playlist"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-4">
                <a 
                  href={SPOTIFY_LINKS.OFFICIAL_PROFILE} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#1DB954] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  Escuchar en Spotify <ExternalLink size={14} />
                </a>
                <button className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg group">
                  Seguir <Heart size={14} className="group-hover:fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Content & Quote */}
          <div className="space-y-10 lg:pt-10">
            <div className="bg-[#0B0B0D]/60 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl group overflow-hidden relative">
               {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8A1A30]/10 blur-[60px] rounded-full group-hover:bg-[#8A1A30]/20 transition-all"></div>
              
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#8A1A30] mb-6 flex items-center gap-2">
                Destacado de la semana
              </h3>
              <div className="w-full">
                <iframe 
                  src={SPOTIFY_LINKS.TRACK_URL} 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="rounded-2xl shadow-xl"
                  title="Featured Track"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-[#8A1A30] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="text-5xl opacity-20 mb-4 font-serif">“</div>
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 tracking-tight">
                  Si te gustó, seguinos en Spotify y compartí esto con alguien que ame la música en vivo.
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#8A1A30] shadow-xl transform group-hover:rotate-12 transition-transform">
                    <Heart size={28} fill="currentColor" />
                  </div>
                  <div>
                    <span className="block font-black uppercase tracking-[0.3em] text-[10px] text-white/60">Comunidad</span>
                    <span className="font-black uppercase tracking-[0.2em] text-sm">Apoyá el Proyecto</span>
                  </div>
                </div>
              </div>
              
              {/* Jazz vibe abstract shapes */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full border border-white/10 group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="absolute top-10 right-10 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            </div>

            <div className="px-6 text-center lg:text-left">
              <p className="text-white/40 text-xs font-medium tracking-[0.2em] uppercase">
                Buenos Aires Sound & Spirit • 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
