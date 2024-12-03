import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ChatWindow.module.scss";
import { ChatDialogsList } from "../ChatDialogsList/ChatDialogsList";
import { Card } from "shared/ui/Card";

interface ChatWindowProps {
  className?: string;
}

export const ChatWindow: FC<ChatWindowProps> = (props) => {
  const { className } = props;

  return (
    <Card className={classNames(cl.ChatWindow, {}, [className])}>
      <ChatDialogsList />
    </Card>
  );
};
