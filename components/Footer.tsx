
import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact-footer" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Mindfulness <span className="text-indigo-400">&</span> Studio
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Votre destination pour un éveil de conscience, un rééquilibrage énergétique et une vie plus sereine.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Liens Rapides</h4>
          <ul className="space-y-3 text-slate-400">
            <li><button onClick={() => onNavigate?.('landing')} className="hover:text-indigo-400 transition-colors">Accueil</button></li>
            <li><a href="#formations" onClick={() => onNavigate?.('landing')} className="hover:text-indigo-400 transition-colors">Nos Formations</a></li>
            <li><a href="#a-propos" onClick={() => onNavigate?.('landing')} className="hover:text-indigo-400 transition-colors">À Propos</a></li>
            <li><button onClick={() => onNavigate?.('contact')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
            <li><button onClick={() => onNavigate?.('auth')} className="hover:text-indigo-400 transition-colors">Espace Membre</button></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Contact</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-400" />
              <span>contact@mindfulness-studio.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-400" />
              <span>+33 (0)1 23 45 67 89</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-indigo-400" />
              <span>Bordeaux, France</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Newsletter</h4>
          <p className="text-slate-400 text-sm">Recevez nos conseils bien-être chaque semaine.</p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Votre email" 
              className="w-full px-5 py-3 rounded-xl bg-slate-800 border-transparent focus:border-indigo-400 outline-none transition-all text-sm"
            />
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl font-bold text-sm">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <p>© 2025 Mindfulness & Bien-être Studio. Tous droits réservés.</p>
        <div className="flex gap-8">
          <button onClick={() => onNavigate?.('legal')} className="hover:text-white transition-colors">Mentions Légales</button>
          <button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors">CGV</button>
          <button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors">Politique de confidentialité</button>
        </div>
      </div>
    </footer>
  );
};
