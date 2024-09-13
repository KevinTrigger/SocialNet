import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

const initialState: Partial<StateSchema> = {
  loginForm: {
    username: 'admin',
    password: '123',
  }
}

describe('getLoginUsername.test', () => {
   test('should return current username', () => {
    const state = initialState;
   expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });

  test('should return empty string', () => {
    const state: Partial<StateSchema> = {}
   expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
})