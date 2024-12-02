import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { useNotifications } from "entities/Notification";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { VStack } from "shared/ui/Stack";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cl from "./NotificationList.module.scss";

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = (props) => {
  const { className } = props;
  const { data: notifications, isLoading, error } = useNotifications();
  const { t } = useTranslation();

  if (error && !notifications) {
    return <Text text={t("Ошибка получения списка уведомлений")} />;
  }

  if (isLoading) {
    return (
      <Card className={classNames(cl.NotificationList, {}, [className])}>
        <VStack max gap="8">
          <Skeleton width={380} height={140} border={"10px"} />
          <Skeleton width={380} height={140} border={"10px"} />
          <Skeleton width={380} height={140} border={"10px"} />
        </VStack>
      </Card>
    );
  }

  if (!isLoading && !notifications) {
    return <Text text={t("Уведомлений нет")} />;
  }

  const sortedNotifications = notifications?.slice().sort((a, b) => {
    const firstDate = new Date(a.createdAt).getTime();
    const secondDate = new Date(b.createdAt).getTime();

    return secondDate - firstDate;
  });

  const renderNotificationList = () => {
    if (!notifications || !notifications.length) return null;

    if (notifications.length < 2) {
      return notifications.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ));
    }

    return sortedNotifications?.map((item) => (
      <NotificationItem item={item} key={item.id} />
    ));
  };

  return (
    <Card className={classNames(cl.NotificationList, {}, [className])}>
      <VStack max gap="8">
        {renderNotificationList()}
      </VStack>
    </Card>
  );
};
