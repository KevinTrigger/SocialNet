import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ChatPage.module.scss";
import { Page } from "widgets/Page/Page";
import { ChatPageHeader } from "./ChatPageHeader/ChatPageHeader";
import { Card } from "shared/ui/Card/Card";
import { ChatDialogsList } from "features/ChatWindow/ui/ChatDialogsList/ChatDialogsList";

interface ChatPageProps {
  className?: string;
}

const ChatPage: FC<ChatPageProps> = (props) => {
  const { className } = props;

  return (
    <Page className={classNames(cl.ChatPage, {}, [className])}>
      <ChatPageHeader />
      <Card className={cl.chatListCard}>
        <ChatDialogsList />
      </Card>
    </Page>
  );
};

export default memo(ChatPage);
