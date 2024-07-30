import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cl from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <div className={cl.links}>
        <AppLink to={RoutePath.main}>Home</AppLink>
        <AppLink to={RoutePath.about}>About page</AppLink>
      </div>
    </div>
  );
};
