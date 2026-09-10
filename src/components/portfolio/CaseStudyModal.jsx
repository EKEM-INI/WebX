import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Monitor,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Globe
} from 'lucide-react';

export const CaseStudyModal = () => {
  const { activeCaseStudy, closeCaseStudy, openApplication } = useApp();
  const [deviceView, setDeviceView] = useState('desktop'); // 'desktop' | 'mobile'

  if (!activeCaseStudy) return null;

  const handleBuildSimilar = () => {
    const service = activeCaseStudy.servicesProvided[0] || 'Business Website';
    closeCaseStudy();
    openApplication(service);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-obsidian-950/90 backdrop-blur-2xl animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl my-auto rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-obsidian-950/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-[10px] font-mono text-cyber-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
              <span>{activeCaseStudy.category}</span>
            </div>
            <span className="text-sm font-semibold text-white truncate">
              {activeCaseStudy.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport Switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 rounded-lg bg-obsidian-950 border border-white/5">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  deviceView === 'desktop'
                    ? 'bg-cyber-cyan text-obsidian-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  deviceView === 'mobile'
                    ? 'bg-cyber-cyan text-obsidian-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeCaseStudy}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
          
          {/* Interactive Simulated Device Mockup */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="uppercase tracking-widest">High-Fidelity Interface View</span>
              <span>Rendered on WebX Edge Engine</span>
            </div>

            <div className="relative rounded-2xl bg-obsidian-950 border border-white/10 p-3 sm:p-5 flex justify-center items-center overflow-hidden">
              
              {deviceView === 'desktop' ? (
                /* Desktop Mockup Frame */
                <div className="w-full rounded-xl border border-white/10 bg-obsidian-900 overflow-hidden shadow-2xl">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-obsidian-950 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-6 py-1 rounded-md bg-obsidian-900 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-cyber-cyan" />
                      <span>https://{activeCaseStudy.slug}.com</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">SSL 256-BIT</span>
                  </div>

                  {/* Browser Content Image */}
                  <div className="aspect-[16/9] w-full relative overflow-hidden">
                    <img
                      src={activeCaseStudy.heroImage}
                      alt={activeCaseStudy.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              ) : (
                /* Mobile Mockup Frame */
                <div className="w-[300px] rounded-[36px] border-4 border-obsidian-700 bg-obsidian-950 p-2 shadow-2xl">
                  <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-obsidian-900">
                    <div className="h-6 bg-obsidian-950 flex items-center justify-center">
                      <div className="w-20 h-3 rounded-full bg-obsidian-800" />
                    </div>
                    <div className="aspect-[9/18] w-full">
                      <img
                        src={activeCaseStudy.secondaryImage || activeCaseStudy.heroImage}
                        alt={`${activeCaseStudy.title} mobile`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar if Available */}
          {activeCaseStudy.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-obsidian-950 border border-cyber-cyan/30 text-center">
                <div className="text-2xl sm:text-3xl font-bold font-display text-cyber-cyan">
                  {activeCaseStudy.stats.metric1}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {activeCaseStudy.stats.label1}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activeCaseStudy.stats.metric2}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {activeCaseStudy.stats.label2}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-obsidian-950 border border-emerald-500/30 text-center">
                <div className="text-2xl sm:text-3xl font-bold font-display text-emerald-400">
                  {activeCaseStudy.stats.metric3}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {activeCaseStudy.stats.label3}
                </div>
              </div>
            </div>
          )}

          {/* Case Study Detailed Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Overview, Challenge & What WebX Built */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-semibold mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCaseStudy.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
                  The Challenge
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-obsidian-950/60 p-4 rounded-xl border border-white/5">
                  {activeCaseStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-semibold mb-2">
                  What WebX Built
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCaseStudy.whatWebXBuilt}
                </p>
              </div>

              {/* Verified Results */}
              {activeCaseStudy.verifiedOutcome && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>VERIFIED OUTCOME</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeCaseStudy.verifiedOutcome}
                  </p>
                </div>
              )}
            </div>

            {/* Right: Key Features & Technologies */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Key Features */}
              <div className="p-5 rounded-xl bg-obsidian-950 border border-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                  Key Engineered Features
                </h4>
                <ul className="space-y-2.5">
                  {activeCaseStudy.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools Used */}
              <div className="p-5 rounded-xl bg-obsidian-950 border border-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                  Technologies & Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-obsidian-900 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client & Metadata */}
              <div className="p-4 rounded-xl bg-obsidian-950/40 border border-white/5 text-xs font-mono text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span>Client / Brand:</span>
                  <span className="text-white font-medium">{activeCaseStudy.client}</span>
                </div>
                <div className="flex justify-between">
                  <span>Industry:</span>
                  <span className="text-white font-medium">{activeCaseStudy.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span>Year Built:</span>
                  <span className="text-white font-medium">{activeCaseStudy.year}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-6 border-t border-white/10 bg-obsidian-950 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs font-mono text-slate-400 text-center sm:text-left">
            Ready to upgrade your business with this level of craft?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={closeCaseStudy}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleBuildSimilar}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-cyber-cyan text-obsidian-950 font-semibold text-xs hover:bg-white transition-all shadow-glow-cyan flex items-center justify-center gap-2"
            >
              <span>Build Similar Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
