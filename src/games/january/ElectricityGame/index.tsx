import { gameStore } from '@core/GameStore';
import { ElectricityQuizLevel } from './ElectricityQuizLevel';
import { DragDevicesLevel } from './DragDevicesLevel';

export const useElectricityGame = gameStore.registerGame({
  game: {
    slug: 'electricity',
    section: 'education',
    filter: 'society',
    month: 'january',
    name: 'Електрика в нашому житті',
    image: 'covers/electricity-450x350.png',
  },
  levels: [
    {
      path: 'electricty-quiz',
      element: ElectricityQuizLevel,
    },
    {
      path: 'electricty-drag',
      element: DragDevicesLevel,
    },
  ],
});
