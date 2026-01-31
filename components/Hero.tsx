import React from 'react';
import { FOUNDER_STORY } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-visible">
      <div className="relative z-10 max-w-6xl w-full">
        {/* 第一波飛入：標題 */}
        <div className="fly-in-3d" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-cyan-500"></div>
            <span className="text-cyan-500 font-black uppercase tracking-[0.4em] text-xs">A New Standard in Construction AI</span>
          </div>
          
          <h1 className="text-6xl md:text-[7.5rem] font-black mb-12 leading-[0.85] tracking-tighter text-white">
            工程大腦<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">整合專家</span>
          </h1>
          
          <p className="text-xl md:text-4xl text-slate-300 max-w-4xl mb-16 leading-tight font-light">
            將 <span className="text-white font-bold border-b-2 border-cyan-500">工程驗算法</span> 與 <span className="text-white font-bold border-b-2 border-blue-500">語言學習算法</span> 深度結合。
          </p>
        </div>

        {/* 紅框位置：創辦背景與資本實力 (第二波飛入) */}
        <div className="fly-in-3d mb-20 p-10 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-2xl rounded-[3rem]" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                關於創辦背景
              </h2>
              <p className="text-cyan-100 text-xl font-bold mb-4 leading-relaxed">
                {FOUNDER_STORY.background}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                {FOUNDER_STORY.about}
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center border-l border-white/10 pl-0 lg:pl-10">
              <div className="mb-8">
                <h3 className="text-xs font-black text-cyan-500 uppercase tracking-widest mb-2">資本實力</h3>
                <p className="text-white text-xl font-black italic">{FOUNDER_STORY.capital}</p>
              </div>
              <div className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 italic">
                  {FOUNDER_STORY.value.alignment}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 italic">
                  {FOUNDER_STORY.value.asset}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 第三波飛入：核心架構卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl fly-in-3d" style={{ animationDelay: '0.7s' }}>
          <div className="p-12 border border-white/5 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] hover:bg-slate-900 transition-colors">
            <h3 className="text-xl font-black mb-4 text-cyan-400 uppercase tracking-widest">工程驗算法引擎</h3>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              精準處理碎數、材料損耗與報價邏輯。將繁瑣計算轉化為毫秒級精確輸出，徹底杜絕人為誤差。
            </p>
          </div>
          <div className="p-12 border border-white/5 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] hover:bg-slate-900 transition-colors">
            <h3 className="text-xl font-black mb-4 text-blue-400 uppercase tracking-widest">語言解析算法引擎</h3>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              專業語境重組。讓 AI 學習特定人組術語，能將混亂的現場資訊過濾、分析，產出正確決策。
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flyInFront {
          0% {
            opacity: 0;
            filter: blur(20px);
            transform: perspective(1000px) translateZ(600px) translateY(100px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) translateZ(0) translateY(0);
          }
        }
        .fly-in-3d {
          animation: flyInFront 1.5s cubic-bezier(0.19, 1, 0.22, 1) both;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
};

export default Hero;