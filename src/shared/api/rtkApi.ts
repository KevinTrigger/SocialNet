import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "shared/const/baseUrl";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    }
  }),
  endpoints: () => ({}),
})