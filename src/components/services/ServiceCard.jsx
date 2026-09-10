import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Check } from 'lucide-react';

export const ServiceCard = ({ service }) => {
  const { openApplication } = useApp();

  return (
    <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
      <div>
        {/* Number & Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono text-slate-500 group-hover:text-cyber-cyan transition-colors">
            {service.id}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]">
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
          {service.shortDesc}
        </p>

        {/* Deliverables */}
        <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-cyber-cyan text-sm leading-none mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500">
          {service.timeline}
        </span>

        <button
          onClick={() => openApplication(service.title)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyber-cyan transition-colors"
        >
          <span>Commission Build</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
