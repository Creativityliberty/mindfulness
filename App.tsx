
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { InstructorsSection } from './components/InstructorsSection';
import { StudioGallery } from './components/StudioGallery';
import { CourseGrid } from './components/CourseGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AuthPage } from './components/AuthPage';
import { ContactChatbot } from './components/ContactChatbot';
import { CourseDetail } from './components/CourseDetail';
import { ContactPage } from './components/ContactPage';
import { ArrowRight, Sparkles, Gem, Activity, Brain, Compass, Heart } from 'lucide-react';
import { THEME } from './theme';

export type ViewState = 'landing' | 'auth' | 'course-detail' | 'contact';

const HeroBanner: React.FC = () => {
  const items = [
    { label: "Mindfulness", icon: <Brain size={20} /> },
    { label: "Lithothérapie", icon: <Gem size={20} /> },
    { label: "Équilibrage Énergétique", icon: <Zap size={20} className="w-5 h-5" /> },
    { label: "Radiesthésie", icon: <Compass size={20} /> },
    { label: "Chakras", icon: <Activity size={20} /> },
    { label: "Bien-être Holistique", icon: <Heart size={20} /> },
    { label: "Pleine Conscience", icon: <Sparkles size={20} /> },
  ];

  // Double the items for seamless loop
  const scrollItems = [...items, ...items, ...items];

  return (
    <div className="py-8 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {scrollItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-12">
            <div className="text-indigo-600">
              {item.icon}
            </div>
            <span className="text-xl font-black text-slate-800 uppercase tracking-tighter">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Zap = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  useEffect(() => {
    if (currentView === 'landing') {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [currentView]);

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setCurrentView('auth');
    window.scrollTo(0, 0);
  };

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    setCurrentView('course-detail');
    window.scrollTo(0, 0);
  };

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'auth':
        return <AuthPage onBack={() => setCurrentView('landing')} initialMode={authMode} />;
      case 'course-detail':
        return <CourseDetail course={selectedCourse} onBack={() => setCurrentView('landing')} onJoin={() => handleAuthClick('signup')} />;
      case 'contact':
        return <ContactPage onBack={() => setCurrentView('landing')} />;
      default:
        return (
          <>
            <Header onAuthClick={handleAuthClick} onNavigate={navigateTo} />
            <main className="flex-grow">
              <div className="reveal">
                <Hero />
              </div>
              
              {/* BANDEAU DE DÉFILEMENT NICE */}
              <div className="reveal">
                <HeroBanner />
              </div>

              <div className="reveal" id="a-propos">
                <AboutSection />
              </div>
              <div className="reveal">
                <InstructorsSection />
              </div>
              <div className="reveal">
                <StudioGallery />
              </div>
              <div className="reveal" id="formations">
                <CourseGrid onCourseClick={handleCourseClick} />
              </div>
              <div className="reveal" id="public">
                <FeaturesSection />
              </div>
              <div className="reveal">
                <TestimonialsSection />
              </div>
              <div className="reveal">
                <FAQSection />
              </div>
              
              {/* SECTION CTA FINALE REVISITÉE */}
              <section className="py-32 bg-[#FDFBF9] reveal">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="relative group overflow-hidden rounded-[4rem] border-[10px] border-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)]">
                    
                    {/* Background Gradient & Images */}
                    <div 
                      className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-[#a2c4d3]"
                    ></div>
                    
                    {/* Floating Decorative Images with low opacity */}
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" 
                      className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
                      alt=""
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1567593322472-492625124297?q=80&w=800&auto=format&fit=crop" 
                      className="absolute bottom-0 left-0 w-1/3 h-full object-cover opacity-10 mix-blend-screen pointer-events-none"
                      alt=""
                    />

                    {/* Content */}
                    <div className="relative z-10 p-12 md:p-20 text-white text-center">
                      <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                        Commencez aujourd’hui votre chemin <br /> 
                        <span className="text-indigo-100">vers un bien-être énergétique</span>
                      </h3>
                      
                      <p className="text-indigo-50 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium opacity-90">
                        Rejoignez notre studio et transformez votre quotidien avec nos outils de pleine conscience.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button 
                          onClick={() => handleAuthClick('signup')}
                          className="group bg-white text-indigo-700 px-12 py-6 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-4"
                        >
                          Voir nos formations
                          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
                        </button>
                      </div>
                    </div>

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-[3.5rem]"></div>
                  </div>
                </div>
              </section>
            </main>
            <Footer onNavigate={navigateTo} />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {renderContent()}
      <ContactChatbot />
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(79, 70, 229, 0.2);
        }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
