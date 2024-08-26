import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation("not_found");

  return (
    <div className={classNames(cl.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};

export default NotFoundPage;
