import React from 'react';
import { SERVICES } from '../../data/cmsData';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-obsidian-950 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Capabilities
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            WHAT WE BUILD
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered for performance, conversion, and effortless scale. We build every digital product from the ground up to reflect the unique caliber of your business.
          </p>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};
