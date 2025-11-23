import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TOURS } from '../constants';

const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-24 bg-brand-dark relative">
       
       {/* Header Container */}
       <div className="container mx-auto px-6 mb-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
             <div className="max-w-2xl">
                <span className="text-action font-bold text-sm tracking-widest uppercase mb-2 block">
                  Catálogo de Experiencias
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                  Elige tu Aventura
                </h2>
             </div>
             <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm hidden md:block">Mostrando 4 rutas destacadas</span>
                <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
                  Ver Todas
                </a>
             </div>
          </div>
       </div>

       {/* Cards Grid */}
       <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOURS.map((tour) => (
              <article key={tour.id} className="group bg-surface-dark border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-action/10 transition-all duration-300">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                     <span className="text-white text-xs font-bold tracking-wide">{tour.duration}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-white mb-3 leading-snug group-hover:text-action transition-colors">
                    {tour.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {tour.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider text-slate-300 bg-white/5 px-2 py-1 rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                     <span className="text-lg font-bold text-white">{tour.price}</span>
                     <button className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center group-hover:bg-action group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                     </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Tours;