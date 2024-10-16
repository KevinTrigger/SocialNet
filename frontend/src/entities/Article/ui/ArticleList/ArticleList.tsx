import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ArticleList.module.scss";
import { Article, ArticleViewMode } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewMode;
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, view = ArticleViewMode.SMALL } = props;

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  return (
    <div className={classNames(cl.ArticleList, {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
