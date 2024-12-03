import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RatingCard } from "entities/Rating";
import {
  useGetArticleRating,
  useRateArticleRating,
} from "../../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Skeleton } from "shared/ui/Skeleton";
import { Card } from "shared/ui/Card";
import { Text, TextTheme } from "shared/ui/Text";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;
  const { t } = useTranslation("");
  const userData = useSelector(getUserAuthData);

  const { data, isLoading, error } = useGetArticleRating({
    articleId,
    userId: userData?.id || "",
  });

  const [rateArticleMutation] = useRateArticleRating();

  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          rate: starsCount,
          userId: userData?.id || "",
          feedback,
        });
      } catch (error) {
        throw new Error("Ошибка отправки рейтинга");
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton className={className} border={"8px"} height={90} />;
  }

  if (error) {
    return (
      <Card>
        <Text
          theme={TextTheme.ERROR}
          title={t("Ошибка при получении данных о рейтинге")}
          text={t("Попробуйте перезагрузить страницу")}
        />
      </Card>
    );
  }

  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      onAccept={onAccept}
      onCancel={onCancel}
      hasFeedback={true}
      title={t("Оцените статью")}
      feedbackTitle={t("Оставьте отзыв о статье, это поможет нам сделать ")}
    />
  );
};

export default memo(ArticleRating);
