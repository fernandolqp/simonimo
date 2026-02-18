
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-title text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 poster-shadow">
            Sobre SIMÓNIMO
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#CFCFD4] mb-8">
            SIMÓNIMO Música es un proyecto de Buenos Aires. Ensayamos, tocamos en vivo y construimos una experiencia cercana: canciones, arreglos y energía real. Música que une y transforma.
          </p>
          <div className="h-px w-24 bg-[#8A1A30] mb-8"></div>
          <div className="text-sm uppercase tracking-[0.2em] font-bold text-white/60">
            Ayudanos a crecer: seguinos y compartinos
          </div>
        </div>
      </div>
      
      {/* Decorative Stamp Effect */}
      <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none select-none">
        <div className="w-80 h-80 border-4 border-dashed border-white rounded-full flex items-center justify-center rotate-12">
          <span className="font-title text-4xl font-black text-center px-10">MÚSICA URBANA ARTE VIVO</span>
        </div>
      </div>
    </section>
  );
};

export default About;
