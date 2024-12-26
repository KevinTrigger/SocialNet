import { ButtonHTMLAttributes, FC, MouseEvent } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline";

export type ButtonSize = "M" | "L" | "XL";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  square?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    onClick,
    className,
    variant = "outline",
    children,
    disabled,
    square,
    fullWidth,
    size = "M",
    ...other
  } = props;

  const mods: Mods = {
    [cl.disabled]: disabled,
    [cl.square]: square,
    [cl.fullWidth]: fullWidth,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(cl.Button, mods, [
        className,
        cl[variant],
        cl[size],
      ])}
      {...other}
    >
      {children}
    </button>
  );
};
