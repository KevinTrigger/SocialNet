import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation("not_found");

  return (
    <Page className={classNames(cl.NotFoundPage, {}, [className])} data-testid="NotFoundPage">
      {t("Страница не найдена")}
    </Page>
  );
};

export default memo(NotFoundPage);
