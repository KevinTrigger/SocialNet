import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUserAuthData } from "entities/User";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getCommentFormText } from "../../selectors/commentFormSelectors";
import { getArticleDetailsData } from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentFormActions } from "../../slice/addCommentFormSlice";


export const sendComment = createAsyncThunk<
  Comment, 
  void, 
  ThunkConfig<string>
  >(
    'addCommentForm/sendComment',
    async (_, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;

      const dispatch = useAppDispatch();
      const userData = getUserAuthData(getState());
      const text = getCommentFormText(getState());
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

            dispatch(addCommentFormActions.setText(''));
            console.log(response.data, ' data');
            return response.data;
        } catch (e) {
            return rejectWithValue(t('Ошибка'));
        }
    },
);