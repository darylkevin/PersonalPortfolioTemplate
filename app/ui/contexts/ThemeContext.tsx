'use client';

import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        { children }
    </ThemeContext.Provider>
  );
}

export default ThemeContext;