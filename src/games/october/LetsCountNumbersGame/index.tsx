import { gameStore } from '@core/GameStore';
// import { LetsCountNumbersLevel } from './LetsCountNumbersLevel';
import { NewLetsCountLevel } from './NewLetsCountNumbersLevel';

export const useLetsCountNumbersGame = gameStore.registerGame({
  game: {
    slug: 'lets-count-numbers',
    section: 'games',
    month: 'october',
    name: 'Порахуймо',
    image: 'covers/lets-cont-numbers-450x350.svg',
  },
  levels: {
    element: NewLetsCountLevel,
  },
});
