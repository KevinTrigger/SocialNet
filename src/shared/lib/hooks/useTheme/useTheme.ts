import { useContext } from "react";
import { Theme } from "shared/const/theme";
import { ThemeContext } from "../../context/ThemeContext";

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
    setTheme?.(newTheme);

    saveAction?.(newTheme);
    console.log(newTheme, ' newTheme in useTheme')
  };

  return { 
    theme: theme || Theme.LIGHT, 
    toggleTheme
  }
}