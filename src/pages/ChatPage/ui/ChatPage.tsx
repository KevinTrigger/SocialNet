import { memo } from "react";
import cl from "./ChatPage.module.scss";
import { Page } from "widgets/Page/Page";
import { ChatPageHeader } from "./ChatPageHeader/ChatPageHeader";
import { ChatDialogsList } from "features/ChatWindow/ui/ChatDialogsList/ChatDialogsList";
import { Card } from "shared/ui/Card";

const ChatPage = () => {
  return (
    <Page className={cl.ChatPage}>
      <ChatPageHeader />
      <Card className={cl.chatListCard}>
        <ChatDialogsList />
      </Card>
    </Page>
  );
};

export default memo(ChatPage);
