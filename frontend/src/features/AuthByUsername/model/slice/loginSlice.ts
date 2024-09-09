import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginByUsername.pending, (state, action) => {
      console.log(state, ' state pending');
      console.log(action, ' action pending')
    })
    .addCase(loginByUsername.fulfilled, (state, action) => {
      console.log(state, ' state fulfilled');
      console.log(action, ' action fulfilled')
    })
    .addCase(loginByUsername.rejected, (state, action) => {
      console.log(state, ' state rejected');
      console.log(action, ' action rejected')
    })
  },
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

export default loginSlice.reducer