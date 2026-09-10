import React from 'react';
import { useApp } from '../context/AppContext';
import { ClientTypes } from '../components/clients/ClientTypes';
import { Testimonials } from '../components/testimonials/Testimonials';
import { ArrowRight } from 'lucide-react';

export const ClientsPage = () => {
  const { navigateTo } = useApp();

  return (
    <div className="py-20 bg-obsidian-950 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Sectors & Testimonials
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            BUILT FOR BUSINESSES.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From high-growth ventures and luxury dining to specialized professional firms and brick-and-mortar retailers, WebX engineers custom digital presence tailored to your revenue model.
          </p>
        </div>

        {/* 10 Business Sectors */}
        <ClientTypes />

        {/* Testimonials */}
        <div className="mt-16">
          <Testimonials />
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-white">
            Ready to build for your industry?
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Select your sector and submit your project requirements to receive a tailored architecture brief.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('apply')}
              className="px-7 py-3 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all inline-flex items-center gap-2"
            >
              <span>Commission Your Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
