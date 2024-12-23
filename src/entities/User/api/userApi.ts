import { rtkApi } from "shared/api/rtkApi";
import { User } from "../model/types/user";
import { JsonSettings } from "../model/types/jsonSettings";

interface SetJsonSettingsArg {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: "/users",
      }),
    }),

    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({jsonSettings, userId}) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings
        }
      })
    })
  }),
});

export const useUsers = userApi.useGetUsersQuery;
export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;