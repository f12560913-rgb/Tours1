import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Tours from './components/Tours.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import ChatWidget from './components/ChatWidget.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tours />
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