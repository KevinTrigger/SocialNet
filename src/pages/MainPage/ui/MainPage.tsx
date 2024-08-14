import { BugButton } from "app/providers/ErrorBoundary";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <div>{t("Главная страница")}</div>
      <BugButton />
      <div className={classNames("da", {}, [])}></div>
    </>
  );
};

export default MainPage;
