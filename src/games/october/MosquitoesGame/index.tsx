import { gameStore } from '@core/GameStore';

import { MosquitoesLevel } from './MosquitoesLevel';
import { SaveThePlantLevel } from './SaveThePlantLevel/SaveThePlantLevel';

export const useMosquitoesGame = gameStore.registerGame({
  game: {
    slug: 'mosquitoes',
    section: 'education',
    filter: 'world',
    month: 'october',
    name: 'Комахи-дрібні істоти',
    image: 'covers/mosquitoes.png',
  },
  levels: [
    {
      path: 'save-the-plant',
      element: SaveThePlantLevel,
    },
    {
      path: 'kinds-of-mosquitoes',
      element: MosquitoesLevel,
    },
  ],
});
