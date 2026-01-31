
import React from 'react';
import { FOUNDER_STORY } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-visible">
      <div className="relative z-10 max-w-6xl w-full">
        {/* 第一波震撼飛入：主標題 */}
        <div className="fly-in-3d" style={{ animationDelay: '0s' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-12 bg-cyan-500"></div>
            <span className="text-cyan-400 font-black uppercase tracking-[0.5em] text-xs">Innovation Evolution</span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black mb-12 leading-[0.8] tracking-tighter text-white">
            工程大腦<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">整合專家</span>
          </h1>
          
          <p className="text-xl md:text-4xl text-slate-300 max-w-4xl mb-20 leading-tight font-light">
            將 <span className="text-white font-bold border-b-2 border-cyan-500">工程驗算法</span> 與 <span className="text-white font-bold border-b-2 border-blue-500">語言學習算法</span> 深度結合。
          </p>
        </div>

        {/* 創辦人與背景區域 (紅框內容) */}
        <div className="fly-in-3d mb-24" style={{ animationDelay: '0.4s' }}>
          <div className="p-1 md:p-12 border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-3xl rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                  <span className="w-2 h-10 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></span>
                  關於創辦背景
                </h2>
                <p className="text-cyan-100 text-2xl font-black mb-6 leading-snug">
                  {FOUNDER_STORY.background}
                </p>
                <p className="text-slate-400 text-xl leading-relaxed font-light">
                  {FOUNDER_STORY.about}
                </p>
              </div>
              
              <div className="lg:col-span-5 flex flex-col justify-center border-l border-white/10 pl-0 lg:pl-12 pt-8 lg:pt-0">
                <div className="mb-10">
                  <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-black uppercase tracking-widest mb-4">
                    Seed Round Success
                  </div>
                  <p className="text-white text-2xl font-black italic leading-tight">
                    {FOUNDER_STORY.capital}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-2 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></div>
                    <p className="text-slate-300 text-base leading-relaxed italic">
                      {FOUNDER_STORY.value.alignment}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-2 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0"></div>
                    <p className="text-slate-300 text-base leading-relaxed italic">
                      {FOUNDER_STORY.value.asset}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部核心架構 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fly-in-3d" style={{ animationDelay: '0.8s' }}>
          <div className="p-12 border border-white/5 bg-slate-900/40 backdrop-blur-xl rounded-[3rem] hover:border-cyan-500/20 transition-all duration-700">
            <h3 className="text-2xl font-black mb-6 text-cyan-400 uppercase tracking-widest">工程驗算法 (Verification)</h3>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              毫秒級精確輸出，徹底杜絕人為報價與算量誤差，將複雜碎數自動化。
            </p>
          </div>
          <div className="p-12 border border-white/5 bg-slate-900/40 backdrop-blur-xl rounded-[3rem] hover:border-blue-500/20 transition-all duration-700">
            <h3 className="text-2xl font-black mb-6 text-blue-400 uppercase tracking-widest">語言解析算法 (Linguistic)</h3>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              聽懂工地現場的「眉角」。將口語轉化為結構決策，解決 10 次溝通僅 1 次精準的內耗。
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shockFlyIn {
          0% {
            opacity: 0;
            filter: blur(30px) brightness(2);
            transform: perspective(1500px) translateZ(800px) translateY(50px);
          }
          40% {
            opacity: 0.8;
            filter: blur(10px) brightness(1.5);
          }
          100% {
            opacity: 1;
            filter: blur(0px) brightness(1);
            transform: perspective(1500px) translateZ(0) translateY(0);
          }
        }
        .fly-in-3d {
          animation: shockFlyIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
};

export default Hero;
