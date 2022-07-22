import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// declaring the types for our state
export type loginState = {
  email: string;
  password: string;
};

const initialState: loginState = {
  email: '',
  password: '',
};

interface TLoginPayload {
  email: string;
  password: string;
}

export const counterSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TLoginPayload>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = '';
      state.password = '';
    },
  },
});

export const { login, logout } = counterSlice.actions;

export const loginUser = (state: RootState) => state.loginUser;

export default counterSlice.reducer;
