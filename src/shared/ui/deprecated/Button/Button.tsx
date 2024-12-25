import { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
  square?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * @deprecated
 */

export const Button: FC<ButtonProps> = (props) => {
  const {
    onClick,
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    disabled,
    square,
    fullWidth,
    size = ButtonSize.M,
    ...other
  } = props;

  const mods: Mods = {
    [cl[theme]]: true,
    [cl.disabled]: disabled,
    [cl.square]: square,
    [cl[size]]: true,
    [cl.fullWidth]: fullWidth,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(cl.Button, mods, [className])}
      {...other}
    >
      {children}
    </button>
  );
};
