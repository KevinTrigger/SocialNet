import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ChatDetailsPage.module.scss";

interface ChatDetailsPageProps {
  className?: string;
}

const ChatDetailsPage: FC<ChatDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("");

  return (
    <div className={classNames(cl.ChatDetailsPage, {}, [className])}>
      {t('ChatDetailsPage')}
    </div>
  );
};

export default memo(ChatDetailsPage);
