import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from "shared/ui/deprecated/AppLink";
import { SidebarItemType } from "../../model/types/sidebarItem";
import cl from "./SidebarItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { ToggleFeatures } from "shared/lib/features";
import { AppLink } from "shared/ui/redesigned/AppLink";
import { Icon } from "shared/ui/redesigned/Icon";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;
  const { t } = useTranslation("");
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  const SidebarItemDeprecated = () => (
    <AppLinkDeprecated
      className={classNames(cl.item, { [cl.collapsed]: collapsed })}
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon className={cl.icon} />
      <span className={cl.link}>{t(item.text)}</span>
    </AppLinkDeprecated>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          className={classNames(cl.itemRedesign, { [cl.collapsedRedesign]: collapsed })}
          to={item.path}
        >
          <Icon Svg={item.Icon} className={cl.icon} />
          <span className={cl.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={<SidebarItemDeprecated />}
    />
  );
});
