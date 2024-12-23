import { createAsyncThunk } from "@reduxjs/toolkit";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";


export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
      
    try { 
          const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
              _limit: 9
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