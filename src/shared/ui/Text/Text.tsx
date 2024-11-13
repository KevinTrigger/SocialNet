import { createElement, memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Text.module.scss";

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

export enum TextTheme {
  NORMAL = "normal",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlign {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  tagTitle?: TextTag;
  tagText?: TextTag;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.NORMAL,
    align = TextAlign.LEFT,
    size = TextSize.M,
    tagTitle = "h3",
    tagText = "p",
  } = props;

  const mods: Mods = {
    [cl[theme]]: true,
    [cl[align]]: true,
    [cl[size]]: true,
  };

  const TitleElement = createElement(tagTitle, { className: classNames(cl.title, mods, []) }, title);
  const TextElement = createElement(tagText, { className: cl.text }, text);

  return (
    <div className={classNames(cl.Text, mods, [className])}>
      {title && TitleElement}
      {text && TextElement}
    </div>
  );
});
