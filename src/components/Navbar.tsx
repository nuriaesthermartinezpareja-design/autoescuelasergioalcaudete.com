import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Carnets', href: '#carnets' },
    { name: '¿No sabes qué carnet?', href: '#sergiobot' },
    { name: 'Cómo reservar', href: '#como-reservar' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071526]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4),0_1px_15px_rgba(132,204,22,0.1)] border-b border-lime-500/25'
          : 'bg-gradient-to-r from-[#071526] via-[#091e36] to-[#071c26] border-b border-lime-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#inicio" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#0d233e] p-0.5 border border-sky-500/30 shadow-md group-hover:border-lime-400 transition-colors flex-shrink-0">
              <img
                src="/assets/logo_emblem.png"
                alt="Autoescuela Sergio Alcaudete"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-tight group-hover:text-lime-400 transition-colors">
                Autoescuela Sergio
              </span>
              <span className="text-slate-400 text-xs font-medium tracking-wide">
                Alcaudete (Jaén)
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors hover:border-b-2 hover:border-lime-400 pb-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: Phone & Reserve Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="flex items-center gap-2 text-slate-200 hover:text-lime-400 text-sm font-semibold transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-800/50"
              title="Llamar a Autoescuela Sergio"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-emerald-500/20 transition-all text-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 stroke-[#25D366]" />
              <span>Reservar por WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="p-2 text-lime-400 rounded-lg bg-slate-800/80 border border-slate-700"
              aria-label="Llamar"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1b32] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-lime-400 text-base font-medium px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${CONTACT_INFO.phone1Raw}`}
              className="flex items-center justify-center gap-2 text-slate-200 bg-slate-800/90 py-2.5 px-4 rounded-lg font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              Llamar al {CONTACT_INFO.phone1}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold py-2.5 px-4 rounded-lg text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 stroke-[#25D366]" />
              Reservar por WhatsApp
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
