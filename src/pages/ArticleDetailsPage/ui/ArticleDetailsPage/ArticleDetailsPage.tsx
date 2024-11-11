import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { CommentForm } from "features/AddNewComment";
import {
  ArticleDetails,
  ArticleList,
  getArticleDetailsError,
} from "entities/Article";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendations } from "../../model/slice/articleDetailsPageRecommendationSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import cl from "./ArticleDetailsPage.module.scss";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");

  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, [dispatch, id]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  if (!id) {
    return (
      <div className={cl.ArticleDetailsPage}>{t("Статья не найдена")}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={cl.ArticleDetailsPage}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <div className={cl.recommendWrap}>
          <Text size={TextSize.L} title="Рекомендуем" />
          <ArticleList
            className={cl.recommendList}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            target={"_blank"}
          />
        </div>
        {!error && (
          <>
            <Text className={cl.commentTitle} title="Комментарии" />
            <CommentForm
              className={cl.commentForm}
              onSendComment={onSendComment}
            />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
          </>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
