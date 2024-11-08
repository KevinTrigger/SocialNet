import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import cl from "./ArticleCreatePage.module.scss";
import { Text } from "shared/ui/Text/Text";
import { ArticleCreateForm } from "features/CreateNewArticle";

const ArticleCreatePage = () => {
  const { t } = useTranslation("");

  return (
    <Page className={cl.ArticleCreatePage}>
      <Text title={t("Создание новой статьи")} />
      <ArticleCreateForm />
    </Page>
  );
};

export default memo(ArticleCreatePage);