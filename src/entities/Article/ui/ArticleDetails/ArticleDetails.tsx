import { FC, memo, ReactNode, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg?react";
import EyeIcon from "shared/assets/icons/eye.svg?react";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { TextBlock } from "../TextBlock/TextBlock";
import { ImageBlock } from "../ImageBlock/ImageBlock";
import cl from "./ArticleDetails.module.scss";
import { Skeleton } from "shared/ui/deprecated/Skeleton";
import {
  Text,
  TextAlign,
  TextSize,
  TextTheme,
} from "shared/ui/deprecated/Text";
import { Avatar } from "shared/ui/deprecated/Avatar";
import { HStack, VStack } from "shared/ui/deprecated/Stack";
import { Icon } from "shared/ui/deprecated/Icon";

interface ArticleDetailsProps {
  className?: string;
  id?: string;
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
          border={"100%"}
          width={170}
          height={170}
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
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <>
        <div className={cl.imageWrap}>
          <Avatar size={170} src={articleData?.img} />
        </div>
        <Text
          size={TextSize.L}
          title={articleData?.title}
          text={articleData?.subtitle}
        />
        <VStack gap="4" className={cl.statistics}>
          <HStack align="center" className={cl.statistics__item}>
            <Icon className={cl.icon} Svg={EyeIcon} />
            <Text
              text={String(articleData?.views)}
              data-testid="ArticleDetails.Views"
            />
          </HStack>
          <HStack className={cl.statistics__item}>
            <Icon className={cl.icon} Svg={CalendarIcon} />
            <Text text={articleData?.createdAt} />
          </HStack>
        </VStack>
        {articleData?.blocks.map(renderBlock)}
      </>
    );
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cl.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
