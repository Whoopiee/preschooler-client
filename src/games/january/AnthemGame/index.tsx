import { gameStore } from '@core/GameStore';

import { AnthemLevel } from './AnthemLevel';

export const useAnthemGame = gameStore.registerGame({
  game: {
    slug: 'anthem-guess',
    section: 'education',
    filter: 'art',
    month: 'january',
    name: 'Гімн',
    image: 'covers/anthem-cover-450x350.png',
  },
  levels: [
    {
      path: 'start',
      element: AnthemLevel,
    },
  ],
});
