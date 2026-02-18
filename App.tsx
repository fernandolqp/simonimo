
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SpotifySection from './components/SpotifySection';
import About from './components/About';
import MembersSection from './components/MembersSection';
import ShowsSection from './components/ShowsSection';
import MediaSection from './components/MediaSection';
import PressSection from './components/PressSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JazzDecor from './components/JazzDecor';

function App() {
  useEffect(() => {
    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#8A1A30] selection:bg-white selection:text-[#8A1A30] relative overflow-hidden">
      {/* Global Jazz Atmosphere Grain */}
      <div className="grain-overlay"></div>
      
      <Navigation />
      
      <main className="relative z-10">
        <section className="relative">
          <JazzDecor />
          <Hero />
        </section>
        
        <div className="reveal"><About /></div>
        <div className="reveal"><SpotifySection /></div>
        <div className="reveal"><MembersSection /></div>
        <div className="reveal"><ShowsSection /></div>
        <div className="reveal"><MediaSection /></div>
        <div className="reveal"><PressSection /></div>
        <div className="reveal"><ContactSection /></div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
