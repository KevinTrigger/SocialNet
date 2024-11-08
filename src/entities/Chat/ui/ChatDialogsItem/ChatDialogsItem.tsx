import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ChatDialogsItem.module.scss";
// import { Card } from "shared/ui/Card/Card";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";

interface ChatDialogsItemProps {
  className?: string;
}

export const ChatDialogsItem: FC<ChatDialogsItemProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("");

  return (
    <div className={classNames(cl.ChatDialogsItem, {}, [className])}>
      <Avatar
        src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
        size={AvatarSize.S}
        rounded
      />
      <Text text={t('Username')} />
    </div>
  );
};
