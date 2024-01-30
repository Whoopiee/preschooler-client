import { gameStore } from '@core/GameStore';
import { LogicOctoberLevel } from './LogicOctoberLevel';

export const useLogicOctoberGame = gameStore.registerGame({
  game: {
    slug: 'logic-october',
    section: 'education',
    filter: 'math',
    month: 'october',
    name: 'Логіка',
    image: 'covers/logics.png',
  },
  levels: {
    element: LogicOctoberLevel,
  },
});
