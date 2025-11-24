import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TOURS } from '../constants';

const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-24 bg-slate-900 text-white relative">
       {/* Decorative Background Text */}
       <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
            <h2 className="text-[15rem] font-bold text-white whitespace-nowrap leading-none font-serif">WILDLIFE</h2>
       </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Nuestras Expediciones</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Diseñadas para la Aventura</h2>
            <p className="text-slate-400 text-lg">
              Rutas seleccionadas meticulosamente para mostrarte la majestuosidad cruda de la Patagonia. Sin filtros.
            </p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-white border-b border-secondary pb-1 hover:text-secondary transition-colors">
            Ver calendario completo <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURS.map((tour) => (
            <div key={tour.id} className="group relative bg-slate-800 rounded-none overflow-hidden hover:-translate-y-2 transition-all duration-500 border-b-4 border-transparent hover:border-secondary shadow-xl shadow-black/30">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10 group-hover:opacity-30 transition-opacity" />
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <div className="bg-secondary/90 text-white text-xs font-bold px-2 py-1 inline-block mb-2">
                    {tour.duration}
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {tour.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 border-l border-slate-600 pl-3">
                  {tour.description}
                </p>

                <div className="space-y-3 mb-8">
                  {tour.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500">Inversión</span>
                    <span className="text-lg font-bold text-white">{tour.price}</span>
                  </div>
                  <button className="bg-white text-slate-900 rounded-full p-2 hover:bg-secondary hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;