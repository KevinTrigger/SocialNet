import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { HStack } from "shared/ui/deprecated/Stack";
import AppSvg from "shared/assets/icons/app-image.svg?react";
import cl from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: FC<AppLogoProps> = (props) => {
  const { className, size } = props;

  return (
    <HStack
      max
      justify="center"
      className={classNames(cl.AppLogoWrapper, {}, [className])}
    >
      <div className={cl.gradientBig} />
      <div className={cl.gradientSmall} />
      <AppSvg width={size} height={size} color="black" className={cl.appLogo} />
    </HStack>
  );
};
