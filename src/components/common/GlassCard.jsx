import React from 'react';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'cyan',
  onClick
}) => {
  const glowBorder = {
    cyan: 'hover:border-cyber-cyan/40 hover:shadow-[0_0_30px_-8px_rgba(0,240,255,0.2)]',
    violet: 'hover:border-cyber-violet/40 hover:shadow-[0_0_30px_-8px_rgba(129,140,248,0.2)]',
    emerald: 'hover:border-cyber-emerald/40 hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.2)]'
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-obsidian-900/60 backdrop-blur-xl border border-white/5 p-6 md:p-8 transition-all duration-300 ${
        hoverEffect ? `${glowBorder[glowColor] || glowBorder.cyan} hover:-translate-y-1` : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Corner subtle tech accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 rounded-tl-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 rounded-br-2xl pointer-events-none" />
      {children}
    </div>
  );
};
