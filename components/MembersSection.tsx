
import React from 'react';
import { Instagram } from 'lucide-react';
import { BAND_MEMBERS } from '../constants';

const MembersSection: React.FC = () => {
  return (
    <section id="integrantes" className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 poster-shadow">
            Integrantes
          </h2>
          <p className="text-[#CFCFD4] tracking-widest uppercase text-sm font-bold">El alma del proyecto</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BAND_MEMBERS.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#1a1a1c] border border-white/5 transition-all duration-500 hover:border-[#8A1A30] group-hover:shadow-[0_0_30px_rgba(138,26,48,0.3)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="font-title text-xl font-black uppercase tracking-tighter mb-1 poster-shadow">
                    {member.name}
                  </h4>
                  <p className="text-[#8A1A30] font-black uppercase text-[10px] tracking-[0.2em] mb-4">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#CFCFD4] leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {member.description}
                  </p>
                  <a 
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <Instagram size={16} />
                    <span className="text-xs font-bold tracking-widest">@{member.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
