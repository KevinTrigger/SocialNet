import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cl from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar: FC = ({ className }: NavbarProps) => {

  const {t} = useTranslation('translation');

  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <div className={cl.links}>
        <AppLink to={RoutePath.main}>{t('Главная')}</AppLink>
        <AppLink to={RoutePath.about}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
