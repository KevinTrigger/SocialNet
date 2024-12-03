import { getUserAuthData } from "entities/User";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Text } from "shared/ui/Text";
import { Page } from "widgets/Page";

const MainPage = () => {
  const { t } = useTranslation("main");
  const authData = useSelector(getUserAuthData);

  const textContent = authData
    ? "Добро пожаловать, " + authData.username
    : "Для доступа ко всем страницам сайта необходимо авторизоваться";

  return (
    <Page>
      <Text title={t("Главная страница")} text={textContent} />
    </Page>
  );
};

export default memo(MainPage);
