import React from 'react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/hero/Hero';
import { TrustCredibility } from '../components/trust/TrustCredibility';
import { SERVICES, PORTFOLIO_PROJECTS } from '../data/cmsData';
import { ServiceCard } from '../components/services/ServiceCard';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HomePage = () => {
  const { navigateTo } = useApp();

  // Curate short preview: only 3 top services and 3 top works
  const previewServices = SERVICES.slice(0, 3);
  const previewProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. High-Impact Concise Hero */}
      <Hero />

      {/* 2. Trust Statement & Verified Metrics */}
      <TrustCredibility />

      {/* 3. Short Services Preview */}
      <section className="relative py-20 bg-obsidian-950 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                Capabilities Preview
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                WHAT WE BUILD
              </h2>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-cyber-cyan transition-colors"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigateTo('services')}
              className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              View Full Capabilities, Tech Stacks & Timelines →
            </button>
          </div>
        </div>
      </section>

      {/* 4. Short Selected Work Preview */}
      <section className="relative py-20 bg-obsidian-950 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                Portfolio Preview
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                FEATURED BUILDS
              </h2>
            </div>

            <button
              onClick={() => navigateTo('work')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-cyber-cyan transition-colors"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigateTo('work')}
              className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              Explore All Case Studies & Filter by Industry →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Short Focused CTA Banner */}
      <section className="relative py-20 bg-obsidian-950 border-t border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Now Taking Commissions
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            READY TO BUILD?
          </h2>

          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Tell us about your business and let's engineer a digital presence that converts.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigateTo('apply')}
              className="px-8 py-3.5 rounded-full bg-white text-obsidian-950 font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center gap-2 mx-auto"
            >
              <span>Start Application Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
