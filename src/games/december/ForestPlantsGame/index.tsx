import { gameStore } from '@core/GameStore';
import { ForestPlantsLevel } from './ForestPlantsLevel';

export const useForestPlantsGame = gameStore.registerGame({
  game: {
    slug: 'plants-of-forest',
    section: 'education',
    filter: 'world',
    month: 'december',
    name: 'Рослини лісу',
    image: 'covers/PlantsForest.png',
  },
  levels: {
    element: ForestPlantsLevel,
  },
});
