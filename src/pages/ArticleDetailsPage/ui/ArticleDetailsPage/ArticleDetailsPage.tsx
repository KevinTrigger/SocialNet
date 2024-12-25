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
import { ToggleFeatures } from "shared/lib/features";
import { Card } from "shared/ui/deprecated/Card";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetailsPage.module.scss";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("");

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ToggleFeatures
          feature="isArticlePageGreeting"
          on={<ArticleRating articleId={id!} className={cl.recommendList} />}
          off={<Card>{t("Оценка статей временно не работает")}</Card>}
        />
        <ArticleRecommendationList className={cl.recommendList} />
        <ArticleDetailsComments className={cl.comments} id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
