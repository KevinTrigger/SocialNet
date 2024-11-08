import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg?react";
import LightThemeIcon from "shared/assets/icons/theme-light.svg?react";
import OrangeThemeIcon from "shared/assets/icons/theme-orange.svg?react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case Theme.DARK:
        return <DarkThemeIcon />;
      case Theme.LIGHT:
        return <LightThemeIcon />;
      case Theme.ORANGE:
        return <OrangeThemeIcon />;
    }
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {getIcon()}
    </Button>
  );
};

export default memo(ThemeSwitcher);
