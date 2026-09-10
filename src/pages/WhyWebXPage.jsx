import React from 'react';
import { useApp } from '../context/AppContext';
import { WHY_WEBX_FEATURES } from '../data/cmsData';
import { Layers, Zap, Cpu, Target, Smartphone, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';

export const WhyWebXPage = () => {
  const { navigateTo } = useApp();

  const iconMap = {
    Layers: Layers,
    Zap: Zap,
    Cpu: Cpu,
    Target: Target,
    Smartphone: Smartphone,
    TrendingUp: TrendingUp
  };

  return (
    <div className="py-20 bg-obsidian-950 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            The WebX Standard
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            WHY BUSINESSES CHOOSE WEBX.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your business deserves better than an off-the-shelf template. We engineer websites and online stores as long-term digital infrastructure, built to convert visitors into customers.
          </p>
        </div>

        {/* 6 Core Advantages Detailed Grid */}
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

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
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

        {/* Operational Guarantees */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Our Standard Commitment on Every Build
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-1">
              <div className="font-semibold text-white">Sub-Second Load Time</div>
              <div className="text-slate-500">Every page is optimized for sub-second performance across mobile and desktop.</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-white">Zero Template Lock-in</div>
              <div className="text-slate-500">Custom source code built specifically for your brand that you own 100%.</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-white">Conversion Engineering</div>
              <div className="text-slate-500">UX psychology engineered to guide visitors smoothly toward high-value action.</div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => navigateTo('apply')}
              className="px-6 py-2.5 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all flex items-center gap-1.5"
            >
              <span>Build With WebX</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
