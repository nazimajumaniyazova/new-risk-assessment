import { createContext } from 'react';

export const initialThemeState = {
  darkMode: false,
  setDarkMode: () => null,
};

export const LOCAL_STORAGE_THEME_KEY = 'dark-mode';

const ThemeContext = createContext(initialThemeState);

export default ThemeContext;
