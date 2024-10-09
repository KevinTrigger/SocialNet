import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetailsPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { Comment, CommentList } from "entities/Comment";

interface ArticleDetailsPageProps {
  className?: string;
}

const comments: Comment[] = [
  {
    id: "1",
    text: "Привет, супер статья",
    user: {
      id: "1",
      username: "Mr.Jason",
    },
  },
  {
    id: "2",
    text: "Привет, супер!!!",
    user: {
      id: "2",
      username: "Mr.Mister",
    },
  },
];

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article-details");

  if (!id) {
    return (
      <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={cl.commentTitle} title="Комментарии" />
      <CommentList comments={comments} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
