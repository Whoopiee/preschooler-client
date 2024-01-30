import { gameStore } from '@core/GameStore';

import { DrawNumber15Level } from './DrawNumber15Level';
import { CountLevel } from './CountLevel';
import { StrawberryLevel } from './StrawberryLevel';

export const useDigitsGame = gameStore.registerGame({
  game: {
    slug: 'digits',
    section: 'education',
    filter: 'math',
    month: 'october',
    name: 'Повторимо цифри 1-5',
    image: 'covers/digits.png',
  },
  levels: [
    {
      path: 'draw-number-1-5',
      element: DrawNumber15Level,
    },
    {
      path: 'count',
      element: CountLevel,
    },
    {
      path: 'strawberry',
      element: StrawberryLevel,
    },
  ],
});
