import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../../types/profile";
import { t } from "i18next";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/getProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
      
    try { 
          const response = await extra.api.get<Profile>('/profile');
          
          return response.data;
      } catch (e) {
          console.log(e);
          return rejectWithValue(t('Ошибка'));
      }
  },
);