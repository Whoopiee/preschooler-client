import { gameStore } from '@core/GameStore';

import { LogicDecemberLevel } from './LogicDecemberLevel';

export const useLogicDecemberGame = gameStore.registerGame({
  game: {
    slug: 'logic-nov',
    section: 'education',
    filter: 'math',
    month: 'december',
    name: 'Логіка',
    image: 'covers/logics.png',
  },
  levels: {
    element: LogicDecemberLevel,
  },
});
