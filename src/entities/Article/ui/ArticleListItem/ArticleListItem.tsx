import { FC, HTMLAttributeAnchorTarget, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleViewMode,
} from "../../model/types/article";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import cl from "./ArticleListItem.module.scss";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye.svg?react";
import { Card } from "shared/ui/Card/Card";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { TextBlock } from "../TextBlock/TextBlock";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";
import AppLink from "shared/ui/AppLink/AppLink";
import { VStack } from "shared/ui/Stack/VStack/VStack";
import { HStack } from "shared/ui/Stack/HStack/HStack";

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
    navigate(RoutePath.article_details + article.id);
  }, [navigate, article]);

  if (isLoading) {
    return <ArticleListItemSkeleton view={view} />;
  }

  if (view == ArticleViewMode.BIG) {
    return (
      <div
        className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}
      >
        <Card className={cl.card}>
          <div className={cl.header}>
            <HStack gap="8">
              <Avatar rounded size={AvatarSize.XS} src={article.user.avatar} />
              <Text text={article.user.username} />
              <Text className={cl.date} text={article.createdAt} />
            </HStack>
            <VStack gap="8" className={cl.titleAndType}>
              <Text title={article.title} />
              {types}
            </VStack>
          </div>
          <div className={cl.imageWrap}>
            <img className={cl.image} src={article.img} alt={article.title} />
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
      to={RoutePath.article_details + article.id}
      target={target}
      className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}
    >
      <Card onClick={onOpenArticleDetails} className={cl.card}>
        <div className={cl.imageWrap}>
          <Text
            className={cl.date}
            text={article.createdAt}
            align={TextAlign.RIGHT}
          />
          <img
            className={cl.image}
            src={article.img}
            alt={article.title}
            width={50}
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
