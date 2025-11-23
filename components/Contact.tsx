import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorator */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-700/20 skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <h2 className="font-serif text-4xl font-bold mb-6">Planifica tu Expedición</h2>
            <p className="text-slate-300 text-lg mb-10">
              Los cupos para campings y refugios en Torres del Paine son limitados. Contáctanos con anticipación para asegurar tu aventura en el fin del mundo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Central de Reservas</h4>
                  <p className="text-slate-400">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-slate-500">Atención 24/7 en temporada alta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent p-4 rounded-full text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-slate-400">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-600 p-4 rounded-full text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Base de Operaciones</h4>
                  <p className="text-slate-400">{CONTACT_INFO.address}</p>
                  <p className="text-sm text-slate-500">Puerto Natales, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12">
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-gray-800">
              <h3 className="text-2xl font-bold text-primary mb-6">Solicitud de Cotización</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="tu@email.com" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interés Principal</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-gray-600">
                  <option>Selecciona una opción...</option>
                  <option>Arriendo de Camper</option>
                  <option>Trekking Base Torres</option>
                  <option>Circuito W / O</option>
                  <option>Navegación Glaciares</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Detalles del Viaje</label>
                <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all h-32 resize-none" placeholder="Número de pasajeros, fechas tentativas y requerimientos especiales..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Enviar Solicitud
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;