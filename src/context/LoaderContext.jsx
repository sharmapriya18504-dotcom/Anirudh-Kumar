import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoaderContext = createContext(null);

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPct, setLoadingPct] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [key, setKey] = useState(0); // re-mount trigger for fresh animations
  const navigate = useNavigate();
  const location = useLocation();

  const startLoaderAnimation = useCallback((onFinish) => {
    setIsLoading(true);
    setIsDone(false);
    setLoadingPct(0);
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(100, current + Math.random() * 12 + 6);
      setLoadingPct(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = 'auto';
          if (onFinish) onFinish();
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, 300);
      }
    }, 40);
  }, []);

  // Initial load
  useEffect(() => {
    startLoaderAnimation();
  }, [startLoaderAnimation]);

  const triggerPageLoad = useCallback((toPath) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (toPath) {
      navigate(toPath);
    }
    setKey(prev => prev + 1); // Triggers re-render for fresh counters, typewriter, and reveals
    startLoaderAnimation();
  }, [navigate, startLoaderAnimation]);

  return (
    <LoaderContext.Provider value={{ isLoading, loadingPct, isDone, triggerPageLoad, refreshKey: key }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
}

