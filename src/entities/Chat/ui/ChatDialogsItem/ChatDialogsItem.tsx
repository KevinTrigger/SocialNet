import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar";
import { Text } from "shared/ui/Text";
import { User } from "entities/User";
import cl from "./ChatDialogsItem.module.scss";

interface ChatDialogsItemProps {
  className?: string;
  dialog?: User;
}

export const ChatDialogsItem: FC<ChatDialogsItemProps> = (props) => {
  const { className, dialog } = props;

  return (
    <div className={classNames(cl.ChatDialogsItem, {}, [className])}>
      <Avatar src={dialog?.avatar} size={60} rounded />
      <Text text={dialog?.username} />
    </div>
  );
};
