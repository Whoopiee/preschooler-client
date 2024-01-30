import { gameStore } from '@core/GameStore';

import { DemandWaterLevel } from './DemandWaterLevel';
import { KeepWaterLevel } from './KeepWaterLevel';
import { WaterPlantLevel } from './WaterPlantLevel';

export const useWaterGame = gameStore.registerGame({
  game: {
    slug: 'water',
    section: 'education',
    filter: 'society',
    month: 'october',
    name: 'Вода - безцінний дар',
    image: 'covers/social.png',
  },
  levels: [
    {
      path: 'demand-water',
      element: DemandWaterLevel,
    },
    {
      path: 'keep-water',
      element: KeepWaterLevel,
    },
    {
      path: 'water-plant',
      element: WaterPlantLevel,
    },
  ],
});
