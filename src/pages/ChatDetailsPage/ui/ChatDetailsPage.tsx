import { memo } from "react";
import { useTranslation } from "react-i18next";
import cl from "./ChatDetailsPage.module.scss";

const ChatDetailsPage = () => {
  const { t } = useTranslation("");

  return <div className={cl.ChatDetailsPage}>{t("ChatDetailsPage")}</div>;
};

export default memo(ChatDetailsPage);
