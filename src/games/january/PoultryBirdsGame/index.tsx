import { gameStore } from '@core/GameStore';
import { DragPoultryLevel } from './DropPoultryLevel';
import { InfoPoultryLevel } from './InfoPoultryLevel';

export const usePoultryGame = gameStore.registerGame({
  game: {
    slug: 'poultry-birds',
    section: 'education',
    filter: 'speaking',
    month: 'january',
    name: 'Свійські птахи',
    image: 'covers/poultry-cover-450x350.png',
  },
  levels: [
    {
      path: 'info-poultry',
      element: InfoPoultryLevel,
    },
    {
      path: 'drag-poultry',
      element: DragPoultryLevel,
    },
  ],
});
