import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const { 
    className, 
    theme = ButtonTheme.CLEAR, 
    ...other 
  } = props;

  return (
    <button
      className={classNames(cl.Button, {}, [cl[theme], className])}
      {...other}
    >
      {props.children}
    </button>
  );
};

export default Button;
