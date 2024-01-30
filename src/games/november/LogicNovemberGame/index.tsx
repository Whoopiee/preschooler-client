import { gameStore } from '@core/GameStore';
import { LogicNovemberLevel } from './LogicNovemberLevel';

export const useLogicNovemberGame = gameStore.registerGame({
  game: {
    slug: 'logic',
    section: 'education',
    filter: 'math',
    month: 'november',
    name: 'Логіка',
    image: 'covers/logics.png',
  },
  levels: {
    element: LogicNovemberLevel,
  },
});
