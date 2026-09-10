import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Check, Sparkles, Clock, Layers } from 'lucide-react';

export const ServiceCard = ({ service }) => {
  const { openApplication } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative rounded-2xl bg-obsidian-900/70 border border-white/10 hover:border-cyber-cyan/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
    >
      {/* Top ambient glow on hover */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

      <div>
        {/* Number & Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl sm:text-3xl font-black font-display text-cyber-cyan/80 group-hover:text-cyber-cyan transition-colors">
            {service.id}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-obsidian-950 border border-white/10 text-slate-300 group-hover:border-cyber-cyan/30 transition-colors">
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
          {service.shortDesc}
        </p>

        {/* Full description if toggled or visual preview */}
        <div className="mt-5 pt-4 border-t border-white/5 space-y-2.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            What's Included:
          </div>
          <ul className="space-y-2">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
            {service.deliverables.length > 3 && (
              <li className="text-[11px] font-mono text-slate-400 pl-5">
                +{service.deliverables.length - 3} more deliverables
              </li>
            )}
          </ul>
        </div>

        {/* Tech pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950 text-slate-400 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer with Turnaround & CTA */}
      <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span>{service.timeline}</span>
        </div>

        <button
          onClick={() => openApplication(service.title)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyber-cyan transition-colors"
        >
          <span>Build This</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
