import { FC, useCallback, useMemo } from "react";
import { ArticleType } from "entities/Article";
import cl from "./ArticleTypeTabs.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, Tabs } from "shared/ui/Tabs";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
  const { className, value, onChangeType } = props;

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: "Все статьи",
      },
      {
        value: ArticleType.ECONOMICS,
        content: "Экономика",
      },
      {
        value: ArticleType.IT,
        content: "Айти",
      },
      {
        value: ArticleType.SCIENCE,
        content: "Наука",
      },
    ],
    []
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      if (tab.value !== value) {
        onChangeType(tab.value as ArticleType);
      }
    },
    [onChangeType, value]
  );

  return (
    <Tabs
      className={classNames(cl.tabs, {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
};
