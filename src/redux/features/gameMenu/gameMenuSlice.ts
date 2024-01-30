/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  Month,
  SectionWithStyle,
  Filter,
  Game,
} from '@customTypes/game';

import { gameStore } from '@core/GameStore';

type GameMenuState = {
  activeSection: SectionWithStyle | null;
  activeFilter: Filter | null;
  activeMonth: Month;
  games: Game[];
};

const initialState: GameMenuState = {
  activeSection: null,
  activeFilter: null,
  activeMonth: 'october', // monthService.getCurrent()
  games: [],
};

function filterGames({
  activeMonth,
  activeSection,
  activeFilter,
}: GameMenuState): Game[] {
  return gameStore
    .games[activeMonth]
    .filter(game => game.section === activeSection?.value)
    .filter(game => (
      activeSection?.value === 'education'
        ? !activeFilter || game.filter === activeFilter
        : !game.filter
    ));
}

const gameMenuSlice = createSlice({
  name: 'gameMenu',
  initialState,
  reducers: {
    selectMonth: (state, action: PayloadAction<Month>) => {
      state.activeMonth = action.payload;
      state.games = filterGames(state);
    },
    selectSection: (state, action: PayloadAction<SectionWithStyle>) => {
      state.activeSection = action.payload;
      state.games = filterGames(state);
    },
    selectFilter: (state, action: PayloadAction<Filter>) => {
      state.activeFilter = action.payload;
      state.games = filterGames(state);
    },
  },
});

export const {
  selectSection,
  selectFilter,
  selectMonth,
} = gameMenuSlice.actions;

export default gameMenuSlice.reducer;
