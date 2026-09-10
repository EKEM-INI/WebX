import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';

export const TopLoadingBar = () => {
  const { isPageLoading } = useApp();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPageLoading) {
      setProgress(30);
      const t1 = setTimeout(() => setProgress(75), 70);
      const t2 = setTimeout(() => setProgress(100), 180);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setProgress(100);
      const t = setTimeout(() => setProgress(0), 200);
      return () => clearTimeout(t);
    }
  }, [isPageLoading]);

  if (progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyber-cyan via-white to-cyber-cyan transition-all duration-200 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
