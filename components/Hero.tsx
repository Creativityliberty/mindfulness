
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Gem, Activity } from 'lucide-react';
import { THEME } from '../theme';

export const Hero: React.FC = () => {
  const words = ["aligné.", "serein.", "éveillé.", "rayonnant."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white`}>
      {/* Formes décoratives avec animation de flottement */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-indigo-50/50 rounded-full blur-[120px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-[120px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className={`${THEME.spacing.containerMaxWidth} mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10`}>
        <div className="space-y-10 reveal-stagger">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-widest animate-fade-in">
            <Gem size={14} className="animate-spin-slow" />
            <span>Nouveauté : Formation Lithothérapie & Minéraux</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-slate-900 tracking-tight">
              {THEME.content.brandName.split(' ')[0]} <br />
              <span className="relative inline-block">
                libre
                {/* LA BARRE BLEUE STYLÉE */}
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-indigo-600 to-[#a2c4d3] rounded-full opacity-30 transform scale-x-110"></span>
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-[#a2c4d3] transition-all duration-700 ease-in-out inline-block min-w-[300px]">
                {words[currentWordIndex]}
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
            {THEME.content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="btn-primary w-full sm:w-auto text-lg px-10 py-6 flex items-center justify-center gap-3 group">
              {THEME.content.cta.discover}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-6 rounded-3xl text-lg font-bold text-slate-700 hover:bg-indigo-50 transition-all border border-slate-200 group hover-lift">
              <span className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-indigo-600 border border-slate-100 group-hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </span>
              Voir la vidéo
            </button>
          </div>

          <div className="pt-6 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[15, 22, 33, 44].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i}/120/120`} className="w-14 h-14 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform cursor-pointer hover:z-10" alt="Student" />
              ))}
            </div>
            <div className="text-sm font-semibold text-slate-500">
              Rejoignez <span className="text-indigo-600 font-black text-base">1,500+</span> <br />étudiants passionnés
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] animate-float">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop" 
              alt="Lithothérapie et Minéraux" 
              className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
            <div className="absolute top-12 -left-8 backdrop-blur-xl bg-white/90 p-6 rounded-[2rem] shadow-2xl max-w-[220px] animate-bounce-slow border border-white/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Activity size={20} strokeWidth={3} />
                </div>
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">ÉQUILIBRE</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">Accompagnement holistique et soin énergétique quotidien.</p>
            </div>

            <div className="absolute bottom-12 -right-8 backdrop-blur-xl bg-white/90 p-6 rounded-[2rem] shadow-2xl max-w-[220px] animate-bounce-slow border border-white/40" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-sm font-black shadow-lg shadow-indigo-200">98%</div>
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">SATISFACTION</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">Réduction du stress mesurable par nos élèves.</p>
            </div>
          </div>
          
          <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-8 border-indigo-50 rounded-[3.5rem] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
