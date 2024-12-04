import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articles";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { SortOrder } from "shared/types/sort";
import { ArticlesSortField, ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (URLSearchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = URLSearchParams.get('order') as SortOrder;
      const sortFromUrl = URLSearchParams.get('sort') as ArticlesSortField;
      const searchFromUrl = URLSearchParams.get('search');
      const typeFromUrl = URLSearchParams.get('type') as ArticleType;

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl));
      }
      
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticles({}));
    }
  },
);