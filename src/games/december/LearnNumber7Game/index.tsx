import { gameStore } from '@core/GameStore';

import { Angle7Level } from './Angle7Level';
import { DrawNumber7Level } from './DrawNumber7Level';
// import { DragTo7Level } from './DragTo7Level';
import { NewDragGame } from './NewDragGame/NewDragGame';

export const useLearnNumber7Game = gameStore.registerGame({
  game: {
    slug: 'number-7',
    section: 'education',
    filter: 'math',
    month: 'december',
    name: 'Вчимо цифру 7',
    image: 'covers/number7.png',
  },
  levels: [
    {
      path: 'quiz',
      element: Angle7Level,
    },
    {
      path: 'draw',
      element: DrawNumber7Level,
    },
    {
      path: 'drag',
      element: NewDragGame,
    },
  ],
});
