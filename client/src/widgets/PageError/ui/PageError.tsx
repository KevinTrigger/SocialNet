import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button/Button";
import cl from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cl.PageError, {}, [className])}>
      <p>{t("Что-то пошло не так...")}</p>
      <Button onClick={reloadPage}>
        {t('Перезагрузить страницу')}
      </Button>
    </div>
  );
};

export default PageError;