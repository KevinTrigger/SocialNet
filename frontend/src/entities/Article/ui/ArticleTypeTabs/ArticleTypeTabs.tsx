import { FC, useCallback, useMemo } from "react";
import { ArticleType } from "entities/Article";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import cl from "./ArticleTypeTabs.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

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
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
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
