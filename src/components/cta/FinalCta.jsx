import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Globe, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

export const FinalCta = () => {
  const { openApplication } = useApp();

  return (
    <section className="relative py-32 bg-obsidian-950 border-t border-white/5 overflow-hidden text-center">
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-radial-at-t from-cyber-cyan/15 via-cyber-violet/10 to-transparent blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Futuristic Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-900 border border-cyber-cyan/30 text-xs font-mono text-slate-300 shadow-glow-cyan/20">
          <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
          <span>Now Accepting Commissions for 2026</span>
        </div>

        {/* Huge Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white leading-[1.08]">
          YOUR NEXT WEBSITE <br />
          <span className="text-gradient-cyan">STARTS HERE.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let's turn your business into a digital experience people remember. Sub-second performance, bespoke design, and built for growth.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openApplication('Business Website')}
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-sm text-obsidian-950 bg-cyber-cyan hover:bg-white transition-all duration-300 shadow-glow-cyan/60 hover:shadow-glow-cyan flex items-center justify-center gap-3 group active:scale-[0.98]"
          >
            <Globe className="w-4 h-4 text-obsidian-950" />
            <span>Build My Website</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => openApplication('Online Store')}
            className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-sm text-white bg-obsidian-900 border border-cyber-cyan/40 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <ShoppingBag className="w-4 h-4 text-cyber-cyan" />
            <span>Build My Store</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mini Trust Footer */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>WebX by Iwaju</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Dedicated Engineering Team</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Production SLA Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};
