import React from 'react';
import { useApp } from '../../context/AppContext';
import { TRUST_STATEMENT } from '../../data/cmsData';
import { SectionBadge } from '../common/Badge';
import { GlassCard } from '../common/GlassCard';
import { ShieldCheck, Layers, Award, Sparkles, CheckCircle } from 'lucide-react';

export const TrustCredibility = () => {
  const { metrics, toggleAdmin } = useApp();

  return (
    <section className="relative py-24 bg-obsidian-950 border-y border-white/5 overflow-hidden">
      {/* Background subtle mesh grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="cyan">
            {TRUST_STATEMENT.badge}
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            {TRUST_STATEMENT.headline}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {TRUST_STATEMENT.lead}
          </p>
        </div>

        {/* Central Bold Statement Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-cyber-cyan/30 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute -right-12 -top-12 w-44 h-44 bg-cyber-cyan/10 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -left-12 -bottom-12 w-44 h-44 bg-cyber-violet/10 blur-3xl pointer-events-none rounded-full" />
          
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white italic tracking-wide">
            &ldquo;{TRUST_STATEMENT.quote}&rdquo;
          </blockquote>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
            <span>The WebX Operational Thesis</span>
          </div>
        </div>

        {/* Modular Metrics Grid (Configurable & CMS-Ready) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={metric.id || idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1 shadow-lg"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="w-16 h-16 bg-cyber-cyan/10 group-hover:bg-cyber-cyan/20 transition-colors transform rotate-45 translate-x-8 -translate-y-8" />
              </div>

              <div className="flex items-baseline justify-between mb-2">
                <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight group-hover:text-cyber-cyan transition-colors">
                  {metric.value}
                </span>
                {metric.verified && (
                  <span
                    title="Verified Metric in WebX CMS"
                    className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>

              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                {metric.label}
              </h3>

              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* CMS Data Notice / Easy Update Trigger */}
        <div className="mt-8 text-center">
          <button
            onClick={toggleAdmin}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyber-cyan transition-colors"
          >
            <span>[WebX Admin: Update Verified Metrics & Case Studies]</span>
          </button>
        </div>

      </div>
    </section>
  );
};
