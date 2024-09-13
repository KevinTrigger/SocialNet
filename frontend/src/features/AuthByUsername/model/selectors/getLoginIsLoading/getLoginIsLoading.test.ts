import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe('getLoginIsLoading.test', () => {
   test('should return true', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true
      }
    }
   expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: Partial<StateSchema> = {}
   expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
})