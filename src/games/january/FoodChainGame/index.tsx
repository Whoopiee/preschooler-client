import { gameStore } from '@core/GameStore';

import { DragChainLevel } from './DragChainLevel';
import { AnimalQuizLevel } from './AnimalQuizLevel';
import { FoodChainInfoLevel } from './FoodChainInfoLevel';

export const useFoodChainGame = gameStore.registerGame({
  game: {
    slug: 'food-chain',
    section: 'education',
    filter: 'world',
    month: 'january',
    name: 'Ланцюжки харчування',
    image: 'covers/foodchain-450x350.png',
  },
  levels: [
    {
      path: 'food-chain-info',
      element: FoodChainInfoLevel,
    },
    {
      path: 'food-chain',
      element: DragChainLevel,
    },
    {
      path: 'animal-quiz',
      element: AnimalQuizLevel,
    },
  ],
});
