import { FC, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

/**
 * @deprecated
 */

export const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cl.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          data-testid={tab.content}
          className={cl.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          onClick={clickHandle(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
