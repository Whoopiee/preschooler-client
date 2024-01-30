import { gameStore } from '@core/GameStore';
import { PetrikivkaLevel } from './PetrikivkaLevel';

export const usePetrikivkaGame = gameStore.registerGame({
  game: {
    slug: 'petrikivka',
    section: 'education',
    filter: 'art',
    month: 'november',
    name: 'Петриківський розпис',
    image: 'covers/petrykivka-450x350.png',
  },
  levels: {
    element: PetrikivkaLevel,
  },
});
