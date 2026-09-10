import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CREDIBILITY_METRICS,
  PORTFOLIO_PROJECTS,
  SERVICES,
  TESTIMONIALS
} from '../data/cmsData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Modal states
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [initialFormNeed, setInitialFormNeed] = useState('Business Website');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [isIwajuModalOpen, setIsIwajuModalOpen] = useState(false);
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState(false);

  // Dynamic CMS state (persisted locally so edits survive page refresh)
  const [metrics, setMetrics] = useState(() => {
    const saved = localStorage.getItem('webx_metrics');
    return saved ? JSON.parse(saved) : CREDIBILITY_METRICS;
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('webx_projects');
    return saved ? JSON.parse(saved) : PORTFOLIO_PROJECTS;
  });

  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('webx_testimonials');
    return saved ? JSON.parse(saved) : TESTIMONIALS;
  });

  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('webx_applications');
    return saved ? JSON.parse(saved) : [
      {
        id: "APP-8291",
        date: "2026-09-08 14:20",
        serviceNeeded: "Business Website",
        businessName: "Savanna Energy Group",
        industry: "Renewable Energy",
        description: "Leading solar microgrid developer in West Africa needing an enterprise digital platform.",
        goals: "Attract institutional project finance and enterprise B2B inquiries.",
        budget: "$5,000 - $10,000",
        timeline: "3-4 Weeks",
        contactName: "Babatunde Cole",
        email: "babatunde@savannaenergy.africa",
        phone: "+234 802 918 2000"
      }
    ];
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('webx_metrics', JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem('webx_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('webx_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('webx_applications', JSON.stringify(applications));
  }, [applications]);

  // Keyboard shortcut for Admin Drawer: Alt + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setIsAdminDrawerOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsAppModalOpen(false);
        setActiveCaseStudy(null);
        setIsIwajuModalOpen(false);
        setIsAdminDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openApplication = (need = 'Business Website') => {
    setInitialFormNeed(need);
    setIsAppModalOpen(true);
  };

  const closeApplication = () => setIsAppModalOpen(false);

  const openCaseStudy = (project) => setActiveCaseStudy(project);
  const closeCaseStudy = () => setActiveCaseStudy(null);

  const openIwaju = () => setIsIwajuModalOpen(true);
  const closeIwaju = () => setIsIwajuModalOpen(false);

  const toggleAdmin = () => setIsAdminDrawerOpen(prev => !prev);

  const submitApplication = (applicationData) => {
    const newRecord = {
      id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      ...applicationData
    };
    setApplications(prev => [newRecord, ...prev]);
    return newRecord;
  };

  const updateMetricValue = (id, newValue) => {
    setMetrics(prev => prev.map(m => m.id === id ? { ...m, value: newValue } : m));
  };

  const addNewProject = (newProj) => {
    setProjects(prev => [newProj, ...prev]);
  };

  const resetCmsToDefault = () => {
    localStorage.removeItem('webx_metrics');
    localStorage.removeItem('webx_projects');
    localStorage.removeItem('webx_testimonials');
    setMetrics(CREDIBILITY_METRICS);
    setProjects(PORTFOLIO_PROJECTS);
    setTestimonials(TESTIMONIALS);
  };

  return (
    <AppContext.Provider
      value={{
        isAppModalOpen,
        initialFormNeed,
        activeCaseStudy,
        isIwajuModalOpen,
        isAdminDrawerOpen,
        metrics,
        projects,
        testimonials,
        applications,
        openApplication,
        closeApplication,
        openCaseStudy,
        closeCaseStudy,
        openIwaju,
        closeIwaju,
        toggleAdmin,
        submitApplication,
        updateMetricValue,
        addNewProject,
        resetCmsToDefault
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
