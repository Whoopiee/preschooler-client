import { gameStore } from '@core/GameStore';
import { KindsOfBreadLevel } from './KindsOfBreadLevel';
import { DrawBreadsLevel } from './DrawBreadsLevel';

export const useBreadIsEverythingGame = gameStore.registerGame({
  game: {
    slug: 'bread-is-everything',
    section: 'education',
    filter: 'society',
    month: 'november',
    name: 'Хліб - усьому голова',
    image: 'covers/breadIsEverything.svg',
  },
  levels: [
    {
      path: 'kinds-of-bread',
      element: KindsOfBreadLevel,
    },
    {
      path: 'cook-bread',
      element: DrawBreadsLevel,
    },
  ],
});
