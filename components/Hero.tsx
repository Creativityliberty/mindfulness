
import React from 'react';
import { ArrowRight, Sparkles, Play, Gem, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-indigo-50/50 rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-[120px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-widest animate-pulse">
            <Gem size={14} className="animate-spin-slow" />
            <span>Nouveauté : Formation Lithothérapie & Minéraux</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-slate-900 tracking-tight">
              Un esprit <span className="text-indigo-600">libre</span> <br />
              <div className="relative inline-block mt-2">
                <span className="relative z-10 text-white px-6">aligné.</span>
                <div className="absolute inset-0 bg-indigo-600 -skew-x-6 rounded-lg -rotate-1"></div>
              </div>
            </h1>
          </div>
          
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
            Découvrez le pouvoir vibratoire des pierres et maîtrisez les soins énergétiques. Apprenez à utiliser la tourmaline et les minéraux pour harmoniser votre quotidien.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-6 rounded-3xl text-lg font-bold hover:bg-indigo-700 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-3 group">
              Découvrir les formations
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-6 rounded-3xl text-lg font-bold text-slate-700 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200">
              <span className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-indigo-600 border border-slate-50">
                <Play size={20} fill="currentColor" />
              </span>
              Voir la vidéo
            </button>
          </div>

          <div className="pt-6 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[15, 22, 33, 44].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i}/120/120`} className="w-14 h-14 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform cursor-pointer" alt="Student" />
              ))}
            </div>
            <div className="text-sm font-semibold text-slate-500">
              Rejoignez <span className="text-indigo-600 font-black text-base">1,500+</span> <br />étudiants passionnés
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Main Hero Image: Healing stones/Tourmaline context */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] animate-float">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop" 
              alt="Lithothérapie et Minéraux" 
              className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
            {/* Overlay card 1: Modern icons */}
            <div className="absolute top-12 -left-8 glass-dark p-6 rounded-[2rem] shadow-2xl max-w-[220px] animate-bounce-slow border border-white/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <Activity size={20} strokeWidth={3} />
                </div>
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">ÉQUILIBRE</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">Accompagnement holistique et soin énergétique quotidien.</p>
            </div>

            {/* Overlay card 2 */}
            <div className="absolute bottom-12 -right-8 glass p-6 rounded-[2rem] shadow-2xl max-w-[220px] animate-bounce-slow border border-white/40" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-sm font-black shadow-lg shadow-indigo-200">98%</div>
                <span className="text-sm font-black text-slate-800 uppercase tracking-widest">SATISFACTION</span>
              </div>
              <p className="text-xs text-slate-600 font-bold leading-relaxed">Réduction du stress mesurable par nos élèves.</p>
            </div>
          </div>
          
          {/* Decorative frame */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-8 border-indigo-50/50 rounded-[3.5rem]"></div>
          <div className="absolute -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-100/30 rounded-full blur-[120px]"></div>
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
          animation: spin 6s linear infinite;
        }
        .glass-dark {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      `}</style>
    </section>
  );
};
