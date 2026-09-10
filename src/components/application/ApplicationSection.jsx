import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionBadge } from '../common/Badge';
import { ArrowRight, Sparkles, ShoppingBag, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ApplicationSection = () => {
  const { openApplication } = useApp();

  return (
    <section className="relative py-28 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] bg-cyber-cyan/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-obsidian-900/90 border border-cyber-cyan/30 p-8 sm:p-14 lg:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Subtle grid in container */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* Badge */}
          <div className="flex justify-center">
            <SectionBadge color="cyan">
              High-Converting Intake
            </SectionBadge>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
            YOUR BUSINESS. <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">OUR NEXT BUILD.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready for a website that actually represents your business? Tell us what you're building, and we'll engineer a tailored digital architecture proposal.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openApplication('Business Website')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-semibold text-sm text-obsidian-950 bg-cyber-cyan hover:bg-white transition-all duration-300 shadow-glow-cyan/50 hover:shadow-glow-cyan flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <Globe2 className="w-4 h-4 text-obsidian-950" />
              <span>Apply for a Website</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => openApplication('Online Store')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-semibold text-sm text-white bg-obsidian-950 border border-cyber-cyan/40 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <ShoppingBag className="w-4 h-4 text-cyber-cyan" />
              <span>Apply for a Store</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Guarantees */}
          <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
              <span>Reviewed in 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
              <span>Fixed-Price Scope</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
              <span>Zero Obligation Consultation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
