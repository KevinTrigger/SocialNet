import { memo } from "react";
import { Page } from "widgets/Page";
import cl from "./ArticleEditPage.module.scss";

const ArticleEditPage = () => {
  return <Page className={cl.ArticleEditPage}>Редактирование статьи</Page>;
};

export default memo(ArticleEditPage);
