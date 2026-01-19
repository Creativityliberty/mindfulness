
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, ChevronLeft, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  const contactInfo = [
    { 
      icon: <Mail className="text-indigo-600" />, 
      title: "Email", 
      value: "contact@mindfulness-studio.com",
      desc: "Réponse sous 24h"
    },
    { 
      icon: <Phone className="text-indigo-600" />, 
      title: "Téléphone", 
      value: "+33 (0)1 23 45 67 89",
      desc: "Lun-Ven, 9h-18h"
    },
    { 
      icon: <MapPin className="text-indigo-600" />, 
      title: "Studio", 
      value: "Bordeaux, France",
      desc: "Uniquement sur RDV"
    },
  ];

  const faqs = [
    { q: "Comment se déroulent les formations ?", a: "Nos formations sont 100% en ligne, accessibles 24h/24. Vous avancez à votre propre rythme avec des supports vidéo et PDF." },
    { q: "Proposez-vous des facilités de paiement ?", a: "Oui, la plupart de nos programmes peuvent être réglés en 2 ou 3 fois sans frais supplémentaires." },
    { q: "Puis-je obtenir une facture pour mon entreprise ?", a: "Absolument. Une facture détaillée est générée automatiquement après chaque achat dans votre espace membre." },
  ];

  return (
    <div className="bg-[#FDFBF9] min-h-screen pb-24">
      {/* Header Minimaliste */}
      <div className="p-6 md:p-12 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group text-slate-900 font-bold hover:text-indigo-600 transition-colors"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour au studio
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Sparkles size={16} />
          </div>
          <span className="font-bold text-slate-900 hidden sm:block">Mindfulness Studio</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Colonne Gauche: Intro & Info */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6">
                <MessageSquare size={14} />
                Contactez-nous
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Parlons de votre <span className="text-indigo-600 italic">éveil</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                Vous avez une question sur une formation ou besoin d'un conseil personnalisé ? Notre équipe est là pour vous accompagner.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">{info.title}</h4>
                  <p className="font-bold text-slate-900 mb-1">{info.value}</p>
                  <p className="text-xs text-slate-400 font-medium">{info.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="pt-12">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <HelpCircle className="text-indigo-600" />
                Questions Fréquentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100">
                    <p className="font-bold text-slate-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Droite: Formulaire */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 blur-[100px] opacity-[0.03] -z-10"></div>
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-50">
              {formState === 'success' ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Message Envoyé !</h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-indigo-600 font-black uppercase tracking-widest text-xs hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Prénom</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Jean"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Nom</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Dupont"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Adresse Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jean.dupont@email.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Sujet</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold text-slate-500 appearance-none">
                      <option>Question sur une formation</option>
                      <option>Problème technique</option>
                      <option>Partenariat</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Votre Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all font-semibold resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'sending'}
                    className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all disabled:opacity-50 group"
                  >
                    {formState === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                    <Send size={20} className={cn("group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform", formState === 'sending' && "animate-pulse")} />
                  </button>
                  <p className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-widest">
                    Vos données sont sécurisées et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
