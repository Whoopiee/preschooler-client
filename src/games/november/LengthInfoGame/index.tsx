import { gameStore } from '@core/GameStore';

import { LengthInfoLevel } from './LengthInfoLevel';
import { SnailLengthLevel } from './SnailLengthLevel';
import { DrawLengthLevel } from './DrawLengthLevel';

export const useLengthInfoGame = gameStore.registerGame({
  game: {
    slug: 'length-info',
    section: 'education',
    filter: 'math',
    month: 'november',
    name: 'Визначення довжини',
    image: 'covers/length.png',
  },
  levels: [
    {
      path: 'start',
      element: LengthInfoLevel,
    },
    {
      path: 'snail-length',
      element: SnailLengthLevel,
    },
    {
      path: 'draw-length',
      element: DrawLengthLevel,
    },
  ],
});
