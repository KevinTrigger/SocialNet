import { memo } from "react";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleDetails } from "entities/Article";
import { Page } from "widgets/Page/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationList } from "features/ArticleRecommendationList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import cl from "./ArticleDetailsPage.module.scss";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationList className={cl.recommendList} />
        <ArticleDetailsComments className={cl.comments} id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
