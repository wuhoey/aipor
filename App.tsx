import React, { useEffect } from 'react';
import Hero from './components/Hero.tsx';
import TechStack from './components/TechStack.tsx';
import ServiceDisplay from './components/ServiceDisplay.tsx';
import ProjectScope from './components/ProjectScope.tsx';
import Footer from './components/Footer.tsx';
import BackgroundCanvas from './components/BackgroundCanvas.tsx';

const App: React.FC = () => {
  useEffect(() => {
    // 使用 setTimeout 確保 DOM 渲染完畢
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));

      // 立即檢查目前已在視窗內的元素
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        }
      });

      return () => observer.disconnect();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-50">
      {/* 全局宇宙節點背景 */}
      <BackgroundCanvas />

      {/* 頂部品牌條 */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex justify-center pointer-events-none">
        <div className="max-w-6xl w-full flex items-center justify-between border-b border-white/5 pb-4 bg-slate-950/40 backdrop-blur-md pointer-events-auto">
          <div className="text-2xl font-black tracking-tighter text-white uppercase italic">智匯企業</div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500/80 hidden md:block">
            Engineering AI Integration System
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