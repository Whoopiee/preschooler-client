import { gameStore } from '@core/GameStore';

import { LineOfLifeDragLevel } from './LineOfLifeDragLevel';

export const useLineOfLifeGame = gameStore.registerGame({
  game: {
    slug: 'line-of-life',
    section: 'education',
    filter: 'society',
    month: 'december',
    name: 'Лінія життя людини',
    image: 'covers/lineOfLife.png',
  },
  levels: {
    element: LineOfLifeDragLevel,
  },
});
