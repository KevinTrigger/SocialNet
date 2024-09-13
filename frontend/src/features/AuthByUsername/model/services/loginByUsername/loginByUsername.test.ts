import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { User, userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

const formData = { 
  username: '123', 
  password: '123' 
}

describe('loginByUsername.test', () => {
   test('success login', async () => {
    const userData: User = {
      id: '1',
      username: '123',
    }

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(formData)

    // Проверка на вызов dispatch с соответствующим action
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    // dispatch вызван 3 раза
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // Проверка на отправку мокового POST-request
    expect(mockedAxios.post).toHaveBeenCalled();
    // Проверка полученного ответа на статус fulfilled
    expect(result.meta.requestStatus).toBe('fulfilled');
    // Ответ от сервера хранит информацию о пользователе User
    expect(result.payload).toEqual(userData)
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(formData)
    
    // dispatch вызван 2 раза
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // Проверка на отправку мокового POST-request
    expect(mockedAxios.post).toHaveBeenCalled();
    // Проверка полученного ответа на статус rejected
    expect(result.meta.requestStatus).toBe('rejected')
    // Ответ от сервера хранит сообщение об ошибке
    expect(result.payload).toBe(undefined)
  });
})