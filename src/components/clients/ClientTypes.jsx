import React from 'react';
import { CLIENT_SECTORS } from '../../data/cmsData';
import { useApp } from '../../context/AppContext';
import { ArrowUpRight } from 'lucide-react';

export const ClientTypes = () => {
  const { openApplication } = useApp();

  return (
    <section id="clients" className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Sectors & Scale
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            BUILT FOR BUSINESSES.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From high-growth ventures and luxury dining to specialized professional firms and brick-and-mortar retailers, WebX engineers custom digital presence tailored to your revenue model.
          </p>
        </div>

        {/* 10 Clean Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_SECTORS.map((sector) => (
            <div
              key={sector.id}
              onClick={() => openApplication(sector.name)}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                    {sector.name}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {sector.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                Commission Build →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
