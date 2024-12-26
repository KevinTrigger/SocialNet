import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LinkProps, NavLink } from "react-router-dom";
import cl from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "red";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className, variant = "primary", ...otherProps } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(isActive ? cl.AppLinkActive : cl.AppLink, {}, [
          cl[variant],
          className,
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
