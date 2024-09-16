import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg?react";
import LightThemeIcon from "shared/assets/icons/theme-light.svg?react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};

export default memo(ThemeSwitcher);
