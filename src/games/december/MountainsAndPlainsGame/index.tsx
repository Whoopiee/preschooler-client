import { gameStore } from '@core/GameStore';

import { MountainsAndPlainsLevel } from './MountainsAndPlainsLevel';

export const useMountainsAndPlainsGame = gameStore.registerGame({
  game: {
    slug: 'mountains&plains',
    section: 'education',
    filter: 'world',
    month: 'december',
    name: 'Гори та рівнини',
    image: 'covers/MountainsAndPlains.png',
  },
  levels: {
    element: MountainsAndPlainsLevel,
  },
});
