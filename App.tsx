
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CourseGrid } from './components/CourseGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { AuthPage } from './components/AuthPage';
import { ContactChatbot } from './components/ContactChatbot';
import { CourseDetail } from './components/CourseDetail';
import { ArrowRight, Sparkles } from 'lucide-react';

export type ViewState = 'landing' | 'auth' | 'course-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  // Page reveal animation observer logic
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

  const renderContent = () => {
    switch (currentView) {
      case 'auth':
        return <AuthPage initialMode={authMode} onBack={() => setCurrentView('landing')} />;
      case 'course-detail':
        return <CourseDetail course={selectedCourse} onBack={() => setCurrentView('landing')} onJoin={() => handleAuthClick('signup')} />;
      default:
        return (
          <>
            <Header onAuthClick={handleAuthClick} />
            <main className="flex-grow">
              <div className="reveal">
                <Hero />
              </div>
              <div className="reveal">
                <AboutSection />
              </div>
              <div className="reveal">
                <CourseGrid onCourseClick={handleCourseClick} />
              </div>
              <div className="reveal">
                <FeaturesSection />
              </div>
              {/* Closing CTA */}
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
                      <p className="text-indigo-200 font-medium text-sm">Satisfait ou remboursé sous 14 jours</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {renderContent()}

      {/* Global Contact & AI Chatbot Persistent Component */}
      <ContactChatbot />

      {/* Global CSS for reveals */}
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
