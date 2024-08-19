import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC = ({ className }: NavbarProps) => {

  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <div className={cl.links}>/</div>
    </div>
  );
};

export default Navbar;
