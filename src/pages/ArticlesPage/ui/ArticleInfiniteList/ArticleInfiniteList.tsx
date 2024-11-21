import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articles";
import { getArticles } from "../../model/slice/articlesPageSlice";
import { ArticleList } from "entities/Article";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("");
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const articles = useSelector(getArticles.selectAll);

  if (error) {
    return (
      <Text
        theme={TextTheme.ERROR}
        title={t("Ошибка при загрузке списка статей")}
      />
    );
  }

  return (
    <ArticleList
      className={className}
      articles={articles}
      view={view}
      isLoading={isLoading}
    />
  );
};
