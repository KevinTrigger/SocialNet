import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleViewMode } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cl from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleViewMode;
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleViewMode.SMALL,
  } = props;

  const getSkeletons = (view: ArticleViewMode) =>
    new Array(view === ArticleViewMode.SMALL ? 9 : 3)
      .fill(0)
      .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        isLoading={isLoading}
      />
    );
  };

  return (
    <div className={classNames(cl.ArticleList, {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
};
