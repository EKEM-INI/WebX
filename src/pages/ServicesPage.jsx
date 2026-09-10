import React from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/cmsData';
import { ServiceCard } from '../components/services/ServiceCard';
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const ServicesPage = () => {
  const { navigateTo, openApplication } = useApp();

  return (
    <div className="py-20 bg-obsidian-950 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Dedicated Services Suite
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            WHAT WE BUILD.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every business has unique commercial requirements. We don't force you into a template—we architect bespoke websites, high-converting stores, and automated infrastructure from the ground up.
          </p>
        </div>

        {/* 6 Full Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Dedicated Page Action Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-display text-white">
              Not sure which service fits your requirements?
            </h3>
            <p className="text-xs text-slate-400">
              Submit a brief through our intake portal and our technical directors will recommend the ideal architecture.
            </p>
          </div>

          <button
            onClick={() => navigateTo('apply')}
            className="px-7 py-3 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Start an Intake Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
