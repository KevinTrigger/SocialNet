import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Navbar.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal";

interface NavbarProps {
  className?: string;
}

const Navbar: FC = ({ className }: NavbarProps) => {
  const { t } = useTranslation("translation");
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, [])

  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cl.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <div>
          Lorem ipsum dolatae omnis odio cumque fuga ipsum ratione? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Ipsum alias unde culpa
          exercitationem. Laboriosam assumenda, harum aspernatur delectus
          exercitationem dignissimos quaerat magni neque aliquam voluptatibus
          autem ipsa illum doloremque commodi?
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
