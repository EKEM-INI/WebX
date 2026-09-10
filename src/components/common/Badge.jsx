import React from 'react';

export const PoweredByIwajuBadge = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-cyber-cyan/30 text-xs font-mono text-slate-200 tracking-wider shadow-glow-cyan/20 backdrop-blur-md transition-all duration-300 hover:border-cyber-cyan hover:scale-[1.02] cursor-pointer group ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
      </span>
      <span className="text-slate-400 group-hover:text-slate-300">Powered by</span>
      <span className="font-semibold text-white tracking-normal group-hover:text-cyber-cyan transition-colors">
        Iwaju
      </span>
      <svg className="w-3.5 h-3.5 text-cyber-cyan transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export const SectionBadge = ({ children, color = 'cyan', className = '' }) => {
  const colorMap = {
    cyan: 'border-cyber-cyan/30 text-cyber-cyan bg-cyber-cyan/5 shadow-glow-cyan/10',
    violet: 'border-cyber-violet/30 text-cyber-violet bg-cyber-violet/5',
    emerald: 'border-cyber-emerald/30 text-cyber-emerald bg-cyber-emerald/5',
    amber: 'border-cyber-amber/30 text-cyber-amber bg-cyber-amber/5'
  };

  const dotMap = {
    cyan: 'bg-cyber-cyan',
    violet: 'bg-cyber-violet',
    emerald: 'bg-cyber-emerald',
    amber: 'bg-cyber-amber'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase ${colorMap[color] || colorMap.cyan} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotMap[color] || dotMap.cyan} animate-pulse`} />
      {children}
    </div>
  );
};
