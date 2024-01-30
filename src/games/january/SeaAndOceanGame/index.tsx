import { gameStore } from '@core/GameStore';

import { OceanInfoLevel } from './OceanInfoLevel';
import { DragSeaCreaturesLevel } from './DragSeaCreaturesLevel';

export const useSeaAndOceanGame = gameStore.registerGame({
  game: {
    slug: 'sea-ocean',
    section: 'education',
    filter: 'world',
    month: 'january',
    name: 'Моря та океани',
    image: 'covers/ocean-450x350.svg',
  },
  levels: [
    {
      path: 'ocean-sea',
      element: OceanInfoLevel,
    },
    {
      path: 'drag-creatures',
      element: DragSeaCreaturesLevel,
    },
  ],
});
