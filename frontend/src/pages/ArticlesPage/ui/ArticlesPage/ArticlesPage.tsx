import { FC, memo, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ArticleList,
} from "entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articles";
import { Page } from "widgets/Page/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import cl from "./ArticlesPage.module.scss";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const articles = useSelector(getArticles.selectAll);

  useEffect(() => {
    dispatch(initArticlesPage());
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  if (error) {
    return (
      <Text
        theme={TextTheme.ERROR}
        title={"Ошибка при загрузке списка статей"}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cl.ArticlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
