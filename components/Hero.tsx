import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 music-texture overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8A1A30] rounded-full blur-[120px] opacity-30 -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="mb-8 inline-block bg-[#0B0B0D] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/10 animate-fade-in">
          Buenos Aires, Argentina
        </div>
        
        <h1 className="font-title text-6xl md:text-9xl font-black uppercase tracking-tighter poster-shadow leading-tight mb-4 transition-all duration-1000">
          SIMÓNIMO<br/>
          <span className="text-3xl md:text-5xl block mt-2 opacity-90">Música</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-light italic mb-8 max-w-2xl mx-auto text-[#CFCFD4] neon-glow">
          “Música que une y transforma”
        </p>
        
        <div className="bg-[#0B0B0D]/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl mb-12 max-w-lg mx-auto reveal">
          <p className="text-sm md:text-base font-medium leading-relaxed">
            Estamos ensayando para ustedes. Muy pronto vas a escucharnos en vivo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a
            href="#musica"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#8A1A30] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
          >
            <Play fill="currentColor" size={20} />
            Escuchanos en Spotify
          </a>
          <a
            href="#shows"
            className="w-full sm:w-auto bg-[#0B0B0D] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest border border-white/20 hover:bg-[#1a1a1c] transition-colors shadow-xl"
          >
            Próximas fechas
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;