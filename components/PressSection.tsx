
import React from 'react';
import { Download, FileText, Camera, Music2 } from 'lucide-react';

const PressSection: React.FC = () => {
  return (
    <section id="prensa" className="py-24 music-texture">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 poster-shadow">
            Press Kit
          </h2>
          <p className="text-[#CFCFD4] tracking-widest uppercase text-sm font-bold">Recursos para prensa y difusión</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio Side */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-[#0B0B0D]/60 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 text-[#8A1A30] font-black uppercase text-xs tracking-widest mb-6">
                <FileText size={18} /> Biografía
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">El Proyecto</h3>
              <p className="text-[#CFCFD4] leading-relaxed mb-6 font-light text-lg">
                SIMÓNIMO Música es un proyecto radicado en la Ciudad de Buenos Aires que busca redefinir la experiencia musical cercana. Integrado por músicos con trayectoria en el under porteño, la banda combina la sensibilidad del piano y la voz con una base rítmica sólida de guitarra, bajo y batería.
              </p>
              <p className="text-white/60 leading-relaxed font-light text-sm italic">
                “Ensayamos, tocamos y construimos: nuestra música no solo suena, transforma espacios y conecta personas a través de una propuesta honesta y energética.”
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0B0B0D]/60 p-8 rounded-[2rem] border border-white/10">
                <h4 className="font-black uppercase tracking-widest text-sm mb-4">Datos Rápidos</h4>
                <ul className="space-y-4 text-sm text-[#CFCFD4]">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="opacity-60">Proyecto</span>
                    <span className="font-bold text-white">SIMÓNIMO Música</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="opacity-60">Ciudad</span>
                    <span className="font-bold text-white">Buenos Aires (CABA)</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="opacity-60">Género</span>
                    <span className="font-bold text-white">Arreglos Propios / Fusión</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#8A1A30] p-8 rounded-[2rem] shadow-xl flex flex-col justify-center items-center text-center">
                <Music2 size={40} className="mb-4" />
                <p className="font-black uppercase tracking-widest text-xs mb-6">Descargá el material oficial completo</p>
                <button className="w-full bg-white text-[#8A1A30] py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-105 transition-all">
                  Descargar Press Kit <Download size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Downloads Side */}
          <div className="space-y-6">
            <h4 className="font-black uppercase tracking-widest text-sm text-[#CFCFD4] px-4">Archivos Individuales</h4>
            <div className="space-y-4">
              {[
                { name: 'Logo PNG (Fondo)', icon: <Music2 size={20}/> },
                { name: 'Logo PNG (Transparente)', icon: <Music2 size={20}/> },
                { name: 'Fotos de Prensa (Alta Res)', icon: <Camera size={20}/> },
                { name: 'Rider Técnico / Input List', icon: <FileText size={20}/> },
              ].map((file, i) => (
                <button key={i} className="w-full flex items-center justify-between p-6 bg-[#0B0B0D] hover:bg-[#1a1a1c] border border-white/10 rounded-2xl transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="text-[#8A1A30] group-hover:scale-110 transition-transform">{file.icon}</div>
                    <span className="text-sm font-bold">{file.name}</span>
                  </div>
                  <Download size={18} className="text-white/40 group-hover:text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;
