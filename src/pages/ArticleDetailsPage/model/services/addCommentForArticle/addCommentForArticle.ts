import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUserAuthData } from "entities/User";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getArticleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";


export const addCommentForArticle = createAsyncThunk<
  Comment, 
  string, 
  ThunkConfig<string>
  >(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
      const { extra, rejectWithValue, getState, dispatch } = thunkApi;
      
      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());
      
      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }
      
      try {
            const response = await extra.api.post<Comment>('/comments', {
              articleId: article?.id,
              userId: userData?.id,
              text
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue(t('Ошибка'));
        }
    },
);