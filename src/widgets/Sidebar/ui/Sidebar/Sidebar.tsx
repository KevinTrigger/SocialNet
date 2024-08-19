import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Sidebar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import AboutIcon from "shared/assets/icons/about.svg?react";
import MainIcon from "shared/assets/icons/main.svg?react";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const { t } = useTranslation("translation");

  const mods = {
    [cl.collapsed]: collapsed,
    [cl.link]: collapsed,
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cl.Sidebar, mods, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cl.collapseBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cl.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cl.item}
        >
          <MainIcon className={cl.icon} />
          <span className={cl.link}>{t("Главная")}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={cl.item}>
          <AboutIcon className={cl.icon} />
          <span className={cl.link}>{t("О сайте")}</span>
        </AppLink>
      </div>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} isShort={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
