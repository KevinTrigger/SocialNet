import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ArticlesPageFilters.module.scss";
import {
  ArticleSortSelector,
  ArticlesSortField,
  ArticleViewMode,
  ArticleViewSelector,
} from "entities/Article";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from "../../model/selectors/articles";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";
import { fetchArticles } from "../../model/services/fetchArticles/fetchArticles";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const searchValue = useSelector(getArticlesPageSearch);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 300);

  const onChangeView = useCallback(
    (view: ArticleViewMode) => {
      dispatch(articlesPageActions.setViewMode(view));
    },
    [dispatch]
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSort = useCallback(
    (newSort: ArticlesSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames(cl.ArticlesPageFilters, {}, [className])}>
      <div className={cl.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          className={cl.viewSelector}
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={cl.search}>
        <Input
          placeholder={"Поиск"}
          value={searchValue}
          onChange={onChangeSearch}
        />
      </Card>
    </div>
  );
};
