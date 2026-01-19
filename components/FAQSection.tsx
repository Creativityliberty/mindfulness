
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Les formations sont-elles accessibles aux débutants ?",
    a: "Absolument. Nos programmes sont conçus pour vous accompagner pas à pas, que vous fassiez vos premiers pas dans l'énergétique ou que vous soyez déjà initié."
  },
  {
    q: "Combien de temps ai-je accès aux cours ?",
    a: "Une fois inscrit, vous bénéficiez d'un accès illimité à vie. Vous pouvez revenir sur les leçons aussi souvent que nécessaire, à votre propre rythme."
  },
  {
    q: "Obtient-on un certificat à la fin ?",
    a: "Oui, un certificat d'achèvement nominatif est délivré automatiquement après avoir complété tous les modules de votre formation."
  },
  {
    q: "Peut-on poser des questions si on est bloqué ?",
    a: "Bien sûr. Chaque formation dispose d'un espace de discussion dédié où vous pouvez poser vos questions et échanger avec la communauté et l'instructeur."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FDFBF9]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Questions fréquentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "bg-white rounded-3xl border transition-all duration-300 overflow-hidden",
                openIndex === i ? "border-indigo-200 shadow-xl shadow-indigo-50/50" : "border-slate-100"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === i ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-600"
                )}>
                  {faq.q}
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  openIndex === i ? "bg-indigo-600 text-white rotate-180" : "bg-slate-50 text-slate-400"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div className={cn(
                "px-8 transition-all duration-300 ease-in-out",
                openIndex === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              )}>
                <p className="text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
