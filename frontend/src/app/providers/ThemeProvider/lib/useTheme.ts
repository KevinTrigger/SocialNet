import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);
  
  let newTheme: Theme;

  switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
  }
  
  const toggleTheme = () => {
    setTheme?.(newTheme);
  };
  
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  document.body.className = theme;
  
  return { 
    theme: theme || Theme.LIGHT, 
    toggleTheme 
  }
}