import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "shared/ui/Text";
import { ArticleList } from "entities/Article";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";
import cl from "./ArticleRecommendationList.module.scss";

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList: FC<ArticleRecommendationListProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation("");
  const { data: articles, isLoading, error } = useArticleRecommendationsList(8);

  if (isLoading || error || !articles) return null;

  return (
    <div className={classNames("", {}, [className])}>
      <Text size={TextSize.L} title={t("Рекомендуем")} />
      <ArticleList
        className={cl.recommendList}
        articles={articles}
        isLoading={isLoading}
        target={"_blank"}
      />
    </div>
  );
};
