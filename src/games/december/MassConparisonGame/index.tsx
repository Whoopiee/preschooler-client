import { gameStore } from '@core/GameStore';

import { MassInfoLevel } from './MassInfoLevel';
import { DragMassLevel } from './DragMassLevel';
import { MassBoatLevel } from './MassBoatLevel';

export const useMassConparisonGame = gameStore.registerGame({
  game: {
    slug: 'mass',
    section: 'education',
    filter: 'math',
    month: 'december',
    name: 'Порівняння маси',
    image: 'covers/massComparison.png',
  },
  levels: [
    {
      path: 'info',
      element: MassInfoLevel,
    },
    {
      path: 'conparison',
      element: DragMassLevel,
    },
    {
      path: 'boat',
      element: MassBoatLevel,
    },
  ],
});
