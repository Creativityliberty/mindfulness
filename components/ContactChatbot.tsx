
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, User, MessageCircle, SendHorizontal, Loader2, Sparkles, ChevronLeft } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

type View = 'menu' | 'ai-chat';

export const ContactChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('menu');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const contactOptions = [
    { 
      name: 'Mbuntu', 
      color: 'bg-[#FFF1F1]', 
      textColor: 'text-[#FF4D00]', 
      icon: <div className="w-8 h-8 bg-[#FF4D00] rounded-full flex items-center justify-center text-white text-xs font-black italic">M</div>,
      action: () => window.open('https://mbuntu.io', '_blank')
    },
    { 
      name: 'WhatsApp', 
      color: 'bg-[#EFFFF6]', 
      textColor: 'text-[#25D366]', 
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" fill="currentColor" />,
      action: () => window.open('https://wa.me/33123456789', '_blank')
    },
    { 
      name: 'Telegram', 
      color: 'bg-[#F1F8FF]', 
      textColor: 'text-[#0088CC]', 
      icon: <SendHorizontal className="w-5 h-5 text-[#0088CC]" fill="currentColor" />,
      action: () => window.open('https://t.me/mindfulness_studio', '_blank')
    },
    { 
      name: 'Appelez-nous', 
      color: 'bg-[#EFFFF6]', 
      textColor: 'text-[#075E54]', 
      icon: <Phone className="w-5 h-5 text-[#075E54]" />,
      action: () => window.open('tel:+33123456789')
    },
    { 
      name: 'Appelez Agent assistant', 
      color: 'bg-[#FFF1F1]', 
      textColor: 'text-[#FF4D00]', 
      icon: <User className="w-5 h-5 text-[#FF4D00]" />,
      action: () => {
        setView('ai-chat');
        if (messages.length === 0) {
          setMessages([{ role: 'assistant', text: "Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui concernant nos formations ou votre compte ?" }]);
        }
      }
    },
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          parts: [{ text: m.text }],
          role: m.role === 'user' ? 'user' : 'model'
        })),
        config: {
          systemInstruction: "Tu es un assistant IA chaleureux et expert pour 'Mindfulness & Bien-être Studio'. Tu réponds en français. Tu aides les utilisateurs avec leurs questions sur la lithothérapie, la pleine conscience, les chakras et le pendule. Tu peux aussi les guider pour la connexion ou l'inscription. Reste concis et bienveillant.",
          maxOutputTokens: 500,
        }
      });

      const aiText = response.text || "Désolé, j'ai rencontré une petite erreur. Pouvez-vous répéter ?";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Désolé, je ne suis pas disponible pour le moment. Veuillez essayer un autre canal de contact." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      {/* Menu / Chat Container */}
      <div className={cn(
        "w-[350px] max-w-[calc(100vw-3rem)] glass rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 transform origin-bottom-right pointer-events-auto",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-12 pointer-events-none"
      )}>
        {view === 'menu' ? (
          <div className="p-6">
            <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight px-2">
              Par quel moyen souhaitez-vous contacter notre équipe ?
            </h3>
            <div className="space-y-3">
              {contactOptions.map((opt, i) => (
                <button 
                  key={i}
                  onClick={opt.action}
                  className={cn(
                    "w-full flex items-center gap-5 p-4 rounded-3xl transition-all hover:scale-[1.02] active:scale-95 group shadow-sm",
                    opt.color
                  )}
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    {opt.icon}
                  </div>
                  <span className={cn("text-lg font-bold tracking-tight", opt.textColor)}>
                    {opt.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-[500px] flex flex-col bg-white">
            {/* Chat Header */}
            <div className="p-4 bg-indigo-600 text-white flex items-center gap-3">
              <button 
                onClick={() => setView('menu')}
                className="hover:bg-white/20 p-1 rounded-lg transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Agent Assistant IA</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">En ligne</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex",
                  m.role === 'user' ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "max-w-[85%] p-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                    m.role === 'user' ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-3.5 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="relative flex items-center gap-2">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question..."
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all text-sm font-medium"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Trigger Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setView('menu');
        }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-90 pointer-events-auto",
          isOpen ? "bg-slate-900 text-white" : "bg-indigo-600 text-white"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="currentColor" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
};
