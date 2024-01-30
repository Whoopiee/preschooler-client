import { gameStore } from '@core/GameStore';
import { DrawLakeRiverLevel } from './PortraitLevel';

export const usePortraitGame = gameStore.registerGame({
  game: {
    slug: 'portrait',
    section: 'education',
    filter: 'art',
    month: 'december',
    name: 'Що таке портрет?',
    image: 'covers/aunt.png',
  },
  levels: {
    element: DrawLakeRiverLevel,
  },
});
