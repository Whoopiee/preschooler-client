import { gameStore } from '@core/GameStore';
import { HerbsLevel } from './HerbsLevel';
import { DragHerbsLevel } from './DragHerbsLevel';

export const useHerbsGame = gameStore.registerGame({
  game: {
    slug: 'medicinal-herbs',
    section: 'education',
    filter: 'world',
    month: 'december',
    name: 'Лікарські трави',
    image: 'covers/medicinalHerbs.png',
  },
  levels: [
    {
      path: 'start',
      element: HerbsLevel,
    },
    {
      path: 'drag',
      element: DragHerbsLevel,
    },
  ],
});
