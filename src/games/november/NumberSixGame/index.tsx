import { gameStore } from '@core/GameStore';

import { DragNumberSixLevel } from './DragNumberSixLevel';
import { DrawNumberSixLevel } from './DrawNumberSixLevel';
import { DiceSixLevel } from './DiceSixLevel';

export const useNumberSixGame = gameStore.registerGame({
  game: {
    slug: 'number-six',
    section: 'education',
    filter: 'math',
    month: 'november',
    name: 'Вчимо цифру 6',
    image: 'covers/draw6Cover.png',
  },
  levels: [
    {
      path: 'draw-number-six',
      element: DrawNumberSixLevel,
    },
    {
      path: 'drag-number-six',
      element: DragNumberSixLevel,
    },
    {
      path: 'dice-number-six',
      element: DiceSixLevel,
    },
  ],
});
