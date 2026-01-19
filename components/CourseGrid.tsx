
import React, { useState } from 'react';
import { Eye, Clock, Users, Star, Gem, Compass, Activity, Brain, ArrowRight, Filter, Sparkles, User } from 'lucide-react';
import { THEME } from '../theme';
import { cn } from '../lib/utils';

export const courses = [
  {
    id: "mindfulness-101",
    title: "Mindfulness & Pleine Conscience",
    category: "Mental",
    icon: <Brain className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    desc: "Apprenez à vivre l'instant présent et à gérer votre stress avec des techniques éprouvées.",
    lessons: 12,
    students: 450,
    price: "89€",
    duration: "6 semaines",
    instructor: "Julie Martin",
    instructorImg: "https://picsum.photos/seed/julie/100/100"
  },
  {
    id: "chakras-energy",
    title: "Chakras & Équilibrage",
    category: "Énergie",
    icon: <Activity className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1563290263-22f30b208615?q=80&w=800&auto=format&fit=crop",
    desc: "Harmonisez vos centres d'énergie pour retrouver vitalité et paix intérieure.",
    lessons: 15,
    students: 320,
    price: "129€",
    duration: "8 semaines",
    instructor: "Marc Durand",
    instructorImg: "https://picsum.photos/seed/marc/100/100"
  },
  {
    id: "lithotherapy-base",
    title: "Lithothérapie & Minéraux",
    category: "Nature",
    icon: <Gem className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1567593322472-492625124297?q=80&w=800&auto=format&fit=crop",
    desc: "Découvrez le pouvoir vibratoire des pierres et comment les utiliser au quotidien.",
    lessons: 10,
    students: 280,
    price: "99€",
    duration: "5 semaines",
    instructor: "Sarah Lefebvre",
    instructorImg: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: "pendulum-intuition",
    title: "Pendule & Radiesthésie",
    category: "Intuition",
    icon: <Compass className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=800&auto=format&fit=crop",
    desc: "Maîtrisez l'usage du pendule pour développer votre sensibilité et obtenir des réponses.",
    lessons: 8,
    students: 190,
    price: "79€",
    duration: "4 semaines",
    instructor: "Lucas Bertrand",
    instructorImg: "https://picsum.photos/seed/lucas/100/100"
  }
];

const categories = ["Tout", "Mental", "Énergie", "Nature", "Intuition"];

interface CourseGridProps {
  onCourseClick?: (course: any) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ onCourseClick }) => {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredCourses = activeCategory === "Tout" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="formations" className="py-24 bg-[#FDFBF9] relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Catalogue de Formations
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Éveillez votre <span className="text-indigo-600 italic">potentiel</span> intérieur
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Explorez nos programmes conçus par des experts pour transformer votre conscience, harmoniser vos énergies et maîtriser les outils ancestraux.
            </p>
          </div>
          
          <button className="hidden lg:flex items-center gap-3 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm">
            Voir tout le catalogue
            <ArrowRight size={20} className="text-indigo-600" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center gap-2 mr-4 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
            <Filter size={14} />
            Filtrer par :
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                activeCategory === cat 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105" 
                  : "bg-white text-slate-500 border border-slate-100 hover:border-indigo-200 hover:text-indigo-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {filteredCourses.map((course, idx) => (
            <div 
              key={course.id} 
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-indigo-700 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {course.icon}
                    {course.category}
                  </div>
                </div>

                {/* Price Tag */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/40">
                  <span className="text-lg font-black text-indigo-600">{course.price}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <div className="flex items-center gap-2 text-white text-xs font-bold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      4.9 (120+ avis)
                   </div>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                   <img src={course.instructorImg} className="w-8 h-8 rounded-full border border-slate-100 shadow-sm" alt={course.instructor} />
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Par {course.instructor}</span>
                </div>

                <h4 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                  {course.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs">
                    <Clock size={16} className="text-indigo-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs">
                    <Users size={16} className="text-indigo-600" />
                    {course.students} élèves
                  </div>
                </div>
                
                <button 
                  onClick={() => onCourseClick?.(course)}
                  className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 transform group-hover:-translate-y-1 shadow-xl hover:shadow-indigo-200"
                >
                  Découvrir le programme
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only See All */}
        <button className="w-full mt-12 flex lg:hidden items-center justify-center gap-3 bg-white text-slate-900 border border-slate-200 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all shadow-sm">
          Voir tout le catalogue
          <ArrowRight size={18} className="text-indigo-600" />
        </button>
      </div>
    </section>
  );
};
