import { createAsyncThunk } from "@reduxjs/toolkit";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleDetailsData',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
      
    try { 
          const response = await extra.api.get<Article>(`/articles/${articleId}`);
          
          if (!response.data) {
            throw new Error();
          }
          
          return response.data;
      } catch (e) {
          return rejectWithValue(t('Ошибка'));
      }
  },
);