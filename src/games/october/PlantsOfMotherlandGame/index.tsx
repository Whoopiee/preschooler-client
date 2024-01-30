import { gameStore } from '@core/GameStore';
import { ChornobrivtsiLevel } from './ChornobrivtsiLevel';
import { UkrainePlantsSymbolsLevel } from './UkrainePlantsSymbolsLevel';

export const usePlantsOfMotherland = gameStore.registerGame({
  game: {
    slug: 'plants-of-motherland',
    section: 'education',
    filter: 'world',
    month: 'october',
    name: 'Рослини - символи рідного краю',
    image: 'covers/plantsOfMotherland.png',
  },
  levels: [
    {
      path: 'ukraine-plants-symbols',
      element: UkrainePlantsSymbolsLevel,
    },
    {
      path: 'chornobrivtsi',
      element: ChornobrivtsiLevel,
    },
  ],
});
