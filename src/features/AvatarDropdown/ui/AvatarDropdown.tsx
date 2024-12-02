import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import LogoutIcon from "shared/assets/icons/logout.svg?react";
import ProfileIcon from "shared/assets/icons/profile.svg?react";
import AdminPanelIcon from "shared/assets/icons/admin-panel.svg?react";
import { Dropdown, DropdownItem } from "shared/ui/Popups";
import { useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";

export const AvatarDropdown = () => {
  const { t } = useTranslation("");
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelVisible = isAdmin || isManager;
  const profilePath = RoutePath.profile + authData?.id;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const dropDownAvatar = useMemo(
    () => <Avatar src={authData?.avatar} rounded size={AvatarSize.XS} />,
    [authData?.avatar]
  );

  const dropDownItems: DropdownItem[] = [
    {
      label: t("Профиль"),
      icon: ProfileIcon,
      href: profilePath,
    },
    ...(isAdminPanelVisible
      ? [
          {
            label: t("Админ-панель"),
            icon: AdminPanelIcon,
            href: RoutePath.admin_panel,
          },
        ]
      : []),
    {
      label: t("Выйти"),
      icon: LogoutIcon,
      onClick: () => onLogout(),
    },
  ];

  return <Dropdown trigger={dropDownAvatar} items={dropDownItems} />;
};
