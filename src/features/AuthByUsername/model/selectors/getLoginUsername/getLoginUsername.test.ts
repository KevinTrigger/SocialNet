import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

const initialState: DeepPartial<StateSchema> = {
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
    const state: DeepPartial<StateSchema> = {}
   expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
})