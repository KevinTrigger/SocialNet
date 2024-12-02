import { FC, memo, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  PRIMARY_OUTLINED = "primary_outlined",
  SECONDARY_OUTLINED = "secondary_outlined",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.SECONDARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cl.AppLink, {}, [cl[theme], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default memo(AppLink);
