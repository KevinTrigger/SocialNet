import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { HStack, VStack } from "shared/ui/Stack";
import { Notification } from "../../model/types/notification";
import { Text } from "shared/ui/Text/Text";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cl from "./NotificationItem.module.scss";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
  const { className, item } = props;
  const { t } = useTranslation("");
  const createdAt = new Date(item.createdAt).toLocaleDateString();

  return (
    <VStack gap="8" className={classNames(cl.NotificationItem, {}, [className])}>
      <HStack align="start">
        <Text title={t("Уведомление") + ` №${item.id}`} text={item.message} className={cl.message}/>
        <Text tagText={"span"} text={`${createdAt}`} className={cl.date} />
      </HStack>
      {item.href && (
        <AppLink
          target="_blank"
          to={item.href}
          theme={AppLinkTheme.PRIMARY_OUTLINED}
          className={cl.link}
        >
          {t("Источник")}
        </AppLink>
      )}
    </VStack>
  );
};
