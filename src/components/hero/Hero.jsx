import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BRAND_CONFIG } from '../../data/cmsData';
import { NetworkCanvas } from './NetworkCanvas';
import { ArrowRight, ArrowDown, Globe, Sparkles, ExternalLink } from 'lucide-react';

export const Hero = () => {
  const { openApplication, openCaseStudy, projects, navigateTo } = useApp();
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const previewShowcases = [
    {
      title: "Aurora Reserve",
      tag: "Culinary & Hospitality",
      url: "aurora-reserve.com",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      stat: "+240% Direct Bookings",
      projectId: "aurora-culinary"
    },
    {
      title: "Apex Horizon Capital",
      tag: "Private Equity",
      url: "apexcapital.africa",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      stat: "$180M+ Assets Represented",
      projectId: "apex-capital"
    },
    {
      title: "Lumina Botanics",
      tag: "Headless E-commerce",
      url: "luminabotanics.co",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      stat: "3.8% Conversion Rate",
      projectId: "lumina-botanics"
    }
  ];

  const handlePreviewClick = (projId) => {
    const proj = projects.find(p => p.id === projId);
    if (proj) {
      openCaseStudy(proj);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950">
      {/* Delicate background canvas */}
      <NetworkCanvas />

      {/* Atmospheric breathing soft aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-b from-cyber-cyan/[0.08] to-cyber-violet/[0.04] blur-[160px] pointer-events-none rounded-full animate-ambient" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-6">
        
        {/* Brand Sphere Emblem */}
        <div className="flex justify-center mb-1">
          <div className="relative group cursor-pointer" onClick={() => navigateTo('services')}>
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/40 via-cyan-400/30 to-blue-600/40 rounded-full blur-2xl group-hover:blur-3xl transition-all opacity-80 animate-pulse" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#06042B] border border-sky-400/40 flex items-center justify-center overflow-hidden shadow-[0_0_35px_rgba(26,181,227,0.45)]">
              <img
                src="/webx-sphere.png"
                alt="WebX Brand Sphere"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Official Slogan Badge & Iwaju Affiliation */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06042B]/90 border border-sky-400/30 text-xs font-mono text-sky-300 backdrop-blur-md shadow-[0_0_15px_rgba(26,181,227,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase font-semibold">
              Create The Website Of Your Dreams
            </span>
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 backdrop-blur-md transition-colors hover:border-white/20 cursor-pointer"
            onClick={() => navigateTo('about-iwaju')}
          >
            <span>by</span>
            <span className="font-semibold text-white">Iwaju</span>
          </div>
        </div>

        {/* Clean, Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          CREATE THE WEBSITE <br />
          <span className="text-gradient-cyan">OF YOUR DREAMS.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {BRAND_CONFIG.supportingText}
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigateTo('apply')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-obsidian-950 bg-white hover:bg-slate-200 transition-all duration-200 shadow-lg shadow-white/5 active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            <span>Build With WebX</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => navigateTo('work')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-xs uppercase tracking-wider text-slate-300 bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>View Our Work</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Minimalist Interactive Showcase Frame */}
        <div className="pt-8 max-w-4xl mx-auto">
          {/* Showcase Tabs */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {previewShowcases.map((showcase, idx) => (
              <button
                key={showcase.title}
                onClick={() => setActivePreviewIndex(idx)}
                className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all ${
                  idx === activePreviewIndex
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {showcase.title}
              </button>
            ))}
          </div>

          {/* Minimalist Device Viewport */}
          <div
            onClick={() => handlePreviewClick(previewShowcases[activePreviewIndex].projectId)}
            className="relative rounded-2xl bg-obsidian-900/60 border border-white/[0.08] hover:border-white/20 p-2 sm:p-3 backdrop-blur-2xl transition-all duration-500 cursor-pointer group shadow-2xl overflow-hidden"
          >
            {/* Top Browser Pill Bar */}
            <div className="px-4 py-2 bg-obsidian-950/70 rounded-xl border border-white/[0.04] flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-cyber-cyan" />
                <span>https://{previewShowcases[activePreviewIndex].url}</span>
              </div>
              <span className="text-[10px] font-mono text-cyber-cyan flex items-center gap-1">
                <span>{previewShowcases[activePreviewIndex].stat}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>

            {/* Viewport Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-obsidian-950">
              <img
                src={previewShowcases[activePreviewIndex].image}
                alt={previewShowcases[activePreviewIndex].title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    {previewShowcases[activePreviewIndex].tag}
                  </div>
                  <div className="text-base font-bold text-white font-display">
                    {previewShowcases[activePreviewIndex].title}
                  </div>
                </div>
                <span className="text-xs font-mono text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 group-hover:bg-white group-hover:text-obsidian-950 transition-all">
                  Inspect Build →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Horizontal Credibility Strip */}
        <div className="pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">100+</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Experiences Built</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">50+</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Businesses Served</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">0.4s</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Average Load Time</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-display text-white">6+ Years</div>
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Digital Craft</div>
          </div>
        </div>

      </div>
    </section>
  );
};
