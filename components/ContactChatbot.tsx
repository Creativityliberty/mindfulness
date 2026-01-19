import { GoogleGenAI } from "@google/genai";
import {
    ChevronLeft,
    Facebook,
    Instagram,
    Loader2,
    MessageCircle,
    MessageSquare,
    Phone,
    Send,
    SendHorizontal,
    Sparkles,
    X
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

type View = "menu" | "ai-chat";

export const ContactChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>("menu");
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const contactOptions = [
    {
      name: "WhatsApp",
      color: "bg-[#EFFFF6]",
      textColor: "text-[#25D366]",
      icon: (
        <MessageCircle className="w-5 h-5 text-[#25D366]" fill="currentColor" />
      ),
      action: () => window.open("https://wa.me/33123456789", "_blank"),
    },
    {
      name: "Telegram",
      color: "bg-[#F1F8FF]",
      textColor: "text-[#0088CC]",
      icon: (
        <SendHorizontal
          className="w-5 h-5 text-[#0088CC]"
          fill="currentColor"
        />
      ),
      action: () => window.open("https://t.me/mindfulness_studio", "_blank"),
    },
    {
      name: "Instagram",
      color: "bg-[#FFF0F5]",
      textColor: "text-[#E1306C]",
      icon: <Instagram className="w-5 h-5 text-[#E1306C]" />,
      action: () =>
        window.open("https://instagram.com/mindfulness_studio", "_blank"),
    },
    {
      name: "Facebook",
      color: "bg-[#F0F2FF]",
      textColor: "text-[#1877F2]",
      icon: <Facebook className="w-5 h-5 text-[#1877F2]" fill="currentColor" />,
      action: () =>
        window.open("https://facebook.com/mindfulness_studio", "_blank"),
    },
    {
      name: "Appelez-nous",
      color: "bg-[#F8F9FA]",
      textColor: "text-slate-600",
      icon: <Phone className="w-5 h-5 text-slate-600" />,
      action: () => window.open("tel:+33123456789"),
    },
    {
      name: "Assistant IA",
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      action: () => {
        setView("ai-chat");
        if (messages.length === 0) {
          setMessages([
            {
              role: "assistant",
              text: "Bonjour ! Je suis l'assistant de Fabienne. Comment puis-je vous éclairer aujourd'hui sur nos formations ou nos soins ?",
            },
          ]);
        }
      },
    },
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, { role: "user", text: userMessage }].map(
          (m) => ({
            parts: [{ text: m.text }],
            role: m.role === "user" ? "user" : "model",
          }),
        ),
        config: {
          systemInstruction:
            "Tu es un assistant IA chaleureux et expert pour 'Mindfulness & Bien-être Studio', fondé par Fabienne Dizy-Olliveaud. Tu réponds en français avec douceur et bienveillance. Tu aides les utilisateurs avec leurs questions sur la lithothérapie, la pleine conscience, les chakras, le pendule et le Lahochi. Reste concis.",
          maxOutputTokens: 500,
        },
      });

      const aiText =
        response.text ||
        "Désolé, j'ai rencontré une petite erreur. Pouvez-vous répéter ?";
      setMessages((prev) => [...prev, { role: "assistant", text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Désolé, je ne suis pas disponible pour le moment. Veuillez essayer un autre canal de contact.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      <div
        className={cn(
          "w-[350px] max-w-[calc(100vw-3rem)] glass rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 transform origin-bottom-right pointer-events-auto",
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-75 opacity-0 translate-y-12 pointer-events-none",
        )}
      >
        {view === "menu" ? (
          <div className="p-6">
            <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight px-2">
              Comment souhaitez-vous nous contacter ?
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {contactOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={opt.action}
                  className={cn(
                    "w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 group shadow-sm border border-white/50",
                    opt.color,
                  )}
                >
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow flex-shrink-0">
                    {opt.icon}
                  </div>
                  <span
                    className={cn(
                      "text-base font-bold tracking-tight",
                      opt.textColor,
                    )}
                  >
                    {opt.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-[520px] flex flex-col bg-white">
            <div className="p-4 bg-indigo-600 text-white flex items-center gap-3">
              <button
                onClick={() => setView("menu")}
                className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Assistant de Fabienne</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">
                  Agent IA • Actif
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1.5 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                      m.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-white text-slate-700 border border-slate-100 rounded-tl-none",
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Écrivez votre message..."
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-50 border border-slate-100 focus:border-indigo-400 focus:bg-white outline-none transition-all text-sm font-medium"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setView("menu");
        }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-90 pointer-events-auto",
          isOpen ? "bg-slate-900 text-white" : "bg-indigo-600 text-white",
        )}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <MessageSquare size={28} fill="currentColor" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
};
