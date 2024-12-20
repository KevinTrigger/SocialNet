import { rtkApi } from "shared/api/rtkApi";
import { User } from "../types/user";

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
});

export const useUsers = userApi.useGetUsersQuery;