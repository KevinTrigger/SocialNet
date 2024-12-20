import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ChatDialogsItem } from "entities/Chat";
import { User } from "entities/User";
import cl from "./ChatDialogsList.module.scss";

interface ChatDialogsListProps {
  className?: string;
  dialogs?: User[];
  isLoading?: boolean;
}

export const ChatDialogsList: FC<ChatDialogsListProps> = (props) => {
  const { className, dialogs } = props;

  return (
    <div className={classNames(cl.ChatDialogsList, {}, [className])}>
      {dialogs?.map((dialog) => (
        <ChatDialogsItem dialog={dialog} />
      ))}
    </div>
  );
};
