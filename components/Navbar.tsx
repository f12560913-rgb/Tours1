import React, { useState, useEffect } from 'react';
import { X, Phone, Mountain, Compass } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expediciones', href: '#tours' },
    { name: 'Filosofía', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}
    >
      <div className={`container mx-auto px-4 transition-all duration-500 ${isScrolled ? 'max-w-5xl' : ''}`}>
        <div className={`flex justify-between items-center rounded-2xl px-6 py-3 backdrop-blur-md border border-white/10 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-900/90 shadow-2xl shadow-black/20' 
            : 'bg-black/30'
        }`}>
          {/* Logo */}
          <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2 text-white group">
            <span className="bg-white text-slate-900 w-8 h-8 flex items-center justify-center rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
              <Mountain className="w-5 h-5" />
            </span>
            PatagoniaCamper
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-4 w-px bg-white/20"></div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-white text-sm font-bold hover:text-secondary transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Compass className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-200 text-lg font-medium border-b border-white/10 pb-3"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
             className="bg-secondary text-white text-center py-3 rounded-lg font-bold mt-2 shadow-lg shadow-cyan-900/20"
          >
            Planificar Aventura
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;