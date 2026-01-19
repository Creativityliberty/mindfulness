
import React from 'react';
import { Eye, Clock, Users, Star, Gem, Compass, Activity, Brain } from 'lucide-react';

const courses = [
  {
    title: "Mindfulness & Pleine Conscience",
    category: "Mental",
    icon: <Brain className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    desc: "Apprenez à vivre l'instant présent et à gérer votre stress avec des techniques éprouvées.",
    lessons: 12,
    students: 450
  },
  {
    title: "Chakras & Équilibrage",
    category: "Énergie",
    icon: <Activity className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1563290263-22f30b208615?q=80&w=800&auto=format&fit=crop",
    desc: "Harmonisez vos centres d'énergie pour retrouver vitalité et paix intérieure.",
    lessons: 15,
    students: 320
  },
  {
    title: "Lithothérapie & Minéraux",
    category: "Nature",
    icon: <Gem className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1567593322472-492625124297?q=80&w=800&auto=format&fit=crop",
    desc: "Découvrez le pouvoir vibratoire des pierres et comment les utiliser au quotidien.",
    lessons: 10,
    students: 280
  },
  {
    title: "Pendule & Radiesthésie",
    category: "Intuition",
    icon: <Compass className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=800&auto=format&fit=crop",
    desc: "Maîtrisez l'usage du pendule pour développer votre sensibilité et obtenir des réponses.",
    lessons: 8,
    students: 190
  }
];

export const CourseGrid: React.FC = () => {
  return (
    <section id="formations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Nos Programmes</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Nos formations en ligne en bien-être énergétique
            </h3>
          </div>
          <button className="text-indigo-600 font-bold flex items-center gap-2 hover:underline">
            Voir tout le catalogue <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 glass rounded-full text-indigo-700 text-xs font-bold uppercase tracking-tighter shadow-sm">
                  {course.icon}
                  {course.category}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {course.desc}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-slate-400 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-indigo-400" />
                    {course.lessons} leçons
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-indigo-400" />
                    {course.students} élèves
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    4.9
                  </div>
                </div>
                
                <button className="w-full mt-6 py-3 rounded-xl border border-slate-100 font-bold text-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center justify-center gap-2">
                  En savoir plus
                  <Eye size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
);
