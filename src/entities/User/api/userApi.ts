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
        method: 'GET'
      }),
    }),

    getUserDataById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
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

export const getUsersQuery = userApi.useGetUsersQuery;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;