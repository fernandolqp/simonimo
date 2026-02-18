
import React from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { UPCOMING_SHOWS } from '../constants';

const ShowsSection: React.FC = () => {
  return (
    <section id="shows" className="py-24 bg-[#8A1A30] music-texture relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 poster-shadow">
            Próximos Shows
          </h2>
          <p className="text-white/80 tracking-widest uppercase text-sm font-bold">Vení a vivir la experiencia</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {UPCOMING_SHOWS.map((show, idx) => (
            <div key={idx} className="bg-[#0B0B0D] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Poster Stamp */}
              <div className="absolute top-6 right-6 -rotate-12 bg-[#8A1A30] px-4 py-2 rounded font-black text-[10px] tracking-widest border border-white/20 shadow-lg group-hover:rotate-0 transition-transform">
                PRÓXIMAMENTE
              </div>

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="font-title text-4xl font-black uppercase tracking-tighter mb-2 poster-shadow">
                    {show.venue}
                  </h3>
                  <div className="flex items-center gap-2 text-[#CFCFD4] font-medium">
                    <MapPin size={18} className="text-[#8A1A30]" />
                    {show.address}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-[#8A1A30] text-[10px] font-black uppercase tracking-widest mb-2">
                      <Calendar size={14} /> Fecha
                    </div>
                    <div className="font-bold text-lg">{show.date}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-[#8A1A30] text-[10px] font-black uppercase tracking-widest mb-2">
                      <Clock size={14} /> Hora
                    </div>
                    <div className="font-bold text-lg">{show.time}</div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[#8A1A30] flex items-center justify-center">
                      <Ticket size={20} className="text-[#8A1A30]" />
                    </div>
                    <span className="font-black uppercase tracking-[0.2em] text-sm">Modalidad: {show.modality}</span>
                  </div>
                  <a 
                    href="#contacto"
                    className="w-full sm:w-auto ml-auto bg-white text-[#8A1A30] px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl text-center"
                  >
                    Reservar / Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}

          {UPCOMING_SHOWS.length === 0 && (
            <div className="col-span-full py-20 text-center bg-[#0B0B0D]/20 rounded-[2.5rem] border-2 border-dashed border-white/20">
              <div className="font-title text-4xl opacity-30 font-black uppercase mb-4">PRÓXIMAMENTE</div>
              <p className="text-xl italic opacity-60">Estamos cerrando nuevas fechas. ¡Atentos a nuestro IG!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
