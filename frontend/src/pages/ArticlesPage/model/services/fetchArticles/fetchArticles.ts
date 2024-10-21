import { createAsyncThunk } from "@reduxjs/toolkit";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articles";

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticles',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
      
    try { 
          const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
              _limit: limit,
              _page: page
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