import React from 'react';
import { ArrowDown, ChevronRight, Wind, Thermometer } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Parallax Effect feel */}
      <div className="absolute inset-0 opacity-80">
        <img
          src="https://picsum.photos/id/1036/1920/1080" 
          alt="Torres del Paine Winter"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow" 
          style={{ animationDuration: '20s' }}
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-end pb-32 md:pb-40 md:justify-center text-white">
        
        <div className="max-w-2xl animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-secondary"></div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">
              Latitud 51° S
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight">
            ALMA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">PATAGÓNICA</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed border-l-2 border-slate-700 pl-6">
            Especialistas en logística remota y experiencias inmersivas en el Parque Nacional Torres del Paine. Tu puerta de entrada al fin del mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a href="#tours" className="bg-white text-slate-900 hover:bg-secondary hover:text-white px-8 py-4 rounded-none font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group">
              Explorar Rutas <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-none font-bold text-lg transition-all text-center">
              Arriendos
            </a>
          </div>
        </div>

        {/* Weather Widget Decoration */}
        <div className="hidden lg:flex absolute right-8 bottom-32 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex-col gap-4 max-w-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="uppercase text-xs font-bold text-slate-400 tracking-widest">Condiciones Actuales</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <Wind className="w-8 h-8 text-secondary" />
                    <div>
                        <div className="text-2xl font-bold">45</div>
                        <div className="text-xs text-slate-400">km/h NW</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Thermometer className="w-8 h-8 text-accent" />
                    <div>
                        <div className="text-2xl font-bold">8°</div>
                        <div className="text-xs text-slate-400">Celsius</div>
                    </div>
                </div>
            </div>
            <div className="text-xs text-slate-500 mt-2 italic">
                "El viento es el arquitecto del paisaje."
            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Descubrir</span>
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;