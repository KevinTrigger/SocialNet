import { FC, HTMLAttributeAnchorTarget } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleViewMode } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { HStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view?: ArticleViewMode;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleViewMode.SMALL,
  } = props;

  const getSkeletons = (view: ArticleViewMode) =>
    new Array(view === ArticleViewMode.SMALL ? 12 : 3)
      .fill(0)
      .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        isLoading={isLoading}
        target={target}
      />
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <HStack
        data-testid="ArticleList"
        gap="32"
        className={classNames("", {}, [className])}
      >
        <Text size={TextSize.L} title={"Статьи не найдены"} />
      </HStack>
    );
  }

  return (
    <HStack
      className={classNames("", {}, [className])}
      wrap="wrap"
      gap="32"
      data-testid="ArticleList"
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </HStack>
  );
};
