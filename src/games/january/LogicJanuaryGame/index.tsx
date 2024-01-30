import { gameStore } from '@core/GameStore';
import { CountWhalesLevel } from './CountWhalesLevel';
import { MirrorLevel } from './MirrorLevel';

export const useLogicJanuaryGame = gameStore.registerGame({
  game: {
    slug: 'logic-january',
    section: 'education',
    filter: 'math',
    month: 'january',
    name: 'Логіка',
    image: 'covers/logic-december-450x350.png',
  },
  levels: [
    {
      path: 'count-whales',
      element: CountWhalesLevel,
    },
    {
      path: 'mirror',
      element: MirrorLevel,
    },
  ],
});
