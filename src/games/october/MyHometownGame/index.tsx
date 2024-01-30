import { gameStore } from '@core/GameStore';

import { PlacesOfInterestLevel } from './PlacesOfInterestLevel';
import { BridgesLevel } from './BridgesLevel';

export const useMyHometownGame = gameStore.registerGame({
  game: {
    slug: 'my-hometown',
    section: 'education',
    filter: 'society',
    month: 'october',
    name: 'Моє рідне місто',
    image: 'covers/myHometown.svg',
  },
  levels: [
    {
      path: 'places-of-interest',
      element: PlacesOfInterestLevel,
    },
    {
      path: 'bridges',
      element: BridgesLevel,
    },
  ],
});
