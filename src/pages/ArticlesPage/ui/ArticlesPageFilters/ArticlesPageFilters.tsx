import { FC, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ArticlesPageFilters.module.scss";
import {
  ArticlesSortField,
  ArticleType,
  ArticleViewMode,
} from "entities/Article";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articles";
import { SortOrder } from "shared/types/sort";
import { fetchArticles } from "../../model/services/fetchArticles/fetchArticles";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { HStack } from "shared/ui/deprecated/Stack";
import { Card } from "shared/ui/deprecated/Card";
import { Input } from "shared/ui/deprecated/Input";
import { ArticleSortSelector } from "features/ArticleSortSelector";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { ArticleTypeTabs } from "features/ArticleTypeTabs";

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
  const type = useSelector(getArticlesPageType);

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

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames(cl.ArticlesPageFilters, {}, [className])}>
      <HStack justify="between" className={cl.sortWrapper}>
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
      </HStack>
      <Card className={cl.search}>
        <Input
          className={cl.searchInput}
          placeholder={"Поиск"}
          value={searchValue}
          onChange={onChangeSearch}
          data-testid={"ArticlesPageFilters.Search"}
        />
      </Card>
      <ArticleTypeTabs
        className={cl.tabs}
        onChangeType={onChangeType}
        value={type}
      />
    </div>
  );
};
