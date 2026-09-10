import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const FinalCta = () => {
  const { openApplication } = useApp();

  return (
    <section className="relative py-32 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden text-center">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyber-cyan/[0.05] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Now Taking Commissions
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.08]">
          YOUR NEXT WEBSITE <br />
          <span className="text-gradient-silver">STARTS HERE.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          Let's turn your business into a digital experience people remember. Sub-second performance, bespoke architecture, and built for growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => openApplication('Business Website')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-obsidian-950 bg-white hover:bg-slate-200 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Build My Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => openApplication('Online Store')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-white bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Build My Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
