import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Sidebar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import Button from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation("translation");

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cl.Sidebar, { [cl.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        {collapsed ? t("Расскрыть") : t("Скрыть")}
      </Button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
