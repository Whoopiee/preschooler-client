import { gameStore } from '@core/GameStore';

import { TransportLevel } from './TransportLevel';
import { TransportRiddlesLevel } from './TransportRiddlesLevel';

export const useTransportGame = gameStore.registerGame({
  game: {
    slug: 'transport',
    section: 'education',
    filter: 'society',
    month: 'december',
    name: 'Транспорт',
    image: 'covers/excavator.png',
  },
  levels: [
    {
      path: 'quiz',
      element: TransportLevel,
    },
    {
      path: 'riddles',
      element: TransportRiddlesLevel,
    },
  ],
});
