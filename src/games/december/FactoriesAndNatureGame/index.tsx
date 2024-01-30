import { gameStore } from '@core/GameStore';
import { FactoriesAndPlantsLevel } from './FactoriesAndPlantsLevel';
import { FactoriesAndNatureLevel } from './FactoriesAndNatureLevel';

export const useFactoriesAndNatureGame = gameStore.registerGame({
  game: {
    slug: 'factories-nature',
    section: 'education',
    filter: 'world',
    month: 'december',
    name: 'Фабрики, заводи, чистота природи',
    image: 'covers/FactoriesAndNature.png',
  },
  levels: [
    {
      path: 'factory-knowledge',
      element: FactoriesAndPlantsLevel,
    },
    {
      path: 'nature-purity',
      element: FactoriesAndNatureLevel,
    },
  ],
});
