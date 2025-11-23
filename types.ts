export interface Tour {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
