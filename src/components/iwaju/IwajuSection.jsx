import React from 'react';
import { useApp } from '../../context/AppContext';
import { IWAJU_DETAILS } from '../../data/cmsData';
import { ArrowRight } from 'lucide-react';

export const IwajuSection = () => {
  const { openIwaju } = useApp();

  return (
    <section className="relative py-24 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
              Ecosystem & Parent Company
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              WEBX IS BUILT BY <br />
              <span className="text-gradient-silver">IWAJU.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {IWAJU_DETAILS.copy}
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {IWAJU_DETAILS.subtext}
            </p>

            <div className="pt-2">
              <button
                onClick={openIwaju}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.12] text-xs font-semibold text-white hover:bg-white hover:text-obsidian-950 transition-all duration-200"
              >
                <span>Explore Iwaju</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Mission Points */}
          <div className="lg:col-span-6 space-y-3">
            {IWAJU_DETAILS.missionPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1.5"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  0{idx + 1} — {point.title}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {point.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
