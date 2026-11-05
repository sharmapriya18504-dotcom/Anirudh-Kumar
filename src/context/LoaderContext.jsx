import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const LoaderContext = createContext(null);

export function LoaderProvider({ children }) {
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  const triggerPageLoad = useCallback((toPath) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (toPath) {
      navigate(toPath);
    }
    setKey((prev) => prev + 1);
  }, [navigate]);

  return (
    <LoaderContext.Provider
      value={{
        isLoading: false,
        loadingPct: 100,
        isDone: true,
        triggerPageLoad,
        refreshKey: key,
      }}
    >
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
