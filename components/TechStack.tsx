
import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-32 bg-slate-900 px-6 border-y border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">整合好的核心硬實力</h2>
            <p className="text-slate-400 text-xl font-light">
              我們在底層演算法上做了深度的產業優化，不僅是計算，更是智慧。
            </p>
          </div>
          <div className="hidden md:block h-px bg-slate-800 flex-grow mx-8 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Engineering Algorithm */}
          <div className="group p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-3-3V18m-3-3V18M3 21h18M3 10.5h18M3 6h18m-18 9h18M3 3h18" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">工程驗算法<br /><span className="text-sm font-normal text-slate-500 uppercase tracking-widest">Calculation Algorithms</span></h3>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">✓</span> 解決傳統人工計算緩慢、易錯的問題。
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">✓</span> 自動化生成精確單價與物料清單。
              </li>
            </ul>
          </div>

          {/* Language Processing */}
          <div className="group p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">語言處理算法<br /><span className="text-sm font-normal text-slate-500 uppercase tracking-widest">Language Processing</span></h3>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> 識別並重組特定工種的專業術語。
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span> 將混亂的口語即時轉化為結構化數據。
              </li>
            </ul>
          </div>

          {/* Market Solutions */}
          <div className="group p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-all text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.673 2.673 0 0114 21.75l-7.35-7.35m1.44-1.44a2.673 2.673 0 012.33-2.33l1.44-1.44a9 9 0 00-10.8-10.8l1.44 1.44a2.673 2.673 0 012.33 2.33l1.44 1.44a9 9 0 0010.8 10.8l-1.44-1.44a2.673 2.673 0 01-2.33-2.33z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">痛點解決方案<br /><span className="text-sm font-normal text-slate-500 uppercase tracking-widest">Market Solutions</span></h3>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">✓</span> 消除 10 次溝通僅 1 次精準的效率內耗。
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">✓</span> 建立隨企業經驗成長的數位知識資產。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
