import React from 'react';
import { SERVICE_TARGETS } from '../constants.tsx';

const ServiceDisplay: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tighter">我們的服務對象</h2>
          <p className="text-slate-500 text-2xl font-light max-w-3xl">
            針對不同領域的專業需求，提供全方位的 AI 數位轉型方案。
          </p>
        </div>

        <div className="space-y-12">
          {SERVICE_TARGETS.map((target) => (
            <div key={target.id} className="group p-12 bg-slate-900/50 rounded-[2rem] border border-slate-800 flex flex-col md:flex-row gap-12 items-start transition-all hover:bg-slate-900 hover:border-slate-700">
              <div className="md:w-1/3">
                <h3 className="text-3xl font-black text-white mb-4">{target.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {target.subcategories.map((sub, i) => (
                    <span key={i} className="px-4 py-1 bg-slate-800 text-slate-400 rounded-full text-sm font-bold border border-slate-700">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-2xl text-slate-300 font-light leading-relaxed mb-8">
                  {target.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                  <div>
                    <h4 className="text-cyan-500 font-black mb-2 uppercase tracking-widest text-xs">驗算法應用</h4>
                    <p className="text-slate-500 text-sm">客製化處理高頻率碎數，將報價邏輯自動化。</p>
                  </div>
                  <div>
                    <h4 className="text-blue-500 font-black mb-2 uppercase tracking-widest text-xs">語言算法應用</h4>
                    <p className="text-slate-500 text-sm">訓練 AI 學習您的工種術語與現場專業眉角。</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDisplay;