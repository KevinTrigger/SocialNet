import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import LogoutIcon from "shared/assets/icons/logout.svg?react";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg?react";
import AdminPanelIcon from "shared/assets/icons/admin-panel.svg?react";
import { useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "shared/ui/deprecated/Avatar";
import { Dropdown, DropdownItem } from "shared/ui/deprecated/Popups";
import { getRouteAdminPanel, getRouteProfile } from "shared/const/router";

export const AvatarDropdown = () => {
  const { t } = useTranslation("");
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelVisible = isAdmin || isManager;
  const profilePath = authData?.id && getRouteProfile(authData.id);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const dropDownAvatar = useMemo(
    () => <Avatar src={authData?.avatar} rounded size={40} fallbackInverted />,
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
            href: getRouteAdminPanel(),
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
