import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ArticleEditPage.module.scss";
import { Page } from "widgets/Page/Page";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";

const ArticleEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cl.ArticleEditPage, {}, [])}>
      {isEdit ? (
        <Text title={`Страница редактирования статьи ID ${id}`} />
      ) : (
        <Text title={"Создание новой статьи"} />
      )}
    </Page>
  );
};

export default memo(ArticleEditPage);
