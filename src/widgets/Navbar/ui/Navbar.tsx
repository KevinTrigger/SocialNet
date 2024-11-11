import { FC, memo, useCallback, useState } from "react";
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

  if (authData) {
    return (
      <nav className={classNames(cl.Navbar, {}, [className])}>
        <div className={cl.authWrap}>
          <AppLink to={profilePath}>
            <Avatar src={authData.avatar} rounded size={AvatarSize.XS} />
          </AppLink>
          <Text
            theme={TextTheme.INVERTED}
            className={cl.authUser}
            title={authData.username}
          />
        </div>
        {isArticlesPath && (
          <AppLink
            className={cl.createLink}
            theme={AppLinkTheme.SECONDARY}
            to={`${RoutePath.article_create}`}
          >
            {t("Создать статью")}
          </AppLink>
        )}
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cl.links}
          onClick={onLogout}
        >
          {t("Выйти")}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={classNames(cl.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cl.links}
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
