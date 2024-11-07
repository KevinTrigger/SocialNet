import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetailsPage.module.scss";
import { memo, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { CommentForm } from "features/AddNewComment";
import {
  ArticleDetails,
  ArticleList,
  getArticleDetailsError,
} from "entities/Article";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import Button from "shared/ui/Button/Button";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendations } from "../model/slice/articleDetailsPageRecommendationSlice";
import { getArticleRecommendationsIsLoading } from "../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../model/slice";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );
  // const recommendationsError = useSelector(getArticleRecommendationsError);

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

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  if (!id) {
    return (
      <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>{"< Все статьи"}</Button>
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
