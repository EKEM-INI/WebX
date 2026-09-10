import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/cmsData';
import { SectionBadge } from '../common/Badge';
import { CheckCircle2, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export const ProcessTimeline = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyber-violet/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="violet">
            Methodology & Delivery
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            FROM IDEA TO ONLINE.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A disciplined, transparent engineering pipeline designed to launch your bespoke digital flagship quickly without sacrificing craftsmanship.
          </p>
        </div>

        {/* Interactive Step Switcher Tabs (Horizontal Navigation) */}
        <div className="mt-14 flex items-center justify-between gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === selectedStep;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all whitespace-nowrap text-left ${
                  isActive
                    ? 'bg-cyber-cyan/10 border border-cyber-cyan text-white shadow-glow-cyan/20'
                    : 'bg-obsidian-900/50 border border-white/5 text-slate-400 hover:text-white hover:bg-obsidian-850'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    isActive
                      ? 'bg-cyber-cyan text-obsidian-950'
                      : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-sm font-semibold font-display">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase Card */}
        <div className="mt-10 rounded-2xl bg-obsidian-900/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black font-display text-cyber-cyan">
                  {PROCESS_STEPS[selectedStep].headline}
                </span>
                <span className="px-3 py-1 rounded-full bg-obsidian-950 border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>{PROCESS_STEPS[selectedStep].duration}</span>
                </span>
              </div>

              <h4 className="text-lg font-medium text-slate-200 italic">
                &ldquo;{PROCESS_STEPS[selectedStep].tagline}&rdquo;
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {PROCESS_STEPS[selectedStep].desc}
              </p>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-4">
                {selectedStep > 0 && (
                  <button
                    onClick={() => setSelectedStep(prev => prev - 1)}
                    className="px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hover:bg-white/5 transition-colors"
                  >
                    ← Previous Step
                  </button>
                )}
                {selectedStep < PROCESS_STEPS.length - 1 ? (
                  <button
                    onClick={() => setSelectedStep(prev => prev + 1)}
                    className="px-5 py-2 rounded-lg bg-cyber-cyan text-obsidian-950 text-xs font-semibold hover:bg-white transition-all shadow-glow-cyan flex items-center gap-1.5"
                  >
                    <span>Next: {PROCESS_STEPS[selectedStep + 1].title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Ready for Global Edge Launch</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right: Deliverables List */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-obsidian-950 border border-white/5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-cyber-cyan font-semibold">
                Phase Deliverables
              </div>

              <ul className="space-y-3">
                {PROCESS_STEPS[selectedStep].deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                Guaranteed milestone sign-off prior to next phase progression.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
