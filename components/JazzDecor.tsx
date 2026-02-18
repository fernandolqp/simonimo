
import React from 'react';
import { Music, Music2, Music3, Disc } from 'lucide-react';

const JazzDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Abstract floating elements scattered across the background */}
      <div className="absolute top-1/4 left-[10%] opacity-[0.03] animate-float-jazz" style={{ animationDelay: '0s' }}>
        <Music size={120} strokeWidth={1} />
      </div>
      <div className="absolute top-[60%] right-[5%] opacity-[0.04] animate-float-jazz" style={{ animationDelay: '2s' }}>
        <Music2 size={180} strokeWidth={0.5} />
      </div>
      <div className="absolute top-[80%] left-[15%] opacity-[0.02] animate-float-jazz" style={{ animationDelay: '4s' }}>
        <Music3 size={100} strokeWidth={1} />
      </div>
      <div className="absolute top-20 right-[20%] opacity-[0.03] animate-float-jazz" style={{ animationDelay: '1s' }}>
        <Disc size={200} strokeWidth={0.2} />
      </div>
      
      {/* Fragmented staff lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -rotate-6"></div>
      <div className="absolute top-[52%] left-0 w-full h-px bg-white/5 -rotate-6"></div>
      <div className="absolute top-[48%] left-0 w-full h-px bg-white/5 -rotate-6"></div>
    </div>
  );
};

export default JazzDecor;
