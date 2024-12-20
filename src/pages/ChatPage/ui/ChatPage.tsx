import { memo } from "react";
import { Page } from "widgets/Page";
import { ChatWindow } from "features/ChatWindow";
import { Text } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { AppNotification } from "shared/ui/AppNotification";
import cl from "./ChatPage.module.scss";

const ChatPage = () => {
  const { t } = useTranslation("chat");

  return (
    <Page data-testid="ChatPage" className={cl.ChatPage}>
      <Text title={t("Мессенджер")} />
      <ChatWindow />
      <AppNotification />
    </Page>
  );
};

export default memo(ChatPage);
