import { configureStore } from '@reduxjs/toolkit';
import gameMenuReducer from './features/gameMenu/gameMenuSlice';
import coreReducer from './features/core/coreSlice';
import userReducer from './features/user/userSlice';
import childReducer from './features/childSlice';

export const store = configureStore({
  reducer: {
    gameMenu: gameMenuReducer,
    core: coreReducer,
    user: userReducer,
    child: childReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
