import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Input.module.scss";

export enum InputTheme {}

interface InputProps {
  className?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className } = props;

  return <input className={classNames(cl.Input, {}, [className])} />;
};
