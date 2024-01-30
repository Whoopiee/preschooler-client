import { gameStore } from '@core/GameStore';

import { DrawLakeRiverLevel } from './DrawLakeRiverLevel';
import { DragFishInLakeLevel } from './DragFishInLakeLevel';

export const useRiverLakeGame = gameStore.registerGame({
  game: {
    slug: 'river-lake',
    section: 'education',
    filter: 'world',
    month: 'november',
    name: 'Струмки, річки, озера',
    image: 'covers/rivers_lakes.png',
  },
  levels: [
    {
      path: 'draw-river-place',
      element: DrawLakeRiverLevel,
    },
    {
      path: 'lake-and-fish',
      element: DragFishInLakeLevel,
    },
  ],
});
