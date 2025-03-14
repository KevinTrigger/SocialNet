import { FC, SVGProps } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Icon.module.scss";

export enum IconTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
  CLEAR = "clear",
  CLEAR_INVERTED = "clear_inverted",
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
  size?: number;
  inverted?: boolean;
}

/**
 * @deprecated
 */

export const Icon: FC<IconProps> = (props) => {
  const {
    className,
    size = 24,
    theme = IconTheme.PRIMARY,
    Svg,
    inverted,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cl[theme]]: true,
  };

  return (
    <Svg
      {...otherProps}
      style={{ width: size, height: size }}
      className={classNames(inverted ? cl.inverted : cl.Icon, mods, [
        className,
      ])}
    />
  );
};
