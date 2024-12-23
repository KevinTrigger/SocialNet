import { memo } from "react";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleDetails } from "entities/Article";
import { Page } from "widgets/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationList } from "features/ArticleRecommendationList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "features/ArticleRating";
import { toggleFeatures } from "shared/lib/features";
import { Card } from "shared/ui/Card";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetailsPage.module.scss";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("");

  const articleRatingCard = toggleFeatures({
    name: "isArticleRatingEnabled",
    on: () => <ArticleRating articleId={id!} className={cl.recommendList} />,
    off: () => <Card>{t("Оценка статей временно не работает")}</Card>,
  });

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {articleRatingCard}
        <ArticleRecommendationList className={cl.recommendList} />
        <ArticleDetailsComments className={cl.comments} id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
