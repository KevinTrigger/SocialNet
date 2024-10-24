import { FC, useCallback, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ArticlesPageFilters.module.scss";
import {
  ArticleViewMode,
  ArticleViewSelector,
} from "entities/Article";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "../../model/selectors/articles";
import { Select } from "shared/ui/Select/Select";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);

  const sortOptions = useMemo(() => {
    return [
      {
        content: "возрастанию",
        value: "asc",
      },
      {
        content: "убыванию",
        value: "desc",
      },
    ];
  }, []);

  const onChangeView = useCallback(
    (view: ArticleViewMode) => {
      dispatch(articlesPageActions.setViewMode(view));
    },
    [dispatch]
  );

  return (
    <div className={classNames(cl.ArticlesPageFilters, {}, [className])}>
      <Select label="Сортировать по" options={sortOptions} />
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
    </div>
  );
};
