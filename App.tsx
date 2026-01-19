
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
import { LegalNotice } from './components/LegalNotice';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ArrowRight, Sparkles, Gem, Activity, Brain, Compass, Heart, Zap, Users, GraduationCap, Award } from 'lucide-react';
import { THEME } from './theme';

export type ViewState = 'landing' | 'auth' | 'course-detail' | 'contact' | 'legal' | 'terms' | 'privacy';

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

  const scrollItems = [...items, ...items, ...items];

  return (
    <div className="py-10 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="flex animate-infinite-scroll whitespace-nowrap">
        {scrollItems.map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-12 group cursor-default">
            <div className="text-indigo-600 transform group-hover:scale-125 transition-transform duration-300">
              {item.icon}
            </div>
            <span className="text-2xl font-black text-slate-800 uppercase tracking-tighter group-hover:text-indigo-600 transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { label: "Élèves Accompagnés", value: "1,500+", icon: <Users /> },
    { label: "Formations en Ligne", value: "12+", icon: <GraduationCap /> },
    { label: "Taux de Satisfaction", value: "98%", icon: <Heart /> },
    { label: "Années d'Expérience", value: "8+", icon: <Award /> },
  ];

  return (
    <div className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center text-white space-y-3 reveal-staggered" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              {React.cloneElement(s.icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <div className="text-4xl font-black">{s.value}</div>
            <div className="text-sm font-bold uppercase tracking-widest text-indigo-100 opacity-70">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  useEffect(() => {
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
      case 'legal':
        return (
          <>
            <Header onAuthClick={handleAuthClick} onNavigate={navigateTo} />
            <LegalNotice />
            <Footer onNavigate={navigateTo} />
          </>
        );
      case 'terms':
        return (
          <>
            <Header onAuthClick={handleAuthClick} onNavigate={navigateTo} />
            <TermsAndConditions />
            <Footer onNavigate={navigateTo} />
          </>
        );
      case 'privacy':
        return (
          <>
            <Header onAuthClick={handleAuthClick} onNavigate={navigateTo} />
            <PrivacyPolicy />
            <Footer onNavigate={navigateTo} />
          </>
        );
      default:
        return (
          <>
            <Header onAuthClick={handleAuthClick} onNavigate={navigateTo} />
            <main className="flex-grow">
              <div className="reveal">
                <Hero />
              </div>
              
              <div className="reveal">
                <HeroBanner />
              </div>

              <div className="reveal">
                <StatsSection />
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
              
              <section className="py-32 bg-[#FDFBF9] reveal">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="relative group overflow-hidden rounded-[3.5rem] md:rounded-[5rem] border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)] transform transition-transform duration-700 hover:scale-[1.01]">
                    
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-[#a2c4d3]"></div>
                    
                    <img 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop" 
                      className="absolute top-0 right-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
                      alt=""
                    />

                    <div className="relative z-10 p-12 md:p-24 text-white text-center">
                      <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                        Commencez aujourd’hui votre chemin <br /> 
                        <span className="opacity-90">vers un bien-être énergétique</span>
                      </h3>
                      
                      <p className="text-indigo-50 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium opacity-80 leading-relaxed">
                        Rejoignez notre studio et transformez votre quotidien avec nos outils de pleine conscience.
                      </p>
                      
                      <div className="flex justify-center">
                        <button 
                          onClick={() => handleAuthClick('signup')}
                          className="group bg-white text-indigo-700 px-12 py-6 rounded-3xl text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-4 active:scale-95"
                        >
                          Voir nos formations
                          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
                        </button>
                      </div>
                    </div>
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
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-staggered {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-visible .reveal-staggered {
          opacity: 1;
          transform: scale(1);
        }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 45s linear infinite;
        }
        ::selection {
          background-color: #6366f1;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default App;
