import { FC, memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AvatarDropdown } from "features/AvatarDropdown";
import { NotificationButton } from "features/NotificationButton";
import { RoutePath } from "shared/const/router";
import cl from "./Navbar.module.scss";
import { Text, TextTheme } from "shared/ui/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { HStack } from "shared/ui/Stack";
import { Button, ButtonTheme } from "shared/ui/Button";

interface NavbarProps {
  className?: string;
}

const Navbar: FC = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { pathname } = useLocation();

  const authData = useSelector(getUserAuthData);
  const isArticlesPath = pathname === RoutePath.articles;

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
        <HStack gap="24" className={cl.btnsWrap}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
