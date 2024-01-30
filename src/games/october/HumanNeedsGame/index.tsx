import { gameStore } from '@core/GameStore';
import { PersonalHygieneLevel } from './PersonalHygieneLevel';

export const useHumanNeedsGame = gameStore.registerGame({
  game: {
    slug: 'human-needs',
    section: 'education',
    filter: 'society',
    month: 'october',
    name: 'Потреби людини: які вони?',
    image: 'covers/humanNeeds.svg',
  },
  levels: {
    element: PersonalHygieneLevel,
  },
});
