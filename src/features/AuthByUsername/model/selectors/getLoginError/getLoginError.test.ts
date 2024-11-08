import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe('getLoginError.test', () => {
   test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '123',
        error: 'error',
        isLoading: false
      }
    }
   expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
   expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
})