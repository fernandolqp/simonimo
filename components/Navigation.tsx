
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated labels to match the provided screenshot exactly (All Caps)
  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'MÚSICA', href: '#musica' },
    { name: 'INTEGRANTES', href: '#integrantes' },
    { name: 'SHOWS', href: '#shows' },
    { name: 'MEDIA', href: '#media' },
    { name: 'PRENSA', href: '#prensa' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0B0D]/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#inicio" className="font-title text-2xl font-black tracking-tighter uppercase poster-shadow hover:scale-105 transition-transform">
              SIMÓNIMO
            </a>
          </div>

          {/* Desktop Menu - Styled to match the capture's vibe */}
          <div className="hidden lg:flex space-x-6 xl:space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] hover:text-[#CFCFD4] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#musica"
              className="ml-4 bg-white text-[#8A1A30] px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#CFCFD4] transition-all shadow-lg active:scale-95"
            >
              ESCUCHANOS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B0B0D] absolute top-full left-0 w-full py-8 px-4 flex flex-col space-y-6 text-center border-t border-[#8A1A30]/30 shadow-2xl animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-black uppercase tracking-[0.2em] hover:text-[#8A1A30] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#musica"
            onClick={() => setIsOpen(false)}
            className="bg-[#8A1A30] text-white py-4 rounded-xl font-black uppercase tracking-widest active:scale-95 transition-transform"
          >
            Escuchanos en Spotify
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
