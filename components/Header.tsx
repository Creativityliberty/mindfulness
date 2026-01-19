
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { THEME } from '../theme';

interface HeaderProps {
  onAuthClick: (mode: 'login' | 'signup') => void;
}

export const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Formations', href: '#formations' },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Public', href: '#public' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <header 
        className={cn(
          "max-w-6xl mx-auto transition-all duration-500 pointer-events-auto",
          THEME.spacing.glassEffect,
          "rounded-full shadow-xl",
          isScrolled ? "py-2 px-6" : "py-3 px-8"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className={`w-10 h-10 bg-${THEME.colors.primary} rounded-full flex items-center justify-center text-white shadow-indigo-200 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className={`text-lg font-bold tracking-tight text-${THEME.colors.primaryText} hidden sm:block`}>
              Mindfulness <span className={`text-${THEME.colors.primary}`}>&</span> Studio
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-xs font-bold text-slate-700 hover:text-${THEME.colors.primary} transition-colors uppercase tracking-[0.15em]`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onAuthClick('login')}
                className={`text-xs font-bold text-slate-900 hover:text-${THEME.colors.primary} uppercase tracking-widest transition-colors`}
              >
                {THEME.content.cta.login}
              </button>
              <button 
                onClick={() => onAuthClick('signup')}
                className={`bg-${THEME.colors.primary} text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-${THEME.colors.primaryHover} hover:shadow-indigo-200 hover:shadow-lg transition-all transform hover:-translate-y-0.5 uppercase tracking-widest`}
              >
                {THEME.content.cta.signup}
              </button>
            </div>
          </nav>

          <button 
            className="md:hidden text-slate-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden pointer-events-auto",
        isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <button 
          className="absolute top-8 right-8 text-slate-900 bg-slate-100 p-3 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-3xl font-black text-slate-900 hover:text-${THEME.colors.primary} transition-colors`}
          >
            {link.name}
          </a>
        ))}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
          <button 
            onClick={() => { setIsMenuOpen(false); onAuthClick('login'); }}
            className="w-full bg-slate-100 text-slate-900 py-4 rounded-2xl text-lg font-bold"
          >
            Connexion
          </button>
          <button 
            onClick={() => { setIsMenuOpen(false); onAuthClick('signup'); }}
            className={`w-full bg-${THEME.colors.primary} text-white py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-200`}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};
