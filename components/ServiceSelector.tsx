
import React, { useState } from 'react';
import { SERVICE_TARGETS } from '../constants';

const ServiceSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState(SERVICE_TARGETS[0].id);

  const currentService = SERVICE_TARGETS.find(s => s.id === selectedId) || SERVICE_TARGETS[0];

  return (
    <section id="services" className="py-32 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">我們的服務對象</h2>
          <p className="text-slate-400 text-xl font-light">
            針對不同領域的專業需求，量身打造專屬 AI 應用。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Custom Selector / Dropdown UI */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-2">
              <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 px-2">
                請選擇您的產業領域
              </label>
              {SERVICE_TARGETS.map((target) => (
                <button
                  key={target.id}
                  onClick={() => setSelectedId(target.id)}
                  className={`w-full text-left px-8 py-6 rounded-2xl transition-all border-2 flex items-center justify-between group ${
                    selectedId === target.id
                      ? 'bg-white border-white text-slate-950 scale-105 shadow-2xl shadow-white/10'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xl font-bold">{target.title}</span>
                  <span className={`transition-transform duration-300 ${selectedId === target.id ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-2/3 bg-slate-900 border border-slate-800 rounded-[3rem] p-12 lg:p-16 min-h-[500px] flex flex-col justify-center">
            <div className="animate-in fade-in duration-700">
              <h3 className="text-4xl lg:text-5xl font-black mb-8 text-white">{currentService.title}</h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {currentService.subcategories.map((sub, idx) => (
                  <span key={idx} className="px-5 py-2 bg-slate-800 text-cyan-400 rounded-full font-bold border border-slate-700">
                    {sub}
                  </span>
                ))}
              </div>
              <p className="text-2xl text-slate-300 leading-relaxed font-light mb-12">
                {currentService.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800 pt-12">
                <div>
                  <h4 className="text-cyan-500 font-bold mb-3 uppercase tracking-wider text-sm">驗算法核心</h4>
                  <p className="text-slate-400">客製化處理高頻率碎數，將報價邏輯自動化。</p>
                </div>
                <div>
                  <h4 className="text-blue-500 font-bold mb-3 uppercase tracking-wider text-sm">語言算法核心</h4>
                  <p className="text-slate-400">封閉式隱私環境，訓練 AI 學習您的工種術語。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;
