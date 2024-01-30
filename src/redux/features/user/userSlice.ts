/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '@customTypes/auth';
import { authService } from '@services/authService';
import { accessTokenService } from '@services/accessTokenService';

type InitialState = {
  user: User;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    Children: [],
    token: '',
  },
  loading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    assignUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    leaveUser: (state) => {
      accessTokenService.remove();
      state.user = initialState.user;
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = '';
      state.user = action.payload;
      accessTokenService.save(action.payload.token);
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = 'Невірний e-mail або пароль';
      state.error = action.error.code === 'ERR_BAD_REQUEST'
        ? 'Невірний e-mail або пароль'
        : 'Помилка під час логіну. Спробуйте ще раз';
      state.loading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.error = '';
      state.user = { ...action.payload, Children: [] };
      accessTokenService.save(action.payload.token);
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.code === 'ERR_BAD_REQUEST'
        ? 'Такий користувач вже існує'
        : 'На жаль, реєстрація не вдалась. Спробуйте ще раз';
      state.loading = false;
    });
    builder.addCase(refresh.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.loading = false;
    });
    builder.addCase(refresh.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  assignUser,
  leaveUser,
} = userSlice.actions;

export default userSlice.reducer;

export const login = createAsyncThunk(
  'user/login',
  authService.login,
);

export const register = createAsyncThunk(
  'user/register',
  authService.register,
);

export const refresh = createAsyncThunk(
  'user/refresh',
  authService.refresh,
);
