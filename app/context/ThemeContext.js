// contexts/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '@/styles/theme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');
  
  const theme = isDark ? darkTheme : lightTheme;
  
  return (
    <ThemeContext.Provider value={{ theme, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);