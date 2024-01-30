import { gameStore } from '@core/GameStore';

import { DrawWinterLevel } from './DrawWinterLevel';
import { FindSummerItems } from './FindSummerItems';

export const useMagicWinterGame = gameStore.registerGame({
  game: {
    slug: 'magic-winter',
    section: 'education',
    filter: 'world',
    month: 'january',
    name: 'Чарівниця зима',
    image: 'covers/magic-winter-450x350.png',
  },
  levels: [
    {
      path: 'find-items',
      element: FindSummerItems,
    },
    {
      path: 'draw-magic',
      element: DrawWinterLevel,
    },
  ],
});
