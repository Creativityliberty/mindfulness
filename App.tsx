
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
import { ArrowRight, Sparkles } from 'lucide-react';

export type ViewState = 'landing' | 'auth' | 'course-detail' | 'contact';

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
              <section className="py-24 bg-white reveal">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 text-white text-center shadow-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 text-indigo-200/20">
                      <Sparkles size={120} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight relative z-10">
                      Commencez aujourd’hui votre chemin <br /> vers un bien-être énergétique
                    </h3>
                    <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                      Rejoignez notre studio et transformez votre quotidien avec nos outils de pleine conscience.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                      <button 
                        onClick={() => handleAuthClick('signup')}
                        className="bg-white text-indigo-700 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-indigo-50 hover:shadow-2xl transition-all flex items-center gap-3"
                      >
                        Voir nos formations
                        <ArrowRight size={24} />
                      </button>
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
      `}</style>
    </div>
  );
};

export default App;
