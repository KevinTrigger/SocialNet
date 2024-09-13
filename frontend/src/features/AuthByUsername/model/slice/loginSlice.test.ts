import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe('loginSlice.test', () => {
  test('set username', () => {
    const state: Partial<LoginSchema> = { username: 'author' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('123')
  )).toEqual({ username: '123' });
  })

  test('set password', () => {
    const state: Partial<LoginSchema> = { password: 'author' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123')
  )).toEqual({ password: '123' });
  })
})