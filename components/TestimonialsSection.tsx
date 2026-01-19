import { Quote, Star } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "Sophie Laurent",
    role: "Élève en Mindfulness",
    content:
      "Cette formation a changé ma façon d'aborder le stress quotidien. Les exercices pratiques sont simples mais d'une puissance incroyable. Je me sens enfin alignée.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Thomas Dubois",
    role: "Passionné de Lithothérapie",
    content:
      "Le cours sur les minéraux est d'une richesse rare. On sent l'expertise derrière chaque leçon. J'ai pu créer ma propre routine énergétique en quelques semaines.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Emma Girard",
    role: "Réveil Intuitif",
    content:
      "L'accompagnement est bienveillant et structuré. On n'est jamais perdu. C'est bien plus qu'une formation, c'est un véritable cheminement vers soi.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">
            Témoignages
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Ce que disent nos{" "}
            <span className="text-indigo-600 italic">élèves</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-premium group p-10 relative hover-lift reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote
                className="absolute top-8 right-8 text-indigo-100 group-hover:text-indigo-300 transition-colors"
                size={48}
              />

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-2xl object-cover shadow-md group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 className="font-black text-slate-900">{t.name}</h4>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
