import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetailsPage.module.scss";
import { memo, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { CommentForm } from "features/AddNewComment";
import { ArticleDetails, getArticleDetailsError } from "entities/Article";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");

  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <AppLink to={RoutePath.article_details} theme={AppLinkTheme.PRIMARY}>
          {"< Все статьи"}
        </AppLink>
        <ArticleDetails id={id} />
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
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
