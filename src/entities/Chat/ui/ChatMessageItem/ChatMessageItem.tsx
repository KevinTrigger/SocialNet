import { FC } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ChatMessageItem.module.scss";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Card } from "shared/ui/Card/Card";
import { Text, TextTheme } from "shared/ui/Text/Text";
import AppLink from "shared/ui/AppLink/AppLink";

interface ChatMessageItemProps {
  className?: string;
  isAuthor?: boolean;
}

export const ChatMessageItem: FC<ChatMessageItemProps> = (props) => {
  const { className, isAuthor } = props;
  const { t } = useTranslation("");

  const mods: Mods = {
    [cl.isAuthor]: isAuthor,
  };

  return (
    <Card
      style={isAuthor ? { marginLeft: "auto" } : { marginRight: "0" }}
      className={classNames(cl.ChatMessageItem, mods, [className])}
    >
      <Avatar
        src={
          "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        }
        rounded
        size={AvatarSize.XS}
      />
      <div className={cl.textWrap}>
        <AppLink to={""}>
          <Text className={cl.author} text="Kevin" theme={TextTheme.ERROR} />
        </AppLink>
        <Text
          className={cl.message}
          text={t(
            "Это моё сообщение Это моё сообщение Это моё сообщение Это моё сообщение Это моё сообщение Это моё сообщение \n"
          )}
        />
      </div>
      <Text className={cl.timestamp} text="19:28" />
    </Card>
  );
};
