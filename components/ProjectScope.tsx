import React from 'react';
import { PROJECT_SCOPE } from '../constants.tsx';

const ProjectScope: React.FC = () => {
  return (
    <section className="py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
          <span className="text-cyan-500 font-black uppercase tracking-[0.3em] text-xs">Development Scope</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-24 text-white tracking-tighter">項目開發範圍</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_SCOPE.map((item, idx) => (
            <div key={idx} className="group p-12 bg-white/5 hover:bg-white/10 rounded-[3rem] transition-all border border-white/5 hover:border-cyan-500/20 backdrop-blur-sm">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 text-white group-hover:text-cyan-400 transition-colors tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-xl leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectScope;