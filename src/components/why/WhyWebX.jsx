import React from 'react';
import { WHY_WEBX_FEATURES } from '../../data/cmsData';
import { SectionBadge } from '../common/Badge';
import {
  Layers,
  Zap,
  Cpu,
  Target,
  Smartphone,
  TrendingUp,
  CheckCircle,
  ShieldCheck
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
    <section id="why-webx" className="relative py-28 bg-obsidian-950 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dots-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyber-cyan/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="cyan">
            The WebX Standard
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            WHY BUSINESSES CHOOSE WEBX
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your business deserves better than a generic template. We build digital infrastructure with uncompromised engineering and commercial intent.
          </p>
        </div>

        {/* 6 Premium Feature Blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_WEBX_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Layers;
            return (
              <div
                key={feature.id}
                className="relative rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-cyber-cyan/40 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-xl"
              >
                {/* Tech corner tick */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-cyan/40 rounded-tr-2xl pointer-events-none" />

                <div>
                  {/* Icon with glowing box */}
                  <div className="w-12 h-12 rounded-xl bg-obsidian-950 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan group-hover:shadow-glow-cyan/50 transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                    {feature.title}
                  </h3>

                  {/* Core Statement */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-medium">
                    {feature.desc}
                  </p>

                  {/* Operational Detail */}
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed pt-3 border-t border-white/5">
                    {feature.detail}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <CheckCircle className="w-3.5 h-3.5 text-cyber-cyan/70" />
                  <span>Standard on every build</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
