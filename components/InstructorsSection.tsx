
import React from 'react';
import { Award, Heart, Star, Calendar, MapPin, Sparkles } from 'lucide-react';
import { THEME } from '../theme';

export const InstructorsSection: React.FC = () => {
  const certifications = [
    { year: "2016", title: "Reiki Usui 1er Degré" },
    { year: "2017", title: "Aromathérapie Holistique" },
    { year: "2021", title: "Radiesthésie & Géobiologie" },
    { year: "2023", title: "Maître Praticienne Lahochi" },
  ];

  return (
    <section id="fondatrice" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image de Fabienne avec design asymétrique */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" 
                alt="Fabienne Dizy-Olliveaud" 
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={18} className="text-[#a2c4d3]" />
                  <span className="font-bold">Lintot, Normandie & Distance</span>
                </div>
              </div>
            </div>
            
            {/* Décoration couleur secondaire */}
            <div 
              className="absolute -bottom-10 -right-10 w-full h-full rounded-[4rem] -z-10 opacity-20"
              style={{ backgroundColor: THEME.colors.secondary }}
            ></div>
            
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 animate-bounce-slow">
              <Heart className="text-red-400 fill-red-400" size={32} />
            </div>
          </div>

          {/* Contenu Texte */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6"
                style={{ backgroundColor: THEME.colors.secondary }}
              >
                <Sparkles size={14} />
                Votre Accompagnante
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                Fabienne <span className="italic text-indigo-600">Dizy-Olliveaud</span>
              </h2>
              <p className="text-2xl font-medium text-slate-500 italic leading-relaxed">
                "Je ne soigne pas, je vous aide à vous souvenir que vous êtes déjà entier(e)."
              </p>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Praticienne holistique et énergéticienne intuitive, j'accompagne depuis 2014 les âmes en quête de sens, de lumière et de transformation intérieure.
              </p>
              <p>
                Mon éveil a commencé par une épreuve de vie qui m'a ouvert à une force invisible bien plus vaste : celle de la <strong>Foi</strong>, de la <strong>Présence</strong>, et de la <strong>Guérison intérieure</strong>.
              </p>
            </div>

            {/* Timeline Certifications */}
            <div className="pt-8 border-t border-slate-100">
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">PARCOURS & EXPERTISE</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white"
                      style={{ backgroundColor: THEME.colors.secondaryLight, color: THEME.colors.secondary }}
                    >
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-indigo-400">{cert.year}</p>
                      <p className="font-bold text-slate-900">{cert.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="mt-10 px-10 py-5 rounded-2xl text-white font-black text-lg transition-all shadow-xl hover:shadow-indigo-100 transform hover:-translate-y-1"
              style={{ backgroundColor: THEME.colors.secondary }}
            >
              En savoir plus sur Fabienne
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
