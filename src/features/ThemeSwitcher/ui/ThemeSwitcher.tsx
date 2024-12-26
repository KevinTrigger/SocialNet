import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "shared/const/theme";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "shared/ui/deprecated/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "entities/User";
import { ToggleFeatures } from "shared/lib/features";
import { Icon } from "shared/ui/redesigned/Icon";
import LightThemeIconDeprecated from "shared/assets/icons/theme-light.svg?react";
import OrangeThemeIconDeprecated from "shared/assets/icons/theme-orange.svg?react";
import DarkThemeIconDeprecated from "shared/assets/icons/theme-dark.svg?react";
import ThemeIcon from "shared/assets/icons/theme.svg?react";
import cl from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const ThemeSwitcherDeprecated = () => (
    <ButtonDeprecated
      className={classNames("", {}, [className])}
      onClick={onToggleHandler}
      theme={ButtonTheme.CLEAR}
    >
      {getIcon()}
    </ButtonDeprecated>
  );

  const getIcon = () => {
    switch (theme) {
      case Theme.DARK:
        return <DarkThemeIconDeprecated />;
      case Theme.LIGHT:
        return <LightThemeIconDeprecated />;
      case Theme.ORANGE:
        return <OrangeThemeIconDeprecated />;
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
    <ToggleFeatures
      feature="isAppRedesigned"
      off={<ThemeSwitcherDeprecated />}
      on={
        <Icon
          Svg={ThemeIcon}
          clickable
          onClick={onToggleHandler}
          className={cl.themeSwitcher}
        />
      }
    />
  );
};

export default memo(ThemeSwitcher);
