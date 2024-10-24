import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ChatDialogsList.module.scss";
import { ChatDialogsItem } from "entities/Chat";

interface ChatDialogsListProps {
  className?: string;
}

export const ChatDialogsList: FC<ChatDialogsListProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cl.ChatDialogsList, {}, [className])}>
      <ChatDialogsItem />
      <ChatDialogsItem />
      <ChatDialogsItem />
      <ChatDialogsItem />
    </div>
  );
};
