import React, { useState } from 'react';
import { TECH_RADAR } from '../../data/cmsData';
import { SectionBadge } from '../common/Badge';
import {
  Cpu,
  Code2,
  Palette,
  Workflow,
  CloudLightning,
  BarChart3,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const AiTechSection = () => {
  const [activeTech, setActiveTech] = useState(0);

  const iconMap = {
    ai: Cpu,
    code: Code2,
    design: Palette,
    automation: Workflow,
    deployment: CloudLightning,
    analytics: BarChart3
  };

  return (
    <section id="technology" className="relative py-28 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyber-cyan/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-violet/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="cyan">
            Intelligent Infrastructure
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            THE WEB IS CHANGING. <br />
            <span className="text-gradient-cyan">SO ARE WE.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We combine modern development with AI, automation, design systems, and intelligent workflows where they provide real value.
          </p>

          <div className="pt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-900 border border-cyber-cyan/20 text-xs font-mono text-cyber-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Human creativity + modern technology + intelligent automation.</span>
          </div>
        </div>

        {/* Interactive 6-Pillar Radar Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TECH_RADAR.map((item, idx) => {
            const Icon = iconMap[item.id] || Cpu;
            const isActive = idx === activeTech;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTech(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-glow-cyan/25 scale-[1.03]'
                    : 'bg-obsidian-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-all ${
                    isActive
                      ? 'bg-cyber-cyan text-obsidian-950'
                      : 'bg-obsidian-950 text-slate-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-xs sm:text-sm font-display">{item.name}</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">0{idx + 1}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Technology Deep-Dive Panel */}
        <div className="mt-8 rounded-2xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-semibold">
                Technology Pillar #{activeTech + 1}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                {TECH_RADAR[activeTech].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {TECH_RADAR[activeTech].desc}
              </p>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 text-xs font-mono text-slate-400">
                ⚡ Pragmatic engineering note: We never shoehorn AI where it doesn't belong. We deploy automation to save real human hours and increase revenue conversion.
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-obsidian-950 border border-white/5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
                Engineered Capabilities
              </div>

              <ul className="space-y-2.5">
                {TECH_RADAR[activeTech].features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
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
