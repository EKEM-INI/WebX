import React, { useState } from 'react';
import { TECH_RADAR } from '../../data/cmsData';

export const AiTechSection = () => {
  const [activeTech, setActiveTech] = useState(0);

  return (
    <section id="technology" className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Intelligent Infrastructure
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            THE WEB IS CHANGING. <br />
            <span className="text-gradient-silver">SO ARE WE.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We combine modern development with AI, automation, design systems, and intelligent workflows where they provide real value.
          </p>

          <p className="text-xs font-mono text-slate-500">
            Human creativity + modern technology + intelligent automation.
          </p>
        </div>

        {/* Minimal Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.06]">
          {TECH_RADAR.map((item, idx) => {
            const isActive = idx === activeTech;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTech(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-obsidian-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>0{idx + 1}</span> <span className="ml-1 font-sans">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Technology Minimal Panel */}
        <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Pillar #{activeTech + 1}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {TECH_RADAR[activeTech].title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {TECH_RADAR[activeTech].desc}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-obsidian-950/70 border border-white/[0.06] space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Capabilities
              </div>

              <ul className="space-y-2">
                {TECH_RADAR[activeTech].features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyber-cyan text-sm leading-none mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
