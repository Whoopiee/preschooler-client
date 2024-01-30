import { gameStore } from '@core/GameStore';

import { GlobeLevel } from './GlobeLevel';
import { EarthLevel } from './EarthLevel';
import { UkraineMapLevel } from './UkraineMapLevel';

export const useEarthGame = gameStore.registerGame({
  game: {
    slug: 'earth',
    section: 'education',
    filter: 'world',
    month: 'october',
    name: 'Планета Земля',
    image: 'covers/enviroment.png',
  },
  levels: [
    {
      path: 'globe',
      element: GlobeLevel,
    },
    {
      path: 'earth',
      element: EarthLevel,
    },
    {
      path: 'ukraine-map',
      element: UkraineMapLevel,
    },
  ],
});
