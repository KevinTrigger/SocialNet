import { FC, HTMLAttributeAnchorTarget, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleViewMode,
} from "../../model/types/article";
import { TextBlock } from "../TextBlock/TextBlock";
import { useNavigate } from "react-router-dom";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";
import EyeIcon from "shared/assets/icons/eye.svg?react";
import cl from "./ArticleListItem.module.scss";
import { Text, TextAlign, TextSize } from "shared/ui/deprecated/Text";
import { Card } from "shared/ui/deprecated/Card";
import { HStack, VStack } from "shared/ui/deprecated/Stack";
import { Avatar } from "shared/ui/deprecated/Avatar";
import { Button, ButtonTheme } from "shared/ui/deprecated/Button";
import { Icon } from "shared/ui/deprecated/Icon";
import { AppLink } from "shared/ui/deprecated/AppLink";
import { getRouteArticleDetails } from "shared/const/router";
import { AppImage } from "shared/ui/deprecated/AppImage";
import { Skeleton } from "shared/ui/deprecated/Skeleton";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewMode;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, isLoading, view, target } = props;
  const types = <Text text={article.type.join(`,  `)} className={cl.types} />;
  const textBlock = article.blocks.find((block) => {
    if (block.type === ArticleBlockType.TEXT) return block.paragraphs;
  }) as ArticleTextBlock;

  const navigate = useNavigate();
  const onOpenArticleDetails = useCallback(() => {
    navigate(getRouteArticleDetails(article.id));
  }, [navigate, article]);

  if (isLoading) {
    return <ArticleListItemSkeleton view={view} />;
  }

  if (view == ArticleViewMode.BIG) {
    return (
      <div
        data-testid="ArticleListItem"
        className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}
      >
        <Card className={cl.card}>
          <div className={cl.header}>
            <HStack gap="8">
              <Avatar rounded size={40} src={article.user?.avatar} />
              <Text text={article.user?.username} />
              <Text className={cl.date} text={article.createdAt} />
            </HStack>
            <VStack gap="8" className={cl.titleAndType}>
              <Text title={article.title} />
              {types}
            </VStack>
          </div>
          <div className={cl.imageWrap}>
            <AppImage
              className={cl.image}
              src={article.img}
              alt={article.title}
              fallback={<Skeleton width={"100%"} height={200} />}
            />
          </div>
          {textBlock && (
            <TextBlock block={textBlock} className={cl.textBlock} />
          )}
          <HStack justify="between" align="center" className={cl.footer}>
            <Button onClick={onOpenArticleDetails} theme={ButtonTheme.OUTLINE}>
              Читать далее...
            </Button>
            <HStack className={cl.views}>
              <Text text={`${article.views}`} />
              <Icon className={cl.icon} Svg={EyeIcon} />
            </HStack>
          </HStack>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={getRouteArticleDetails(article.id)}
      target={target}
      className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}
      data-testid="ArticleListItem"
      data-view={`${view}`}
    >
      <Card onClick={onOpenArticleDetails} className={cl.card}>
        <div className={cl.imageWrap}>
          <Text
            className={cl.date}
            text={article.createdAt}
            align={TextAlign.RIGHT}
          />
          <AppImage
            className={cl.image}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton className={cl.image} />}
          />
        </div>
        <div className={cl.infoWrap}>
          <div className={cl.stats}>
            {types}
            <div className={cl.views}>
              <Text text={`${article.views}`} />
              <Icon className={cl.icon} Svg={EyeIcon} />
            </div>
          </div>
          <Text
            align={TextAlign.CENTER}
            className={cl.title}
            text={article.title}
            size={TextSize.L}
          />
        </div>
      </Card>
    </AppLink>
  );
};
