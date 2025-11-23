import { Tour, Testimonial } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Base Torres Full Trekking',
    description: 'El sendero más icónico de la Patagonia. Ascenso exigente hasta la base de las tres torres de granito sobre la laguna glaciar.',
    duration: '8-10 Horas',
    price: '$45.000 CLP',
    image: 'https://picsum.photos/id/1036/800/600', // Montañas nevadas
    highlights: ['Laguna Torres', 'Bosque de Lenga', 'Ascenso Morrena']
  },
  {
    id: '2',
    title: 'Arriendo Camper 4x4 Premium',
    description: 'Recorre la Ruta del Fin del Mundo a tu ritmo. Vehículo totalmente equipado con calefacción, cocina y carpa de techo.',
    duration: 'Por Día',
    price: '$120.000 CLP',
    image: 'https://picsum.photos/id/1015/800/600', // Paisaje río/valle
    highlights: ['Libertad total', 'Equipo Camping', 'Seguro incluido']
  },
  {
    id: '3',
    title: 'Navegación Glaciar Grey',
    description: 'Navega entre témpanos de hielo azul hasta la pared frontal del imponente Glaciar Grey en el Campo de Hielo Sur.',
    duration: '3 Horas',
    price: '$95.000 CLP',
    image: 'https://picsum.photos/id/1039/800/600', // Hielo/Cascada vibe
    highlights: ['Pisco Sour con Hielo Milenario', 'Vistas Panorámicas', 'Fotografía']
  },
  {
    id: '4',
    title: 'Circuito W Express',
    description: 'Lo mejor del Circuito W en 4 días. Incluye traslados, refugios y guía para visitar Valle Francés y Cuernos.',
    duration: '4 Días',
    price: '$850.000 CLP',
    image: 'https://picsum.photos/id/1018/800/600', // Naturaleza vasta
    highlights: ['Valle del Francés', 'Los Cuernos', 'Lago Nordenskjöld']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Roberto Muñoz',
    location: 'Valparaíso, Chile',
    text: 'Recorrer la Patagonia en camper fue la mejor decisión. Despertar frente a los Cuernos del Paine no tiene precio.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    location: 'Auckland, NZ',
    text: 'The trekking guides were incredibly professional. Even with the intense wind, we felt safe and saw amazing views.',
    rating: 5
  },
  {
    id: 3,
    name: 'Andrea Pizarro',
    location: 'Lima, Perú',
    text: 'El Glaciar Grey es impresionante. La logística de PatagoniaCamper funcionó perfecta desde Puerto Natales.',
    rating: 4
  }
];

export const CONTACT_INFO = {
  phone: '+56 9 9876 5432',
  email: 'reservas@patagoniacamper.cl',
  address: 'Calle Eberhard 560, Puerto Natales, Magallanes'
};