import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight } from 'lucide-react';

export const ApplicationSection = () => {
  const { openApplication } = useApp();

  return (
    <section className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
          Client Intake
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
          YOUR BUSINESS. <br />
          <span className="text-gradient-silver">OUR NEXT BUILD.</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Ready for a website that actually represents your business? Tell us what you're building, and we'll engineer a tailored digital architecture proposal.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openApplication('Business Website')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-obsidian-950 bg-white hover:bg-slate-200 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Apply for a Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => openApplication('Online Store')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-white bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Apply for a Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
