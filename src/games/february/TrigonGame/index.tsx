import { gameStore } from '@core/GameStore';
import { TrigonLevel } from './TrigonLevel';

export const useTrigonGame = gameStore.registerGame({
  game: {
    slug: 'trigon',
    section: 'education',
    filter: 'math',
    month: 'february',
    name: 'Геометричні фігури',
    image: 'covers/trigonGame.png',
  },
  levels: {
    element: TrigonLevel,
  },
});
