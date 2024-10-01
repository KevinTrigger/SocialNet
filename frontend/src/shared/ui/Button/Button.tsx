import { ButtonHTMLAttributes, FC, memo } from "react";
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
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    disabled,
    square,
    size = ButtonSize.M,
    ...other
  } = props;

  const mods: Mods = {
    [cl[theme]]: true,
    [cl.disabled]: !!disabled,
    [cl.square]: !!square,
    [cl[size]]: true,
  };

  return (
    <button className={classNames(cl.Button, mods, [className])} {...other}>
      {children}
    </button>
  );
};

export default memo(Button);
