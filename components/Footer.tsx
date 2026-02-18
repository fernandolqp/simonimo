
import React from 'react';
import { Instagram, Music, Heart } from 'lucide-react';
import { INSTAGRAM_URL, SPOTIFY_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0D] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-title text-4xl font-black uppercase tracking-tighter mb-4 poster-shadow">
              SIMÓNIMO
            </h2>
            <p className="text-[#CFCFD4] tracking-[0.2em] font-bold text-xs mb-6">MÚSICA QUE UNE Y TRANSFORMA</p>
            <div className="flex items-center gap-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href={SPOTIFY_LINKS.OFFICIAL_PROFILE} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Music size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <div className="flex items-center gap-3 bg-[#8A1A30] px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              <Heart size={14} fill="white" /> Ayudanos a crecer: compartinos
            </div>
            <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} SIMÓNIMO Música. Todos los derechos reservados.
            </p>
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
