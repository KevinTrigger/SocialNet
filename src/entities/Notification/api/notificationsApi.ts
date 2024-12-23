import { Notification } from "../model/types/notification";
import { rtkApi } from "shared/api/rtkApi";

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], void>({
      query: () => ({
        url: "/notifications",
      }),
    }),
  }),
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;