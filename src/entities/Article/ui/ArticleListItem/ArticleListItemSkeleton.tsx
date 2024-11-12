import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleViewMode } from "entities/Article/model/types/article";
import cl from "./ArticleListItem.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Card } from "shared/ui/Card/Card";
import { HStack, VStack } from "shared/ui/Stack";

interface ArticleListItemSkeletonProps {
  view?: ArticleViewMode;
  className?: string;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (
  props
) => {
  const { className, view } = props;

  if (view === ArticleViewMode.BIG) {
    return (
      <div
        className={classNames(cl.ArticleListItem, {}, [className, cl[view]])}
      >
        <Card className={cl.card}>
          <div className={cl.header}>
            <HStack align="start" gap="8">
              <Skeleton border={"50%"} width={40} height={40} />
              <Skeleton width={200} height={25} />
              <Skeleton className={cl.date} width={150} height={30} />
            </HStack>
            <VStack gap="8">
              <Skeleton height={40} width={"30%"} />
              <Skeleton height={40} width={"20%"} />
            </VStack>
          </div>
          <div className={cl.imageWrap}>
            <Skeleton className={cl.image} width={"100%"} height={300} />
          </div>
          <Skeleton className={cl.textBlock} height={50} width={"20%"} />
          <Skeleton
            className={cl.textBlockSkeleton}
            height={160}
            width={"100%"}
          />
          <HStack justify="between" className={cl.footerSkeleton}>
            <Skeleton height={60} width={200} />
            <HStack className={cl.views}>
              <Skeleton height={30} width={100} />
            </HStack>
          </HStack>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cl.ArticleListItem, {}, [className])}>
      <Card className={cl.card}>
        <div className={cl.imageWrap}>
          <Skeleton
            className={cl.imageSkeleton}
            width={200}
            height={200}
          />
        </div>
        <div className={cl.infoWrap}>
          <div className={cl.statsSkeleton}>
            <Skeleton width={120} height={30} />
            <div className={cl.views}>
              <Skeleton height={20} width={30} />
              <Skeleton className={cl.icon} height={20} width={20} />
            </div>
          </div>
          <Skeleton
            className={cl.title}
          />
        </div>
      </Card>
    </div>
  );
};
