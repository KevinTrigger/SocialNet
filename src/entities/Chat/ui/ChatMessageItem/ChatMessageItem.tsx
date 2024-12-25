import { FC } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ChatMessageItem.module.scss";
import { AppLink } from "shared/ui/deprecated/AppLink";
import { Text, TextTheme } from "shared/ui/deprecated/Text";
import { Card } from "shared/ui/deprecated/Card";
import { Avatar } from "shared/ui/deprecated/Avatar";

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
        size={40}
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
