import { gameStore } from '@core/GameStore';
import { NationalDanceLevel } from './NationalDanceLevel';

export const useNationalDanceGame = gameStore.registerGame({
  game: {
    slug: 'national-dance',
    section: 'education',
    filter: 'art',
    month: 'october',
    name: 'Національні танці',
    image: 'covers/nationalDance.png',
  },
  levels: {
    element: NationalDanceLevel,
  },
});
