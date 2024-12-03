import { FC, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { CommentForm } from "features/AddNewComment";
import { CommentList } from "entities/Comment";
import { useSelector } from "react-redux";
import { getArticleDetailsError } from "entities/Article";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import cl from "./ArticleDetailsComments.module.scss";
import { Text, TextSize, TextTheme } from "shared/ui/Text";

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (
  props
) => {
  const { className, id } = props;
  const { t } = useTranslation("");
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return <Text title={t("Статья не найдена")} theme={TextTheme.ERROR} />;
  }

  if (error) {
    return null;
  }

  return (
    <div className={classNames("", {}, [className])}>
      <Text size={TextSize.L} title={t("Комментарии")} />
      <CommentForm className={cl.commentForm} onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  );
};
