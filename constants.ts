import { Tour, Testimonial } from './types.ts';

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Navegación Isla Tenglo',
    description: 'Descubre la magia de Angelmó desde el mar. Navegación bordeando la Isla Tenglo, observando el volcán Calbuco y la vida marina local.',
    duration: '1 Hora',
    price: '$15.000 CLP',
    image: 'https://picsum.photos/id/1042/800/600', // Puerto/Mar
    highlights: ['Vista a Volcanes', 'Mercado Angelmó', 'Lobos Marinos']
  },
  {
    id: '2',
    title: 'Saltos del Petrohué y Lago',
    description: 'Excursión full day al Parque Nacional Vicente Pérez Rosales. Visita los famosos saltos de agua color esmeralda y el Lago Todos los Santos.',
    duration: 'Full Day',
    price: '$35.000 CLP',
    image: 'https://picsum.photos/id/1016/800/600', // Montañas/Agua
    highlights: ['Volcán Osorno', 'Saltos del Petrohué', 'Lago Esmeralda']
  },
  {
    id: '3',
    title: 'City Tour Puerto Montt y Varas',
    description: 'Recorrido histórico y cultural por la capital regional y la ciudad de las rosas. Incluye visita al mercado de Angelmó y costanera.',
    duration: '4 Horas',
    price: '$25.000 CLP',
    image: 'https://picsum.photos/id/1029/800/600', // Ciudad/Parque
    highlights: ['Catedral', 'Mercado Típico', 'Museo']
  },
  {
    id: '4',
    title: 'Tour Volcán Osorno',
    description: 'Asciende hasta el centro de ski del Volcán Osorno. Disfruta de una vista panorámica inigualable del lago Llanquihue y el valle.',
    duration: '5 Horas',
    price: '$30.000 CLP',
    image: 'https://picsum.photos/id/1036/800/600', // Nieve/Montaña
    highlights: ['Vistas Panorámicas', 'Cafetería en Altura', 'Cráter Rojo']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Claudia Soto',
    location: 'Santiago, Chile',
    text: 'La navegación por Isla Tenglo fue hermosa, el atardecer se ve increíble desde el bote de Angelmó Tours.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mark Stevens',
    location: 'USA',
    text: 'Great guide for the Petrohué Falls tour. Very knowledgeable and the transport was comfortable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Pedro Álvarez',
    location: 'Concepción, Chile',
    text: 'Muy buena atención en el puerto. Los precios son accesibles y la experiencia es muy auténtica.',
    rating: 4
  }
];

export const CONTACT_INFO = {
  phone: '+56 9 1234 5678', // Número simulado
  email: 'contacto@angelmotours.cl',
  address: 'Av. Angelmó 2000, Puerto Montt, Los Lagos'
};