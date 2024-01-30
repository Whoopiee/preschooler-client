import { gameStore } from '@core/GameStore';
import { AutumnFruitsLevel } from './AutumnFruitsLevel';

export const useAutumnFruitsGame = gameStore.registerGame({
  game: {
    slug: 'autumn-fruits',
    section: 'education',
    filter: 'world',
    month: 'november',
    name: 'Осінні фрукти',
    image: 'covers/autumn_fruit.png',
  },
  levels: {
    element: AutumnFruitsLevel,
  },
});
