import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Page } from "widgets/Page";

const ForbiddenPage = () => {
  const { t } = useTranslation("forbidden");
  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate(-1);
  };

  return (
    <Page>
      <VStack gap="8">
        <Button onClick={handleBackNavigate}>
          {t("< Предыдущая страница")}
        </Button>
        <Text title={t("У Вас нет прав для просмотра данной страницы")} />
      </VStack>
    </Page>
  );
};

export default memo(ForbiddenPage);
