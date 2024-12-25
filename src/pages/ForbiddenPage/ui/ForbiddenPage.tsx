import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/deprecated/Button";
import { VStack } from "shared/ui/deprecated/Stack";
import { Text } from "shared/ui/deprecated/Text";
import { Page } from "widgets/Page";

const ForbiddenPage = () => {
  const { t } = useTranslation("forbidden");
  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate(-1);
  };

  return (
    <Page data-testid="ForbiddenPage">
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
