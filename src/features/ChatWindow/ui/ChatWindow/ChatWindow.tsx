import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ChatDialogsList } from "../ChatDialogsList/ChatDialogsList";
import { Card } from "shared/ui/Card";
import { useSelector } from "react-redux";
import { getUserAuthData, useUsers } from "entities/User";
import { Skeleton } from "shared/ui/Skeleton";
import { Text, TextTheme } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { HStack, VStack } from "shared/ui/Stack";
import cl from "./ChatWindow.module.scss";

interface ChatWindowProps {
  className?: string;
}

export const ChatWindow: FC<ChatWindowProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("chat");
  const { data, isLoading, error } = useUsers();
  const authData = useSelector(getUserAuthData);

  const dialogs = data?.filter((user) => user.id !== authData?.id);

  const renderContent = () => {
    if (isLoading) {
      return (
        <VStack gap="16" max>
          {new Array(5).fill("").map((_, index) => (
            <Skeleton key={index} height={100} border="10px" />
          ))}
        </VStack>
      );
    }

    if (error) {
      return (
        <Text
          title={t("Ошибка получения списка бесед")}
          theme={TextTheme.ERROR}
        />
      );
    }

    return <ChatDialogsList dialogs={dialogs} />;
  };

  return (
    <HStack max>
      <Card className={classNames(cl.ChatWindow, {}, [className])}>
        {renderContent()}
      </Card>
    </HStack>
  );
};
