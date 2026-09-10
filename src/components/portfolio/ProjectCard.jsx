import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const { openCaseStudy } = useApp();

  return (
    <div
      onClick={() => openCaseStudy(project)}
      className="group relative rounded-2xl bg-obsidian-900/60 border border-white/10 hover:border-cyber-cyan/40 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between shadow-xl"
    >
      {/* Visual Screenshot / Preview Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-950 border-b border-white/5">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-cyber-cyan">
            {project.category}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-slate-400">
            {project.year}
          </span>
        </div>

        {/* Quick result badge if available */}
        {project.stats && (
          <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-obsidian-900/90 backdrop-blur-md border border-cyber-cyan/30 text-xs font-mono text-slate-200">
            <span className="font-bold text-cyber-cyan">{project.stats.metric1}</span>
            <span className="text-[10px] text-slate-400">{project.stats.label1}</span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
        <div>
          {/* Industry & Client */}
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
            {project.industry} • {project.client}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyber-cyan transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          {/* Short description */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        {/* Services tags */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.servicesProvided.map((service, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-obsidian-950 text-slate-400 border border-white/5"
            >
              {service}
            </span>
          ))}
        </div>

        {/* View Project Action Trigger */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-cyber-cyan flex items-center gap-1">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
          <span className="text-[11px] font-mono text-slate-500">
            Case Study & Live Specs
          </span>
        </div>
      </div>
    </div>
  );
};
