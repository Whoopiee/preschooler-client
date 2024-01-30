import { gameStore } from '@core/GameStore';
import { MissingLettersLevel } from './MissingLettersLevel';

export const useMissingLettersGame = gameStore.registerGame({
  game: {
    slug: 'missing-letters',
    section: 'games',
    month: 'october',
    name: 'Пропущені букви',
    image: 'covers/missing-letters-450x350.svg',
  },
  levels: {
    element: MissingLettersLevel,
  },
});
