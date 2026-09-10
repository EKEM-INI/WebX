import React from 'react';
import { useApp } from '../context/AppContext';
import { AiTechSection } from '../components/tech/AiTechSection';
import { ArrowRight } from 'lucide-react';

export const TechnologyPage = () => {
  const { navigateTo } = useApp();

  return (
    <div className="py-20 bg-obsidian-950 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Intelligent Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            AI + TECHNOLOGY.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Human creativity + modern technology + intelligent automation. We combine modern development with AI and intelligent workflows where they provide real business value.
          </p>
        </div>

        {/* The 6-pillar interactive radar */}
        <AiTechSection />

        {/* CTA */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Want to automate your web operations?</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            From intelligent inquiry triage to automated CRM synchronization, we can integrate custom workflows into your site.
          </p>
          <button
            onClick={() => navigateTo('apply')}
            className="px-7 py-3 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all inline-flex items-center gap-2"
          >
            <span>Commission Automated Build</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
