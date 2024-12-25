import { saveJsonSettings, useJsonSettings } from "entities/User";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Drawer } from "shared/ui/deprecated/Drawer";
import { Modal } from "shared/ui/deprecated/Modal";
import { Text } from "shared/ui/deprecated/Text";

export const ArticlePageGreeting = () => {
  const { t } = useTranslation("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isArticlesPageHasOpened } = useJsonSettings();

  useEffect(() => {
    if (!isArticlesPageHasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageHasOpened: true }));
    }
  }, [dispatch, isArticlesPageHasOpened]);

  const onClose = () => {
    setIsOpen(false);
  };

  const text = (
    <Text
      title={t("Добро пожаловать на страницу статей")}
      text={t(
        "Здесь вы можете искать и просматривать статьи на различные темы"
      )}
    />
  );

  if (isMobile) {
    <Drawer lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Drawer>;
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
};
