import { FC, memo, useCallback, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Navbar.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Dropdown, DropdownItem } from "shared/ui/Dropdown/Dropdown";
import LogoutIcon from "shared/assets/icons/logout.svg?react";
import ProfileIcon from "shared/assets/icons/profile.svg?react";

interface NavbarProps {
  className?: string;
}

const Navbar: FC = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isArticlesPath = pathname === RoutePath.articles;
  const profilePath = RoutePath.profile + authData?.id;

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
    {
      label: t("Выйти"),
      icon: LogoutIcon,
      onClick: () => onLogout(),
    },
  ];

  if (authData) {
    return (
      <nav className={classNames(cl.Navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cl.authUser}
          title={authData.username}
        />
        {isArticlesPath && (
          <AppLink
            className={cl.createLink}
            theme={AppLinkTheme.SECONDARY}
            to={`${RoutePath.article_create}`}
          >
            {t("Создать статью")}
          </AppLink>
        )}
        <Dropdown
          className={cl.dropdown}
          trigger={dropDownAvatar}
          items={dropDownItems}
        />
      </nav>
    );
  }

  return (
    <nav className={classNames(cl.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cl.authBtn}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isAuth={isAuthModal} onClose={onCloseModal} />
      )}
    </nav>
  );
};

export default memo(Navbar);
