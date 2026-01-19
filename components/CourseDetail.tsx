
import React from 'react';
import { ChevronLeft, Clock, Users, Star, CheckCircle, PlayCircle, BookOpen, Award, Sparkles, ArrowRight } from 'lucide-react';
import { THEME } from '../theme';

interface CourseDetailProps {
  course: any;
  onBack: () => void;
  onJoin: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onJoin }) => {
  if (!course) return null;

  const syllabus = [
    { title: "Introduction et Fondations", lessons: 3, duration: "1h 30m" },
    { title: "Les Pratiques Quotidiennes", lessons: 4, duration: "2h 15m" },
    { title: "Techniques Avancées", lessons: 3, duration: "1h 45m" },
    { title: "Intégration et Conclusion", lessons: 2, duration: "1h 00m" },
  ];

  return (
    <div className="bg-[#FDFBF9] min-h-screen">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 bg-white/80 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg border border-white/40 hover:scale-105 transition-all text-slate-900 font-bold text-sm"
        >
          <ChevronLeft size={20} />
          Retour
        </button>
        <button 
          onClick={onJoin}
          className="pointer-events-auto bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg font-black text-sm hover:bg-indigo-700 transition-all"
        >
          S'inscrire à {course.price}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={course.image} 
          className="w-full h-full object-cover" 
          alt={course.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF9] via-[#FDFBF9]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-600 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            {course.category}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
            {course.title}
          </h1>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">DURÉE</p>
                <p className="font-bold text-slate-900">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">LEÇONS</p>
                <p className="font-bold text-slate-900">{course.lessons} Modules</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600">
                <Star size={20} className="fill-indigo-600" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">NOTE</p>
                <p className="font-bold text-slate-900">4.9 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">À propos de cette formation</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {course.desc} Cette formation complète a été conçue pour vous accompagner pas à pas dans votre transformation personnelle. À travers des modules structurés, vous apprendrez non seulement la théorie, mais surtout la mise en pratique immédiate.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Sous la direction de notre expert <span className="text-indigo-600 font-bold">{course.instructor}</span>, vous rejoindrez une communauté d'apprenants passionnés et bienveillants.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900">Ce que vous allez apprendre</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Maîtriser les principes fondamentaux",
                "Appliquer des techniques concrètes au quotidien",
                "Développer votre intuition naturelle",
                "Gérer efficacement le stress et les émotions",
                "Créer une routine de bien-être durable",
                "Certificat de fin de formation inclus"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-50">
                  <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={18} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900">Programme de la formation</h3>
            <div className="space-y-4">
              {syllabus.map((module, i) => (
                <div key={i} className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 font-black group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{module.title}</h4>
                        <p className="text-xs font-medium text-slate-400">{module.lessons} leçons • {module.duration}</p>
                      </div>
                    </div>
                    <PlayCircle className="text-slate-200 group-hover:text-indigo-600 transition-colors" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
              <div className="mb-6">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">PRIX TOTAL</p>
                <p className="text-5xl font-black text-indigo-600">{course.price}</p>
                <p className="text-xs text-slate-400 font-bold mt-2">Paiement unique, accès à vie</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { icon: <Clock size={16} />, text: "Accès 24h/24 et 7j/7" },
                  { icon: <Users size={16} />, text: "Support communauté inclus" },
                  { icon: <Award size={16} />, text: "Certificat d'achèvement" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 text-sm font-bold">
                    <div className="text-indigo-600">{feature.icon}</div>
                    {feature.text}
                  </div>
                ))}
              </div>

              <button 
                onClick={onJoin}
                className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
              >
                S'inscrire Maintenant
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Satisfait ou remboursé sous 14 jours</p>
            </div>

            <div className="bg-indigo-950 p-8 rounded-[2.5rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={100} />
              </div>
              <h4 className="text-xl font-black mb-4 relative z-10">Des questions ?</h4>
              <p className="text-sm text-indigo-200/80 font-medium mb-6 relative z-10">
                Notre assistant IA et notre équipe support sont là pour vous aider à choisir la meilleure formation.
              </p>
              <button className="text-sm font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors">
                Contacter le support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
