import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/cmsData';
import { Clock, ChevronRight } from 'lucide-react';

export const ProcessTimeline = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Delivery Pipeline
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            FROM IDEA TO ONLINE.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A disciplined, transparent engineering pipeline designed to launch your bespoke digital flagship quickly without sacrificing craftsmanship.
          </p>
        </div>

        {/* Minimalist Horizontal Step Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.06]">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === selectedStep;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full transition-all whitespace-nowrap text-xs font-mono ${
                  isActive
                    ? 'bg-white text-obsidian-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{step.step}</span>
                <span className="font-sans font-medium">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Stage Detail */}
        <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {PROCESS_STEPS[selectedStep].headline}
                </span>
                <span className="px-3 py-0.5 rounded-full bg-white/[0.04] text-xs font-mono text-slate-400 border border-white/[0.06]">
                  {PROCESS_STEPS[selectedStep].duration}
                </span>
              </div>

              <p className="text-sm text-slate-300 italic font-display">
                &ldquo;{PROCESS_STEPS[selectedStep].tagline}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {PROCESS_STEPS[selectedStep].desc}
              </p>

              <div className="pt-2 flex items-center gap-3">
                {selectedStep < PROCESS_STEPS.length - 1 && (
                  <button
                    onClick={() => setSelectedStep(prev => prev + 1)}
                    className="px-4 py-2 rounded-full bg-white text-obsidian-950 text-xs font-semibold hover:bg-slate-200 transition-all flex items-center gap-1"
                  >
                    <span>Next: {PROCESS_STEPS[selectedStep + 1].title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-obsidian-950/70 border border-white/[0.06] space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Phase Deliverables
              </div>

              <ul className="space-y-2.5">
                {PROCESS_STEPS[selectedStep].deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-cyber-cyan text-sm leading-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
