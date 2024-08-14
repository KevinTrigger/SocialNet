import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  SECONDARY = "secondary",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { 
    className, 
    theme,
    children,
    disabled, 
    ...other 
  } = props;

  const mods: Record<string, boolean> = {
    [cl[theme ?? '']]: true,
    [cl.disabled]: !!disabled,
  }

  return (
    <button
      className={classNames(cl.Button, mods, [className])}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
