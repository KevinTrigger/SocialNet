import { useContext } from "react";
import { Theme } from "shared/const/theme";
import { ThemeContext } from "../../context/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localStorage";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);
  
  let newTheme: Theme;

  switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.LIGHT;
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