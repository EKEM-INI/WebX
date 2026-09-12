import React from 'react';
import { useApp } from '../context/AppContext';
import { IWAJU_DETAILS } from '../data/cmsData';
import { ArrowRight, Globe, Shield, Cpu, ExternalLink } from 'lucide-react';

export const IwajuPage = () => {
  const { navigateTo } = useApp();

  return (
    <div className="py-20 bg-obsidian-950 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Parent Company & Mission
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            WEBX IS BUILT BY <br />
            <span className="text-gradient-silver">IWAJU.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {IWAJU_DETAILS.copy}
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            {IWAJU_DETAILS.subtext}
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IWAJU_DETAILS.missionPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Pillar 0{idx + 1}
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ecosystem Overview with Brand Logo */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#06042B]/90 border border-sky-400/25 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display text-white">
                The Iwaju Infrastructure Vision
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Iwaju is a pan-African technology group dedicated to building foundational digital systems across emerging markets. WebX operates as the flagship digital presence arm—creating the websites of your dreams and powering online growth for ambitious companies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300 pt-4 border-t border-white/[0.08]">
              <div>Headquarters: Lagos, Nigeria • Nairobi, Kenya</div>
              <div>Delivery: Pan-African & Global Scale</div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('apply')}
                className="px-7 py-3 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all inline-flex items-center gap-2"
              >
                <span>Build With WebX by Iwaju</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group max-w-[260px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <img
                src="/webx-logo-full.png"
                alt="WebX by Iwaju — Official Logo"
                className="relative rounded-xl border border-sky-400/30 shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
