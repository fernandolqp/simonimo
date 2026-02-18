
import React, { useState } from 'react';
import { Send, Instagram, Mail, MessageSquare } from 'lucide-react';
import { CONTACT_EMAIL, INSTAGRAM_URL } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Fechas', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado (Simulado)');
  };

  return (
    <section id="contacto" className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 poster-shadow">
              Contacto
            </h2>
            <p className="text-xl md:text-2xl font-light text-[#CFCFD4] mb-12 max-w-md">
              ¿Querés que toquemos en tu evento? ¿Alguna duda o propuesta? Escribinos.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#8A1A30] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Mail />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#8A1A30] mb-1">Email Oficial</p>
                  <p className="text-lg font-bold">{CONTACT_EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Instagram />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#CFCFD4] mb-1">Seguinos en IG</p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-[#8A1A30] transition-colors">@simonimo.musica</a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-[#8A1A30]/10 border border-[#8A1A30]/30 rounded-[2rem]">
              <p className="text-sm italic leading-relaxed text-[#CFCFD4]">
                “Respondemos a la brevedad. Gracias por apoyar este proyecto independiente.”
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-[#0B0B0D] shadow-2xl">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
              <MessageSquare size={24} className="text-[#8A1A30]" /> Mandanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Nombre</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-gray-100 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#8A1A30] outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-gray-100 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#8A1A30] outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Motivo</label>
                <select 
                  className="w-full bg-gray-100 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#8A1A30] outline-none transition-all appearance-none"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Fechas / Contrataciones</option>
                  <option>Prensa</option>
                  <option>Colaboración</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Mensaje</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Hola SIMÓNIMO, me gustaría..."
                  className="w-full bg-gray-100 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-[#8A1A30] outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#8A1A30] text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl"
              >
                Enviar Mensaje <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
