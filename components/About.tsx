import React from 'react';
import { Shield, Zap, Heart, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           {/* Narrative Side */}
           <div className="w-full lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider mb-6">
                <Shield className="w-3 h-3" /> Seguridad Garantizada
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                Más que un viaje, <br/>
                <span className="text-secondary italic">una transformación.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  PatagoniaCamper nació de la necesidad de conectar con lo salvaje sin renunciar a la seguridad. Entendemos que Torres del Paine no es solo un destino turístico; es un santuario natural que exige respeto y preparación.
                </p>
                <p>
                  Nuestra flota de campers 4x4 está equipada para enfrentar los vientos de la estepa, y nuestros guías no son solo acompañantes, son expertos en lectura del terreno y clima.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div className="border-l-4 border-secondary pl-6">
                    <h4 className="font-bold text-3xl text-slate-900 mb-1">+10 Años</h4>
                    <p className="text-sm text-slate-500 uppercase tracking-wide">De experiencia en ruta</p>
                 </div>
                 <div className="border-l-4 border-accent pl-6">
                    <h4 className="font-bold text-3xl text-slate-900 mb-1">100%</h4>
                    <p className="text-sm text-slate-500 uppercase tracking-wide">Tasa de seguridad</p>
                 </div>
              </div>
           </div>

           {/* Visual Side */}
           <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/id/1039/600/800" 
                  alt="Waterfall Trekking" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
                  <div className="flex items-start gap-4">
                     <div className="bg-secondary p-3 rounded-full">
                        <Map className="w-6 h-6 text-white" />
                     </div>
                     <div>
                        <h5 className="font-bold text-xl mb-2">Rutas Personalizadas</h5>
                        <p className="text-sm text-slate-200">
                          Diseñamos cada itinerario basándonos en tu nivel físico y expectativas de aventura.
                        </p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;