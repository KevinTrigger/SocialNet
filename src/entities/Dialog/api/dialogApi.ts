
import { rtkApi } from "shared/api/rtkApi";
import { Dialog } from "../model/types/dialog";

const dialogsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getDialogs: build.query<Dialog[], string>({
      query: () => ({
        url: "/dialogs",
      }),
    }),
  }),
});

export const useDialogs = dialogsApi.useGetDialogsQuery;