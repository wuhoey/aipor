
import React, { useEffect } from 'react';
import Hero from './components/Hero.tsx';
import TechStack from './components/TechStack.tsx';
import ServiceDisplay from './components/ServiceDisplay.tsx';
import ProjectScope from './components/ProjectScope.tsx';
import Footer from './components/Footer.tsx';
import BackgroundCanvas from './components/BackgroundCanvas.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    // 初始檢查
    setTimeout(handleReveal, 500);

    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-50 bg-[#020617] selection:bg-cyan-500 selection:text-white">
      {/* 震撼全畫面 AI 背景 */}
      <BackgroundCanvas />

      {/* 導航欄 */}
      <nav className="fixed top-0 left-0 right-0 z-[100] p-8 flex justify-center pointer-events-none">
        <div className="max-w-6xl w-full flex items-center justify-between bg-slate-950/50 backdrop-blur-xl border border-white/5 rounded-full px-8 py-4 pointer-events-auto shadow-2xl">
          <div className="text-xl font-black tracking-tighter text-white uppercase italic flex items-center gap-2">
            <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
            智匯企業
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 hidden md:block">
            Engineering AI Standard
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        
        <div className="reveal">
          <TechStack />
        </div>
        
        <div className="reveal">
          <ServiceDisplay />
        </div>
        
        <div className="reveal">
          <ProjectScope />
        </div>
      </main>

      <div className="reveal">
        <Footer />
      </div>
    </div>
  );
};

export default App;
