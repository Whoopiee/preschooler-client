import { gameStore } from '@core/GameStore';
import { MissingSyllablesLevel } from './MissingSyllablesLevel';

export const useMissingSyllablesGame = gameStore.registerGame({
  game: {
    slug: 'missing-syllables',
    section: 'games',
    month: 'october',
    name: 'Пропущені склади',
    image: 'covers/letter-a.png',
  },
  levels: {
    element: MissingSyllablesLevel,
  },
});
