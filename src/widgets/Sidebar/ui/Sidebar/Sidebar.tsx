import { FC, memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { useSelector } from "react-redux";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/deprecated/Button";
import { HStack, VStack } from "shared/ui/deprecated/Stack";
import { ToggleFeatures } from "shared/lib/features";
import { AppLogo } from "shared/ui/redesigned/AppLogo";
import { Icon } from "shared/ui/redesigned/Icon";
import ArrowIcon from "shared/assets/icons/arrow-bottom.svg?react";
import cl from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const DeprecatedSidebar = () => (
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
      <VStack gap="4" className={cl.items}>
        {itemsList}
      </VStack>
      <VStack align="center" className={cl.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cl.lang} isShort={collapsed} />
      </VStack>
    </aside>
  );

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cl.SidebarRedesign,
            { [cl.collapsedRedesign]: collapsed },
            [className]
          )}
        >
          <AppLogo size={collapsed ? 30 : 50} className={cl.appLogo} />
          <VStack gap="8" role="navigation" className={cl.items}>
            {itemsList}
          </VStack>
          <HStack gap="16" className={cl.switchers}>
            <ThemeSwitcher />
            <LangSwitcher isShort={collapsed} />
          </HStack>
          <Icon
            Svg={ArrowIcon}
            clickable
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cl.collapseBtn}
          />
        </aside>
      }
      off={<DeprecatedSidebar />}
    />
  );
});
