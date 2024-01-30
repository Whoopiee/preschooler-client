import { gameStore } from '@core/GameStore';
import { DragAnimalLevel } from './DragAnimalsLevel';

export const useDragAnimalLevel = gameStore.registerGame({
  game: {
    slug: 'drag-animal',
    section: 'education',
    filter: 'math',
    month: 'october',
    name: 'Групування',
    image: 'covers/family.svg',
  },
  levels: [
    {
      path: 'describe-your-house',
      element: DragAnimalLevel,
    },
  ],
});
