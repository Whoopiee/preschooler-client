import { gameStore } from '@core/GameStore';
import { AutumnVegetablesLevel } from './AutumnVegetablesLevel';

export const useAutumnVegetablesGame = gameStore.registerGame({
  game: {
    slug: 'autumn-vegetables',
    section: 'education',
    filter: 'world',
    month: 'november',
    name: 'Осінні овочи',
    image: 'covers/autumn_veg.png',
  },
  levels: {
    element: AutumnVegetablesLevel,
  },
});
