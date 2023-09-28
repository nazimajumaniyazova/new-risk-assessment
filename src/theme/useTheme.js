import { useContext } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

function useTheme() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    const isDarkMode = !darkMode;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, isDarkMode);
    setDarkMode(isDarkMode);
  };
  return { darkMode, toggleTheme };
}

export default useTheme;
