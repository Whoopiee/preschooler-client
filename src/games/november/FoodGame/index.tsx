import { gameStore } from '@core/GameStore';

import { MilkLevel } from './MilkLevel';
import { TopsAndRootsLevel } from './TopsAndRootsLevel';
import { MushroomsAndBasketLevel } from './MushroomsAndBasketLevel';

export const useFoodGame = gameStore.registerGame({
  game: {
    slug: 'food',
    section: 'education',
    filter: 'society',
    month: 'november',
    name: 'Потреба людини в їжі',
    image: 'covers/food-450x350.png',
  },
  levels: [
    {
      path: 'tops-and-roots',
      element: TopsAndRootsLevel,
    },
    {
      path: 'milk',
      element: MilkLevel,
    },
    {
      path: 'mushrooms-and-basket',
      element: MushroomsAndBasketLevel,
    },
  ],
});
