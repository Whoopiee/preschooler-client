/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Game } from '@customTypes/game';

type GameState = {
  activeGame: Game | null;
  isLevelActive: boolean;
};

const initialState: GameState = {
  activeGame: null,
  isLevelActive: false,
};

const coreSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<Game>) => {
      state.activeGame = action.payload;
    },
    startLevel: (state) => {
      state.isLevelActive = true;
    },
    finishGame: (state) => {
      state.activeGame = null;
      state.isLevelActive = false;
    },
  },
});

export const {
  startGame,
  finishGame,
  startLevel,
} = coreSlice.actions;

export default coreSlice.reducer;
