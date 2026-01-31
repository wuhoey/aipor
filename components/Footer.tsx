import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-40 pb-20 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div className="reveal">
            <h2 className="text-5xl font-black mb-10 tracking-tight text-white">{COMPANY_INFO.name}</h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-md">
              我們致力於將最先進的 AI 算法帶入工程現場，為每一個施工細節注入智慧核心。
            </p>
          </div>
          <div className="flex flex-col justify-end space-y-8 reveal">
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <h4 className="text-slate-500 font-bold mb-6 text-sm uppercase tracking-[0.3em]">Corporate Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 text-lg">
                <div>
                  <span className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-widest">統一編號</span>
                  <span className="text-white font-mono">{COMPANY_INFO.vatId}</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-widest">電子郵件</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-widest">公司地址</span>
                  <span className="text-white">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-900 text-slate-700 text-xs font-medium tracking-widest uppercase text-center md:text-left">
          <p>© 2024 {COMPANY_INFO.name} Smart Convergence Enterprise Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;