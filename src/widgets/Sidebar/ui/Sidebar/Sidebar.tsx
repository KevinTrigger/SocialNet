import { FC, memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import Button, { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { useSelector } from "react-redux";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import cl from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  );

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cl.Sidebar, { [cl.collapsed]: collapsed }, [
        className,
      ])}
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
      <VStack gap="4" className={cl.items}>{itemsList}</VStack>
      <VStack align="center" className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} isShort={collapsed} />
      </VStack>
    </aside>
  );
});
