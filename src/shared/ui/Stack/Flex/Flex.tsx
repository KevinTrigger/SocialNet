import { FC, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cl from "./Flex.module.scss";

export type FlexJustify = "start" | "center" | "between" | "end";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "2" | "4" | "8" | "16" | "24" | "32";
export type FlexWrap = "noWrap" | "wrap";

const justifyClasses: Record<FlexJustify, string> = {
  start: cl.justifyStart,
  between: cl.justifyBetween,
  center: cl.justifyCenter,
  end: cl.justifyEnd,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cl.alignStart,
  center: cl.alignCenter,
  end: cl.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cl.directionRow,
  column: cl.directionColumn,
};

const wrapClasses: Record<FlexWrap, string> = {
  noWrap: cl.noWrap,
  wrap: cl.wrap,
};

const gapClasses: Record<FlexGap, string> = {
  2: cl.gap2,
  4: cl.gap4,
  8: cl.gap8,
  16: cl.gap16,
  24: cl.gap24,
  32: cl.gap32,
};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  wrap?: FlexWrap;
  max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    wrap = "noWrap",
    max = false,
  } = props;

  const additional: Array<string | undefined> = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    wrapClasses[wrap],
  ];

  const mods: Mods = {
    [cl.max]: max,
  };

  return (
    <div className={classNames(cl.Flex, mods, additional)}>{children}</div>
  );
};
