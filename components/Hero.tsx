import React from 'react';
import { ChevronRight, Wind, Thermometer, MapPin, Ship } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden pt-20">
      {/* Background Layer - Absolute */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1042/1920/1080" // Imagen de puerto/mar
          alt="Puerto Montt Landscape"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>
      
      {/* Content Layer - Grid Layout */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* Left Column: Main Copy */}
        <div className="lg:col-span-7 flex flex-col gap-8 animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 self-start">
            <div className="h-px w-8 bg-action"></div>
            <span className="text-action font-bold tracking-[0.25em] uppercase text-xs">
              Turismo & Navegación
            </span>
          </div>
          
          {/* Heading */}
          <div className="flex flex-col">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight tracking-tight">
              Descubre <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-action to-white">
                Angelmó
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl border-l-2 border-action pl-6">
            Vive la experiencia auténtica de Puerto Montt. Navegaciones por Isla Tenglo, tours al Volcán Osorno y lo mejor del sur de Chile.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#tours" className="bg-action hover:bg-action-hover text-white px-8 py-4 font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-action/25 rounded-lg">
              Ver Tours <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-4 border border-slate-500 text-slate-300 hover:text-white hover:border-white hover:bg-white/5 font-medium text-lg transition-all text-center rounded-lg">
              Contáctanos
            </a>
          </div>
        </div>

        {/* Right Column: Widget Card */}
        <div className="hidden lg:flex lg:col-span-5 justify-end items-center">
           <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5 text-action" />
                    <span className="font-bold tracking-wide text-sm">PUERTO MONTT</span>
                  </div>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              </div>

              <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="p-3 bg-brand-light/20 rounded-xl text-white">
                            <Ship className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-wider">Próxima Salida</p>
                            <p className="text-white font-bold text-xl">10:30 AM</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="p-3 bg-brand-light/20 rounded-xl text-white">
                            <Thermometer className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-wider">Clima</p>
                            <p className="text-white font-bold text-xl">12°C</p>
                        </div>
                     </div>
                     <span className="text-slate-400 text-xs">Lluvia Parcial</span>
                  </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-slate-400 text-xs leading-relaxed">
                  "La lluvia es parte de la magia del sur. Nuestros tours operan con normalidad."
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;