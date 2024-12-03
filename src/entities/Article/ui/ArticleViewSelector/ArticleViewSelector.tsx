import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleViewMode } from "entities/Article/model/types/article";
import TiledIcon from "shared/assets/icons/tiled.svg?react";
import ListIcon from "shared/assets/icons/list.svg?react";
import cl from "./ArticleViewSelector.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Icon } from "shared/ui/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleViewMode;
  onViewClick: (newView: ArticleViewMode) => void;
}

const viewTypes = [
  {
    view: ArticleViewMode.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleViewMode.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, onViewClick, view } = props;

  const onClick = (newView: ArticleViewMode) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cl.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          className={cl.viewBtn}
          onClick={onClick(viewType.view)}
        >
          <Icon
            className={classNames(cl.icon, {
              [cl.notSelected]: viewType.view !== view,
            })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
};
