import { memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Text.module.scss";

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
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.NORMAL,
    align = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [cl[theme]]: true,
    [cl[align]]: true,
  };

  return (
    <div className={classNames(cl.Text, mods, [className])}>
      {title && <p className={cl.title}>{title}</p>}
      {text && <p className={cl.text}>{text}</p>}
    </div>
  );
});
