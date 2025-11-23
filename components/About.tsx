import React from 'react';
import { Shield, Map, Compass, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section - Center Aligned */}
        <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-action font-bold uppercase tracking-widest text-xs block mb-4">
              Filosofía de Viaje
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold mb-6">
              Libertad con Seguridad
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              PatagoniaCamper combina la libertad de la "Vanlife" con la seguridad de una agencia de expediciones establecida. No solo arrendamos vehículos; entregamos experiencias curadas.
            </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           
           {/* Image Side - Clean Card Layout */}
           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://picsum.photos/id/1039/800/1000" 
                alt="Trekking Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs">
                  <div className="flex items-center gap-4 mb-2">
                      <Users className="w-8 h-8 text-action" />
                      <div className="text-white">
                          <p className="text-2xl font-bold">1.2k+</p>
                          <p className="text-xs uppercase tracking-wider opacity-80">Aventureros este año</p>
                      </div>
                  </div>
              </div>
           </div>

           {/* Features Side - List Layout */}
           <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex gap-6 p-6 rounded-2xl hover:bg-surface-light transition-colors border border-transparent hover:border-slate-100">
                  <div className="shrink-0 w-12 h-12 bg-brand-dark text-white rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-bold text-xl text-brand-dark mb-2">Soporte 24/7 en Ruta</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                          Monitoreo satelital de nuestras unidades y red de apoyo mecánico en toda la provincia de Última Esperanza.
                      </p>
                  </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 p-6 rounded-2xl hover:bg-surface-light transition-colors border border-transparent hover:border-slate-100">
                  <div className="shrink-0 w-12 h-12 bg-brand-dark text-white rounded-xl flex items-center justify-center">
                      <Compass className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-bold text-xl text-brand-dark mb-2">Equipamiento Premium</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                          Carpas de techo iKamper, sacos de dormir de -15°C y cocinas completas. Todo incluido, sin sorpresas.
                      </p>
                  </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6 p-6 rounded-2xl hover:bg-surface-light transition-colors border border-transparent hover:border-slate-100">
                  <div className="shrink-0 w-12 h-12 bg-brand-dark text-white rounded-xl flex items-center justify-center">
                      <Map className="w-6 h-6" />
                  </div>
                  <div>
                      <h3 className="font-bold text-xl text-brand-dark mb-2">Itinerarios a Medida</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                          Te entregamos un iPad con mapas offline y tu ruta cargada, con los mejores spots secretos marcados.
                      </p>
                  </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default About;