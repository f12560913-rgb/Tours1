import React from 'react';
import { ArrowDown, ChevronRight, Wind, Thermometer, Map } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden pt-20">
      {/* Background Layer - Absolute */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1036/1920/1080" 
          alt="Patagonia Landscape"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>
      
      {/* Content Layer - Grid Layout for Figma Compatibility */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* Left Column: Main Copy */}
        <div className="lg:col-span-7 flex flex-col gap-8 animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 self-start">
            <div className="h-px w-8 bg-action"></div>
            <span className="text-action font-bold tracking-[0.25em] uppercase text-xs">
              Expediciones & Campers
            </span>
          </div>
          
          {/* Heading */}
          <div className="flex flex-col">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight tracking-tight">
              Patagonia <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-action-hover to-white">
                Indómita
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl border-l-2 border-slate-700 pl-6">
            Tu base de operaciones en Puerto Natales. Arriendo de campers 4x4 y logística de expedición para Torres del Paine.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#tours" className="bg-action hover:bg-action-hover text-white px-8 py-4 font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-action/25 rounded-lg">
              Ver Disponibilidad <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#about" className="px-8 py-4 border border-slate-600 text-slate-300 hover:text-white hover:border-white hover:bg-white/5 font-medium text-lg transition-all text-center rounded-lg">
              Nuestra Flota
            </a>
          </div>
        </div>

        {/* Right Column: Widget Card (Simulating a Glass Card UI) */}
        <div className="hidden lg:flex lg:col-span-5 justify-end items-center">
           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-white">
                    <Map className="w-5 h-5 text-action" />
                    <span className="font-bold tracking-wide text-sm">TORRES DEL PAINE</span>
                  </div>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              </div>

              <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="p-3 bg-brand-light/50 rounded-xl text-white">
                            <Wind className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-wider">Viento</p>
                            <p className="text-white font-bold text-xl">45 km/h</p>
                        </div>
                     </div>
                     <span className="text-slate-500 text-xs">NW</span>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="p-3 bg-brand-light/50 rounded-xl text-white">
                            <Thermometer className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-wider">Temp</p>
                            <p className="text-white font-bold text-xl">8°C</p>
                        </div>
                     </div>
                     <span className="text-slate-500 text-xs">Nublado</span>
                  </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-slate-400 text-xs leading-relaxed">
                  "El clima cambia cada 20 minutos. Prepárate para las cuatro estaciones en un día."
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;