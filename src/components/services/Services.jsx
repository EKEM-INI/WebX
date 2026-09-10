import React from 'react';
import { SERVICES } from '../../data/cmsData';
import { SectionBadge } from '../common/Badge';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="relative py-28 bg-obsidian-950 overflow-hidden">
      {/* Subtle radial ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-violet/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="cyan">
            Capabilities & Deliverables
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            WHAT WE BUILD
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Engineered for performance, conversion, and effortless scale. We build every digital product from the ground up to reflect the unique caliber of your business.
          </p>
        </div>

        {/* 6 Large Interactive Service Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};
