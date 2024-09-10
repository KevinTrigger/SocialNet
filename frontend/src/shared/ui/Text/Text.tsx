import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Text.module.scss";

export enum TextTheme {
  NORMAL = "normal",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const { className, text, title, theme = TextTheme.NORMAL } = props;

  const mods: Record<string, boolean> = {
    [cl[theme ?? ""]]: true,
  };

  return (
    <div className={classNames(cl.Text, mods, [className])}>
      {title && <p className={cl.title}>{title}</p>}
      {text && <p className={cl.text}>{text}</p>}
    </div>
  );
};
