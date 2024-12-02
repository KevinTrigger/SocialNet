import { FC, SVGProps } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Icon.module.scss";

export enum IconTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

export const Icon: FC<IconProps> = (props) => {
  const { className, theme = IconTheme.PRIMARY, Svg, ...otherProps } = props;

  const mods: Mods = {
    [cl[theme]]: true,
  };

  return (
    <Svg {...otherProps} className={classNames(cl.Icon, mods, [className])} />
  );
};
