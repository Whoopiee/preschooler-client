import { gameStore } from '@core/GameStore';

import { PoliteWordsFirstLevel } from './PoliteWordsFirstLevel';
import { PoliteWordsSecondLevel } from './PoliteWordsSecondLevel';

export const usePoliteWordsGame = gameStore.registerGame({
  game: {
    slug: 'polite-words',
    section: 'education',
    filter: 'speaking',
    month: 'october',
    name: 'Ввічливі слова',
    image: 'covers/politeWords.png',
  },
  levels: [
    {
      path: 'polite-words-first-level',
      element: PoliteWordsFirstLevel,
    },
    {
      path: 'polite-words-second-level',
      element: PoliteWordsSecondLevel,
    },
  ],
});
