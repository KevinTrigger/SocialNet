import { FC, memo, ReactNode, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./ArticleDetails.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import CalendarIcon from "shared/assets/icons/calendar.svg?react";
import EyeIcon from "shared/assets/icons/eye.svg?react";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { TextBlock } from "../TextBlock/TextBlock";
import { ImageBlock } from "../ImageBlock/ImageBlock";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props;
  const { t } = useTranslation("article-details");

  let content: ReactNode;

  const dispatch = useAppDispatch();
  const articleData = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <CodeBlock key={block.id} className={cl.block} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ImageBlock key={block.id} className={cl.block} block={block} />;
      case ArticleBlockType.TEXT:
        return <TextBlock key={block.id} className={cl.block} block={block} />;
      default:
        return null;
    }
  }, []);

  if (isLoading) {
    content = (
      <div className={cl.skeleton}>
        <Skeleton
          className={cl.image}
          width={170}
          height={170}
          border={"50%"}
        />
        <Skeleton className={cl.skeleton_title} width={300} height={32} />
        <Skeleton className={cl.skeleton} width={600} height={24} />
        <Skeleton className={cl.skeleton} width={"100%"} height={200} />
        <Skeleton className={cl.skeleton} width={"100%"} height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        className={cl.textError}
        align={TextAlign.CENTER}
        title={t("Произошла ошибка при загрузке статьи")}
        text={t(
          "Попробуйте перезагрузить страницу или убедитесь, что статья по данному адресу существует"
        )}
      />
    );
  } else {
    content = (
      <>
        <div className={cl.imageWrap}>
          <Avatar size={AvatarSize.XL} src={articleData?.img} />
        </div>
        <Text
          size={TextSize.L}
          title={articleData?.title}
          text={articleData?.subtitle}
        />
        <div className={cl.statistics}>
          <div className={cl.statistics__item}>
            <Icon className={cl.icon} Svg={EyeIcon} />
            <Text text={String(articleData?.views)} />
          </div>
          <div className={cl.statistics__item}>
            <Icon className={cl.icon} Svg={CalendarIcon} />
            <Text text={articleData?.createdAt} />
          </div>
        </div>
        {articleData?.blocks.map(renderBlock)}
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cl.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
