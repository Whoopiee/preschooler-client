import { gameStore } from '@core/GameStore';
import { PaintTheDecorationsLevel } from './PaintTheDecorationsLevel';
import { DragToysLevel } from './DragToysLevel';

export const useChristmasToysGame = gameStore.registerGame({
  game: {
    slug: 'christmas-decorations',
    section: 'education',
    filter: 'art',
    month: 'january',
    name: 'Новорічні прикраси',
    image: 'covers/Christmas-toys-cover-450x350.png',
  },
  levels: [
    {
      path: 'christmas-draw-toys',
      element: PaintTheDecorationsLevel,
    },
    {
      path: 'christmas-drag-toys',
      element: DragToysLevel,
    },
  ],
});
