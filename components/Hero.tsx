import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Gem } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900/60"></div>
      </div>

      {/* Centered content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center py-32">
        <div className="space-y-8 reveal-stagger">
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest animate-fade-in">
            <Gem size={14} className="animate-spin-slow" />
            <span>Nouveauté : Formation Lithothérapie & Minéraux</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white tracking-tight drop-shadow-lg">
              {THEME.content.brandName.split(' ')[0]} <br />
              <span className="relative inline-block">
                libre
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-indigo-400 to-cyan-300 rounded-full opacity-60 transform scale-x-110"></span>
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-300 transition-all duration-700 ease-in-out inline-block min-w-[300px]">
                {words[currentWordIndex]}
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
            {THEME.content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button className="btn-primary w-full sm:w-auto text-lg px-10 py-6 flex items-center justify-center gap-3 group">
              {THEME.content.cta.discover}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-6 rounded-3xl text-lg font-bold text-white hover:bg-white/10 transition-all border border-white/30 group hover-lift backdrop-blur-sm">
              <span className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </span>
              Voir la vidéo
            </button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-4">
              {[15, 22, 33, 44].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i}/120/120`} className="w-14 h-14 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform cursor-pointer hover:z-10" alt="Student" />
              ))}
            </div>
            <div className="text-sm font-semibold text-white/80">
              Rejoignez <span className="text-cyan-300 font-black text-base">1,500+</span> <br />étudiants passionnés
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
