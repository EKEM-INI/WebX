import React from 'react';
import { useApp } from '../../context/AppContext';
import { IWAJU_DETAILS } from '../../data/cmsData';
import { SectionBadge } from '../common/Badge';
import { ArrowRight, Compass, ShieldCheck, Globe, Cpu } from 'lucide-react';

export const IwajuSection = () => {
  const { openIwaju } = useApp();

  return (
    <section className="relative py-24 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyber-violet/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-obsidian-900/90 via-obsidian-850/80 to-obsidian-900/90 border border-cyber-violet/30 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle watermarked Iwaju logo mark */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" />
              <path d="M30 70L50 30L70 70Z" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionBadge color="violet">
                Parent Company & Ecosystem
              </SectionBadge>

              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
                WEBX IS BUILT BY <br />
                <span className="text-gradient-violet">IWAJU.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {IWAJU_DETAILS.copy}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {IWAJU_DETAILS.subtext}
              </p>

              <div className="pt-2">
                <button
                  onClick={openIwaju}
                  className="px-6 py-3.5 rounded-xl bg-cyber-violet text-white font-semibold text-xs hover:bg-white hover:text-obsidian-950 transition-all duration-300 shadow-glow-violet/40 hover:shadow-glow-violet flex items-center gap-2 group"
                >
                  <span>Explore Iwaju</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-5 space-y-4">
              {IWAJU_DETAILS.missionPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-obsidian-950/70 border border-white/5 space-y-1.5 transition-all hover:border-cyber-violet/40"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-cyber-violet font-semibold">
                    0{idx + 1} — {point.title}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {point.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
