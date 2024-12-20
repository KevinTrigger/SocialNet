
import { rtkApi } from "shared/api/rtkApi";
import { Dialog } from "../types/dialog";

const dialogsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getDialogs: build.query<Dialog[], string>({
      query: () => ({
        url: "/dialogs",
        params: {
          
        }
      }),
    }),
  }),
});

export const useDialogs = dialogsApi.useGetDialogsQuery;