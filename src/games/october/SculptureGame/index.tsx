import { gameStore } from '@core/GameStore';

import { SculptureLevel } from './SculptureLevel';

export const useSculptureGame = gameStore.registerGame({
  game: {
    slug: 'sculpture',
    section: 'education',
    filter: 'art',
    month: 'october',
    name: 'Скульптура',
    image: 'covers/skulptura.png',
  },
  levels: {
    element: SculptureLevel,
  },
});
