import { memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Text.module.scss";

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

export enum TextTheme {
  NORMAL = "normal",
  ERROR = "error",
}

export enum TextAlign {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.NORMAL,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [cl[theme]]: true,
    [cl[align]]: true,
    [cl[size]]: true
  };

  return (
    <div className={classNames(cl.Text, mods, [className])}>
      {title && <p className={cl.title}>{title}</p>}
      {text && <p className={cl.text}>{text}</p>}
    </div>
  );
});
