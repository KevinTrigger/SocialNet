import { createAsyncThunk } from "@reduxjs/toolkit";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getUserDataByIdQuery } from "../../api/userApi";
import { User } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export const initAuthData = createAsyncThunk<
  User, 
  void, 
  ThunkConfig<string>
  >('user/initAuthData', async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('Ошибка');
    }
      
    try { 
          const response = await dispatch(
            getUserDataByIdQuery(userId)
          ).unwrap();

          return response;
      } catch (e) {
          console.log(e);
          return rejectWithValue(t('Ошибка'));
      }
  },
);