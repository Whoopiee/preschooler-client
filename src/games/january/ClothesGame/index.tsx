import { gameStore } from '@core/GameStore';

import { PickClothesLevel } from './PickClothesLevel';

export const useClothesGame = gameStore.registerGame({
  game: {
    slug: 'clothes',
    section: 'education',
    filter: 'society',
    month: 'january',
    name: 'Одяг, взуття, вбрання',
    image: 'covers/clothes-450x350.png',
  },
  levels: [
    {
      path: 'pick-clothes',
      element: PickClothesLevel,
    },
  ],
});
