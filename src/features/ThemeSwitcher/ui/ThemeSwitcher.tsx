import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "shared/const/theme";
import { Button, ButtonTheme } from "shared/ui/deprecated/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "entities/User";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg?react";
import LightThemeIcon from "shared/assets/icons/theme-light.svg?react";
import OrangeThemeIcon from "shared/assets/icons/theme-orange.svg?react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

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

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(
        saveJsonSettings({
          theme: newTheme,
        })
      );
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      className={classNames("", {}, [className])}
      onClick={onToggleHandler}
      theme={ButtonTheme.CLEAR}
    >
      {getIcon()}
    </Button>
  );
};

export default memo(ThemeSwitcher);
