import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const { openCaseStudy } = useApp();

  return (
    <div
      onClick={() => openCaseStudy(project)}
      className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 overflow-hidden backdrop-blur-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
    >
      {/* Visual Screenshot Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-950">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 opacity-85 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-slate-300">
            {project.category}
          </span>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-slate-400">
            {project.year}
          </span>
        </div>

        {/* Stat badge if available */}
        {project.stats && (
          <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-950/90 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-200">
            <span className="font-semibold text-cyber-cyan">{project.stats.metric1}</span>
            <span className="text-[10px] text-slate-400">{project.stats.label1}</span>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
            {project.industry}
          </div>

          <h3 className="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
          <span>{project.client}</span>
          <span className="text-white group-hover:text-cyber-cyan transition-colors">Case Study →</span>
        </div>
      </div>
    </div>
  );
};
