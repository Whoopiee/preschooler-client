import { gameStore } from '@core/GameStore';

import { VolumeInfoLevel } from './VolumeInfoLevel';
import { DragVolumeLevel } from './DragVolumeLevel';

export const useVolumeInfoGame = gameStore.registerGame({
  game: {
    slug: 'volume-info',
    section: 'education',
    filter: 'math',
    month: 'january',
    name: 'Вимірювання об’єму',
    image: 'covers/volumeInfo.png',
  },
  levels: [
    {
      path: 'start',
      element: VolumeInfoLevel,
    },
    {
      path: 'drag-volume',
      element: DragVolumeLevel,
    },
  ],
});
