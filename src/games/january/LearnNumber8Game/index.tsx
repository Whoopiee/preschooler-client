import { gameStore } from '@core/GameStore';

import { Angle8Level } from './Angle8Level';
import { DrawNumber8Level } from './DrawNumber8Level';
import { DiceJanuaryLevel } from './DragNumber8Level';

export const useLearnNumber8Game = gameStore.registerGame({
  game: {
    slug: 'number-8',
    section: 'education',
    filter: 'math',
    month: 'january',
    name: 'Вчимо цифру 8',
    image: 'covers/number8.png',
  },
  levels: [
    {
      path: 'draw',
      element: DrawNumber8Level,
    },
    {
      path: 'quiz',
      element: Angle8Level,
    },
    {
      path: 'drag-number-eight',
      element: DiceJanuaryLevel,
    },
  ],
});
