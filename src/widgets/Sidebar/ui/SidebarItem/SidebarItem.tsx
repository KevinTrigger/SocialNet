import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/types/sidebarItem";
import cl from "./SidebarItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

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

  return (
    <AppLink
      className={classNames(cl.item, { [cl.collapsed]: collapsed })}
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon className={cl.icon} />
      <span className={cl.link}>{t(item.text)}</span>
    </AppLink>
  );
});
