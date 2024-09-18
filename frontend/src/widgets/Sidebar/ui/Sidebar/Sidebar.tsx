import { FC, memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Sidebar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItemList } from "../../model/items";
import SidebarItem from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const getSidebarItems = useMemo(
    () =>
      SidebarItemList.map((item) => (
        <SidebarItem collapsed={collapsed} item={item} key={item.path} />
      )),
    [collapsed]
  );

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
      <div className={cl.items}>{getSidebarItems}</div>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} isShort={collapsed} />
      </div>
    </div>
  );
};

export default memo(Sidebar);
