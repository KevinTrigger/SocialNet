import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/profile";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
      
    try { 
          const response = await extra.api.get<Profile>('/profile');
          return response.data;
      } catch (e) {
          return rejectWithValue(t('Ошибка'));
      }
  },
);