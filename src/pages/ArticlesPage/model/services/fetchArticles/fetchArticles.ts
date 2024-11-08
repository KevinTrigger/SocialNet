import { createAsyncThunk } from "@reduxjs/toolkit";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import { getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType } from "../../selectors/articles";
import { addQueryParams } from "shared/lib/ui/addQueryParams/addQueryParams";

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
  'articlesPage/fetchArticles',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const page = getArticlesPageNum(getState());
    const limit = getArticlesPageLimit(getState());
    const search = getArticlesPageSearch(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const type = getArticlesPageType(getState());
      
    try { 
          addQueryParams({
            sort, order, search, type
          })
          const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
              _limit: limit,
              _page: page,
              _sort: sort,
              _order: order,
              type: type === ArticleType.ALL ? undefined : type,
              q: search
            }
          });

          if (!response.data) {
            throw new Error();
          }
          
          return response.data;
      } catch (e) {
          return rejectWithValue(t('Ошибка'));
      }
  },
);