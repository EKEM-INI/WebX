import React from 'react';
import { useApp } from '../../context/AppContext';
import { TRUST_STATEMENT } from '../../data/cmsData';
import { CheckCircle2 } from 'lucide-react';

export const TrustCredibility = () => {
  const { metrics, toggleAdmin } = useApp();

  return (
    <section className="relative py-24 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-16">
        
        {/* Core Statement Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            <span>Built on Experience</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-snug">
            &ldquo;{TRUST_STATEMENT.quote}&rdquo;
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {TRUST_STATEMENT.lead}
          </p>
        </div>

        {/* Minimalist 4-Column Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/[0.06]">
          {metrics.map((metric, idx) => (
            <div
              key={metric.id || idx}
              className="space-y-2 group"
            >
              <div className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight group-hover:text-cyber-cyan transition-colors">
                {metric.value}
              </div>

              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {metric.label}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
