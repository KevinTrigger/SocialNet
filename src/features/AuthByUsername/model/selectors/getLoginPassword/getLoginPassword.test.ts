import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe('getLoginPassword.test', () => {
   test('should return password value - 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '123',
      }
    }
   expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {}
   expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
})