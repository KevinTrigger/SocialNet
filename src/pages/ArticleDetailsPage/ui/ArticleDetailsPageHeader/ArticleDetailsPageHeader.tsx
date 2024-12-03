import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetailsPageHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCanEditArticle } from "../../model/selectors/article";
import { getArticleDetailsData } from "entities/Article";
import { RoutePath } from "shared/const/router";
import { Button } from "shared/ui/Button";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation("");
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const handleEditPage = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cl.ArticleDetailsPageHeader, {}, [className])}>
      <Button onClick={onBackToList}>{t("< Все статьи")}</Button>
      {canEdit && (
        <Button className={cl.editBtn} onClick={handleEditPage}>
          {t("Редактировать")}
        </Button>
      )}
    </div>
  );
};
