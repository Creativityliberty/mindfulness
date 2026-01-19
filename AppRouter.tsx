import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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
import { CourseDetail } from './components/CourseDetail';
import { ContactPage } from './components/ContactPage';
import { LegalNotice } from './components/LegalNotice';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ArrowRight, Brain, Gem, Zap, Compass, Activity, Heart, Sparkles } from 'lucide-react';

const HeroBanner: React.FC = () => {
  const items = [
    { label: "Mindfulness", icon: <Brain size={20} /> },
    { label: "Lithothérapie", icon: <Gem size={20} /> },
    { label: "Équilibrage Énergétique", icon: <Zap size={20} /> },
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

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  
  const handleAuthClick = (mode: 'login' | 'signup') => {
    navigate(mode === 'login' ? '/connexion' : '/inscription');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onAuthClick={handleAuthClick} onNavigate={handleNavigate} />
      {children}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleCourseClick = (course: any) => {
    navigate(`/formations/${course.id}`);
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    navigate(mode === 'login' ? '/connexion' : '/inscription');
  };

  return (
    <main className="flex-grow">
      <Hero />
      <HeroBanner />
      <AboutSection />
      <InstructorsSection />
      <StudioGallery />
      <CourseGrid onCourseClick={handleCourseClick} />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <section className="py-32 bg-[#FDFBF9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative group overflow-hidden rounded-[3.5rem] md:rounded-[5rem] border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)] transform transition-transform duration-700 hover:scale-[1.01]">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-[#a2c4d3]"></div>
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop" className="absolute top-0 right-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none" alt="" />
            <div className="relative z-10 p-12 md:p-24 text-white text-center">
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                Commencez aujourd'hui votre chemin <br />
                <span className="opacity-90">vers un bien-être énergétique</span>
              </h3>
              <p className="text-indigo-50 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium opacity-80 leading-relaxed">
                Rejoignez notre studio et transformez votre quotidien avec nos outils de pleine conscience.
              </p>
              <div className="flex justify-center">
                <button onClick={() => handleAuthClick("signup")} className="group bg-white text-indigo-700 px-12 py-6 rounded-3xl text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-4 active:scale-95">
                  Voir nos formations
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const FormationsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-grow pt-24">
      <CourseGrid onCourseClick={(course) => navigate(`/formations/${course.id}`)} />
    </main>
  );
};

const AboutPage: React.FC = () => (
  <main className="flex-grow pt-24">
    <AboutSection />
    <InstructorsSection />
  </main>
);

const PublicPage: React.FC = () => (
  <main className="flex-grow pt-24">
    <FeaturesSection />
  </main>
);

const AppRouter: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/accueil" element={<Layout><HomePage /></Layout>} />
        <Route path="/formations" element={<Layout><FormationsPage /></Layout>} />
        <Route path="/formations/:id" element={<Layout><CourseDetail course={selectedCourse} onBack={() => window.history.back()} onJoin={() => {}} /></Layout>} />
        <Route path="/a-propos" element={<Layout><AboutPage /></Layout>} />
        <Route path="/public" element={<Layout><PublicPage /></Layout>} />
        <Route path="/contact" element={<ContactPage onBack={() => window.history.back()} />} />
        <Route path="/connexion" element={<AuthPage onBack={() => window.history.back()} initialMode="login" />} />
        <Route path="/inscription" element={<AuthPage onBack={() => window.history.back()} initialMode="signup" />} />
        <Route path="/mentions-legales" element={<Layout><LegalNotice /></Layout>} />
        <Route path="/conditions-generales" element={<Layout><TermsAndConditions /></Layout>} />
        <Route path="/politique-confidentialite" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="*" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
