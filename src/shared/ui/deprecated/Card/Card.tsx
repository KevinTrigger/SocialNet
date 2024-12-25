import { FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINE = "outline",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

/**
 * @deprecated
 */

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      className={classNames(cl.Card, {}, [className, cl[theme]])}
    >
      {children}
    </div>
  );
};
