
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, User, Bell, ChevronLeft } from 'lucide-react';

interface AuthPageProps {
  onBack: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthPage: React.FC<AuthPageProps> = ({ onBack, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [stayConnected, setStayConnected] = useState(true);

  const getTitle = () => {
    if (mode === 'login') return 'Connectez-vous !';
    if (mode === 'signup') return 'Rejoignez-nous !';
    return 'Mot de passe oublié';
  };

  const getSubtitle = () => {
    if (mode === 'login') return (
      <p className="text-slate-500 font-medium">
        Vous n'avez pas de compte ? 
        <button 
          onClick={() => setMode('signup')}
          className="text-indigo-600 font-bold ml-2 hover:underline"
        >
          Créez un compte
        </button>
      </p>
    );
    if (mode === 'signup') return (
      <p className="text-slate-500 font-medium">
        Vous avez déjà un compte ? 
        <button 
          onClick={() => setMode('login')}
          className="text-indigo-600 font-bold ml-2 hover:underline"
        >
          Connectez-vous
        </button>
      </p>
    );
    return (
      <p className="text-slate-500 font-medium">
        Entrez votre e-mail pour réinitialiser votre accès.
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side: Form */}
      <div className="w-full lg:w-[45%] p-8 md:p-16 lg:p-24 flex flex-col justify-between relative z-10">
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 group cursor-pointer mb-12"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-indigo-950">
              Mindfulness <span className="text-indigo-600">&</span> Studio
            </span>
          </button>

          <div className="max-w-md w-full">
            {mode === 'forgot' && (
              <button 
                onClick={() => setMode('login')}
                className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-6 hover:-translate-x-1 transition-transform"
              >
                <ChevronLeft size={20} />
                Retour à la connexion
              </button>
            )}

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              {getTitle()}
            </h1>
            {getSubtitle()}

            <form className="mt-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1">
                    NOM COMPLET <span className="text-red-400">*</span>
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                    <input 
                      type="text" 
                      placeholder="Votre nom complet"
                      className="w-full pl-12 pr-6 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold text-slate-700"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1">
                  ADRESSE E-MAIL <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                  <input 
                    type="email" 
                    placeholder="Saisissez votre e-mail"
                    className="w-full pl-12 pr-6 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold text-slate-700"
                  />
                </div>
              </div>

              {mode !== 'forgot' && (
                <>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1">
                      MOT DE PASSE <span className="text-red-400">*</span>
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Saisissez votre mot de passe"
                        className="w-full pl-12 pr-12 py-4.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold text-slate-700"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Rester connecté</p>
                      <p className="text-[10px] text-slate-400 font-medium">Garder ma session active</p>
                    </div>
                    <button 
                      onClick={() => setStayConnected(!stayConnected)}
                      className={`w-12 h-6 rounded-full transition-all relative duration-300 ${stayConnected ? 'bg-indigo-600' : 'bg-slate-300'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${stayConnected ? 'left-7' : 'left-1'}`} />
                    </button>
                  </div>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => setMode('forgot')}
                      className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      MOT DE PASSE OUBLIÉ ?
                    </button>
                  </div>
                </>
              )}

              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-[0_15px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.4)] transition-all transform active:scale-[0.98] group">
                {mode === 'login' && 'Se connecter'}
                {mode === 'signup' && "S'inscrire"}
                {mode === 'forgot' && 'Réinitialiser'}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 font-medium text-center md:text-left mt-8">
          © 2025 Mindfulness & Bien-être Studio. Tous droits réservés.
        </p>
      </div>

      {/* Right Side: High Quality Hero Image */}
      <div className="hidden lg:block lg:w-[55%] p-6 relative">
        <div className="h-full w-full rounded-[3.5rem] overflow-hidden relative shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1596435345719-79f977508e64?q=80&w=1600&auto=format&fit=crop" 
            alt="Lithotherapy & Wellbeing"
            className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[20s] ease-linear"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-indigo-900/10 to-transparent"></div>
          
          {/* Glass Overlay Card inspired by Tara Money UI but for Wellbeing */}
          <div className="absolute bottom-12 left-12 right-12 glass p-10 rounded-[2.5rem] border border-white/40 backdrop-blur-3xl shadow-2xl">
            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
              Transformez votre quotidien.
            </h3>
            <p className="text-slate-600 font-bold text-lg leading-relaxed">
              Rejoignez des milliers d'étudiants qui ont trouvé leur équilibre grâce à nos programmes certifiants en lithothérapie.
            </p>
          </div>

          {/* Notification Icon Bubble with Animation */}
          <div className="absolute bottom-16 right-16 w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] animate-bounce cursor-pointer group hover:bg-indigo-50 transition-all active:scale-90 z-20">
             <Bell className="text-indigo-600 w-8 h-8 group-hover:rotate-12 transition-transform" />
             <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full border-[3px] border-white"></div>
          </div>
        </div>
        
        {/* Subtle decorative circles */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-[100px] -z-10"></div>
      </div>

      <style>{`
        .py-4.5 {
          padding-top: 1.125rem;
          padding-bottom: 1.125rem;
        }
        .w-18 { width: 4.5rem; }
        .h-18 { height: 4.5rem; }
      `}</style>
    </div>
  );
};
