import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import About from './components/About';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tours />
        {/* Testimonials can be added here */}
        <Contact />
      </main>
      
      <footer className="bg-black text-slate-400 py-12 text-center border-t border-slate-900">
        <div className="container mx-auto px-4">
          <h3 className="text-white font-serif text-xl font-bold mb-4">PatagoniaCamper</h3>
          <p className="mb-6 text-sm max-w-md mx-auto">Explorando los límites del mundo desde Puerto Natales. Aventuras responsables y seguras.</p>
          <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} PatagoniaCamper. Todos los derechos reservados.</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;