import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : {
      mode: 'light', // 'light' or 'dark'
      primaryColor: '#0ea5e9',      // Sky blue
      secondaryColor: '#06b6d4',    // Cyan
      tertiaryColor: '#8b5cf6',     // Purple
      textColor: '#1e293b',         // Dark text
      backgroundColor: '#f8fafc',   // Light background
      accentColor: '#10b981',       // Emerald green
      borderColor: '#e2e8f0'        // Light border
    };
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (themeData) => {
    const root = document.documentElement;
    
    // Apply CSS variables
    root.style.setProperty('--primary-color', themeData.primaryColor);
    root.style.setProperty('--secondary-color', themeData.secondaryColor);
    root.style.setProperty('--tertiary-color', themeData.tertiaryColor);
    root.style.setProperty('--text-color', themeData.textColor);
    root.style.setProperty('--bg-color', themeData.backgroundColor);
    root.style.setProperty('--accent-color', themeData.accentColor);
    root.style.setProperty('--border-color', themeData.borderColor);

    // Apply dark/light mode
    if (themeData.mode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const updateTheme = (updates) => {
    setTheme(prev => ({
      ...prev,
      ...updates
    }));
  };

  const toggleDarkMode = () => {
    setTheme(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
      // Auto switch colors based on mode
      ...(prev.mode === 'light' ? {
        textColor: '#ffffff',
        backgroundColor: '#0f172a',
        borderColor: '#1e293b'
      } : {
        textColor: '#1e293b',
        backgroundColor: '#f8fafc',
        borderColor: '#e2e8f0'
      })
    }));
  };

  const resetTheme = () => {
    const defaultTheme = {
      mode: 'dark',
      primaryColor: '#0ea5e9',
      secondaryColor: '#06b6d4',
      tertiaryColor: '#8b5cf6',
      textColor: '#ffffff',
      backgroundColor: '#0f172a',
      accentColor: '#10b981',
      borderColor: '#1e293b'
    };
    setTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, toggleDarkMode, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
