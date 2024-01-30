import { gameStore } from '@core/GameStore';

import { WinterWordsLevel } from './WinterWordsLevel';
import { WinterFestsLevel } from './WinterFestsLevel';

export const useWinterFestGame = gameStore.registerGame({
  game: {
    slug: 'winterFest',
    section: 'education',
    filter: 'speaking',
    month: 'january',
    name: 'Зима. Зимові свята',
    image: 'covers/winter-fest-cover-450x350.png',
  },
  levels: [
    {
      path: 'winter-words',
      element: WinterWordsLevel,
    },
    {
      path: 'winter-fests',
      element: WinterFestsLevel,
    },
  ],
});
