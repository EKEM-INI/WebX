import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { BRAND_CONFIG } from '../../data/cmsData';
import { PoweredByIwajuBadge } from '../common/Badge';
import { NetworkCanvas } from './NetworkCanvas';
import { ArrowRight, ArrowDown, Code2, Globe, Cpu, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const { openApplication, openIwaju } = useApp();
  const [pipelineStep, setPipelineStep] = useState(0);

  const pipelineStages = [
    { label: "Architecture", status: "Compiled", code: "Next.js 15 • Edge Node" },
    { label: "Design System", status: "Synchronized", code: "Figma Tokens • Tailwind v3.4" },
    { label: "AI Automation", status: "Active", code: "Lead Assistant • 24/7 Agent" },
    { label: "Global Edge", status: "Deployed", code: "300+ PoPs • 0.35s TTFB" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % pipelineStages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [pipelineStages.length]);

  const handleScrollToWork = () => {
    const workSection = document.querySelector('#work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950">
      {/* Background canvas */}
      <NetworkCanvas />

      {/* Atmospheric ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/10 blur-[130px] rounded-full pointer-events-none animate-orb-1" />
      <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-cyber-violet/10 blur-[150px] rounded-full pointer-events-none animate-orb-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Powered by Iwaju badge */}
            <div className="flex justify-center lg:justify-start">
              <PoweredByIwajuBadge onClick={openIwaju} />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
              WE BUILD THE WEB <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">
                FOR WHAT'S NEXT.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {BRAND_CONFIG.supportingText}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => openApplication('Business Website')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-obsidian-950 bg-cyber-cyan hover:bg-white transition-all duration-300 shadow-glow-cyan/50 hover:shadow-glow-cyan flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                <span>Build With WebX</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToWork}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-medium text-sm text-slate-200 bg-obsidian-900/80 border border-white/10 hover:border-cyber-cyan/40 hover:text-white transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 hover:bg-white/5"
              >
                <span>View Our Work</span>
                <ArrowDown className="w-4 h-4 text-cyber-cyan" />
              </button>
            </div>

            {/* Quick Micro-Ticker */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Zero Templates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Sub-Second Speed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>AI + Automation Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated Live Digital Infrastructure Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-obsidian-900/80 border border-cyber-cyan/20 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl shadow-black/80">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300">webx-pipeline.sh</span>
                </div>
                <div className="flex items-center gap-2 text-cyber-cyan">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                  <span>LIVE DEPLOY</span>
                </div>
              </div>

              {/* Pipeline Real-time Stepper */}
              <div className="py-5 space-y-4">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  Automated Digital Infrastructure Pipeline
                </div>

                <div className="space-y-2.5">
                  {pipelineStages.map((stage, idx) => {
                    const isActive = idx === pipelineStep;
                    const isDone = idx < pipelineStep;
                    return (
                      <div
                        key={stage.label}
                        className={`p-3 rounded-xl border transition-all duration-300 font-mono text-xs flex items-center justify-between ${
                          isActive
                            ? 'bg-cyber-cyan/10 border-cyber-cyan text-white shadow-glow-cyan/20'
                            : isDone
                            ? 'bg-obsidian-850/60 border-emerald-500/30 text-slate-300'
                            : 'bg-obsidian-950/40 border-white/5 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isActive
                                ? 'bg-cyber-cyan text-obsidian-950'
                                : isDone
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-white/5 text-slate-600'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <div>
                            <div className="font-semibold text-slate-200">{stage.label}</div>
                            <div className="text-[10px] text-slate-400">{stage.code}</div>
                          </div>
                        </div>

                        <span
                          className={`text-[11px] px-2 py-0.5 rounded ${
                            isActive
                              ? 'bg-cyber-cyan/20 text-cyber-cyan'
                              : isDone
                              ? 'text-emerald-400'
                              : 'text-slate-600'
                          }`}
                        >
                          {isActive ? 'Processing...' : stage.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mini Terminal Output Box */}
              <div className="rounded-lg bg-obsidian-950 p-3 font-mono text-[11px] text-slate-400 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-slate-500 text-[10px]">
                  <span>DEPLOYMENT METRICS</span>
                  <span className="text-emerald-400">LATENCY: 14MS</span>
                </div>
                <div className="text-cyber-cyan truncate">
                  &gt; webx deploy --client=&quot;production&quot; --mode=ultra-fast
                </div>
                <div className="text-slate-300 truncate">
                  ✔ SSL verified • CDN propagation 100% • AI assistant ready
                </div>
              </div>

              {/* Floating Technology Badges */}
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-obsidian-900 border border-cyber-cyan/30 text-[10px] font-mono text-cyber-cyan shadow-xl flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Downtime SLA</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down arrow anchor */}
      <button
        onClick={handleScrollToWork}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-500 hover:text-cyber-cyan transition-colors hidden md:block animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};
