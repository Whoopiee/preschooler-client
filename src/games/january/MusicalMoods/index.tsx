import { gameStore } from '@core/GameStore';

import { MusicalMoodsLevel } from './MusicalMoodsLevel';

export const useMusicalMoodsGame = gameStore.registerGame({
  game: {
    slug: 'music-mood',
    section: 'education',
    filter: 'art',
    month: 'january',
    name: 'Музичні настрої',
    image: 'covers/musicMood-cover-450x350.png',
  },
  levels: [
    {
      path: 'music-mood-level',
      element: MusicalMoodsLevel,
    },
  ],
});
