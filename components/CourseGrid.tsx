import {
  Activity,
  ArrowRight,
  Brain,
  Clock,
  Compass,
  Gem,
  Sparkles,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { THEME } from "../theme";

export const courses = [
  {
    id: "mindfulness-101",
    title: "Mindfulness & Pleine Conscience",
    category: "Mental",
    icon: <Brain className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    desc: "Apprenez à vivre l'instant présent et à gérer votre stress avec des techniques éprouvées.",
    lessons: 12,
    students: 450,
    price: "89€",
    duration: "6 semaines",
    instructor: "Julie Martin",
    instructorImg: "https://picsum.photos/seed/julie/100/100",
  },
  {
    id: "chakras-energy",
    title: "Chakras & Équilibrage",
    category: "Énergie",
    icon: <Activity className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1563290263-22f30b208615?q=80&w=800&auto=format&fit=crop",
    desc: "Harmonisez vos centres d'énergie pour retrouver vitalité et paix intérieure.",
    lessons: 15,
    students: 320,
    price: "129€",
    duration: "8 semaines",
    instructor: "Marc Durand",
    instructorImg: "https://picsum.photos/seed/marc/100/100",
  },
  {
    id: "lithotherapy-base",
    title: "Lithothérapie & Minéraux",
    category: "Nature",
    icon: <Gem className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1567593322472-492625124297?q=80&w=800&auto=format&fit=crop",
    desc: "Découvrez le pouvoir vibratoire des pierres et comment les utiliser au quotidien.",
    lessons: 10,
    students: 280,
    price: "99€",
    duration: "5 semaines",
    instructor: "Sarah Lefebvre",
    instructorImg: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    id: "pendulum-intuition",
    title: "Pendule & Radiesthésie",
    category: "Intuition",
    icon: <Compass className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=800&auto=format&fit=crop",
    desc: "Maîtrisez l'usage du pendule pour développer votre sensibilité et obtenir des réponses.",
    lessons: 8,
    students: 190,
    price: "79€",
    duration: "4 semaines",
    instructor: "Lucas Bertrand",
    instructorImg: "https://picsum.photos/seed/lucas/100/100",
  },
];

const categories = ["Tout", "Mental", "Énergie", "Nature", "Intuition"];

interface CourseGridProps {
  onCourseClick?: (course: any) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ onCourseClick }) => {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredCourses =
    activeCategory === "Tout"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section
      id="formations"
      className="py-24 bg-[#FDFBF9] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a2c4d3]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm"
              style={{ backgroundColor: THEME.colors.secondary }}
            >
              <Sparkles size={14} />
              Catalogue de Formations
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 animate-pulse">
              Éveillez votre{" "}
              <span
                style={{ color: THEME.colors.secondary }}
                className="italic animate-bounce"
              >
                potentiel
              </span>{" "}
              intérieur
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Explorez nos programmes conçus par des experts pour transformer
              votre conscience et harmoniser vos énergies.
            </p>
          </div>

          <button
            className="hidden lg:flex items-center gap-3 bg-white border px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
            style={{ borderColor: THEME.colors.secondaryLight }}
          >
            Tout le catalogue
            <ArrowRight size={20} style={{ color: THEME.colors.secondary }} />
          </button>
        </div>

        {/* Bar de filtres */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                activeCategory === cat
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-slate-500 border border-slate-100 hover:border-[#a2c4d3] hover:text-[#7fa7b9]",
              )}
              style={
                activeCategory === cat
                  ? { backgroundColor: THEME.colors.secondary }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="card-premium group flex flex-col overflow-hidden hover-lift"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-6 left-6">
                  <div className="badge-primary shadow-lg backdrop-blur-md bg-white/90">
                    {course.icon}
                    {course.category}
                  </div>
                </div>
                <div className="absolute top-6 right-6 card-glass px-4 py-2">
                  <span className="text-lg font-black text-indigo-600">
                    {course.price}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {course.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 font-medium line-clamp-3">
                  {course.desc}
                </p>

                <div className="flex items-center gap-4 mb-6 pb-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock size={16} />
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Users size={16} />
                    <span className="font-semibold">{course.students}</span>
                  </div>
                </div>

                <button
                  onClick={() => onCourseClick?.(course)}
                  className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2 group/btn"
                >
                  Découvrir
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
