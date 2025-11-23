import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants.ts';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface-light">
      <div className="container mx-auto px-6">
        <div className="bg-brand-dark rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Info Panel (Dark) */}
          <div className="w-full lg:w-5/12 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorator */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-action opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Hablemos</h3>
                <p className="text-slate-300 mb-12 leading-relaxed">
                  ¿Listo para el fin del mundo? Escríbenos para verificar disponibilidad de campers y cupos en expediciones.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                     <Phone className="w-6 h-6 text-action shrink-0" />
                     <div>
                        <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Llámanos</p>
                        <p className="text-lg font-semibold">{CONTACT_INFO.phone}</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Mail className="w-6 h-6 text-action shrink-0" />
                     <div>
                        <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-lg font-semibold">{CONTACT_INFO.email}</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <MapPin className="w-6 h-6 text-action shrink-0" />
                     <div>
                        <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">Ubicación</p>
                        <p className="text-lg font-semibold">{CONTACT_INFO.address}</p>
                     </div>
                  </div>
                </div>
             </div>

             <div className="mt-12">
               <p className="text-xs text-slate-500">
                 * Respondemos en menos de 24 horas hábiles.
               </p>
             </div>
          </div>

          {/* Form Panel (White) */}
          <div className="w-full lg:w-7/12 bg-white p-10 md:p-16">
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Nombre</label>
                     <input 
                       type="text" 
                       className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent transition-all placeholder:text-slate-400"
                       placeholder="Tu nombre"
                     />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Apellido</label>
                     <input 
                       type="text" 
                       className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent transition-all placeholder:text-slate-400"
                       placeholder="Tu apellido"
                     />
                  </div>
               </div>

               <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent transition-all placeholder:text-slate-400"
                    placeholder="ejemplo@correo.com"
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Mensaje</label>
                  <textarea 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent transition-all placeholder:text-slate-400"
                    placeholder="Cuéntanos sobre tu viaje ideal..."
                  ></textarea>
               </div>

               <button type="button" className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                  Enviar Solicitud <ArrowRight className="w-5 h-5" />
               </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;