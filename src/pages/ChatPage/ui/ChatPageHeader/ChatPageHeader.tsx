import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ChatPageHeader.module.scss";
import { Text } from "shared/ui/Text";

interface ChatPageHeaderProps {
  className?: string;
}

export const ChatPageHeader: FC<ChatPageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("");

  return (
    <header className={classNames(cl.ChatPageHeader, {}, [className])}>
      <Text title={t("Мои сообщения")} />
    </header>
  );
};
