import { gameStore } from '@core/GameStore';
import { LandscapeLevel } from './LandscapeLevel';

export const useLandscapeGame = gameStore.registerGame({
  game: {
    slug: 'landscape',
    section: 'education',
    filter: 'art',
    month: 'october',
    name: 'Пейзаж',
    image: 'covers/landscapes.png',
  },
  levels: {
    element: LandscapeLevel,
  },
});
