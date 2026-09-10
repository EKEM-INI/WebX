import React from 'react';
import { WHY_WEBX_FEATURES } from '../../data/cmsData';
import {
  Layers,
  Zap,
  Cpu,
  Target,
  Smartphone,
  TrendingUp
} from 'lucide-react';

export const WhyWebX = () => {
  const iconMap = {
    Layers: Layers,
    Zap: Zap,
    Cpu: Cpu,
    Target: Target,
    Smartphone: Smartphone,
    TrendingUp: TrendingUp
  };

  return (
    <section id="why-webx" className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            The WebX Standard
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            WHY BUSINESSES CHOOSE WEBX
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Your business deserves better than a generic template. We build digital infrastructure with uncompromised engineering and commercial intent.
          </p>
        </div>

        {/* 6 Clean Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WEBX_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Layers;
            return (
              <div
                key={feature.id}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center text-white mb-6">
                    <IconComponent className="w-5 h-5 text-cyber-cyan" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {feature.desc}
                  </p>

                  <p className="mt-4 text-xs text-slate-500 leading-relaxed pt-4 border-t border-white/[0.06]">
                    {feature.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
