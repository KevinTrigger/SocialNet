import { FC, memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AvatarDropdown } from "features/AvatarDropdown";
import { NotificationButton } from "features/NotificationButton";
import cl from "./Navbar.module.scss";
import { Text, TextTheme } from "shared/ui/deprecated/Text";
import { AppLink, AppLinkTheme } from "shared/ui/deprecated/AppLink";
import { HStack } from "shared/ui/deprecated/Stack";
import { Button, ButtonTheme } from "shared/ui/deprecated/Button";
import { getRouteArticleCreate, getRouteArticles } from "shared/const/router";
import { ToggleFeatures } from "shared/lib/features";

interface NavbarProps {
  className?: string;
}

const Navbar: FC = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { pathname } = useLocation();

  const authData = useSelector(getUserAuthData);
  const isArticlesPath = pathname === getRouteArticles();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <nav className={classNames(cl.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={cl.btnsWrap}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </nav>
        }
        off={
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
                to={getRouteArticleCreate()}
              >
                {t("Создать статью")}
              </AppLink>
            )}
            <HStack gap="16" className={cl.btnsWrap}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </nav>
        }
      />
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
