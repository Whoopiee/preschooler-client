import { gameStore } from '@core/GameStore';
import { ToleranceLevel } from './ToleranceLevel';

export const useToleranceGame = gameStore.registerGame({
  game: {
    slug: 'tolerance',
    section: 'education',
    filter: 'society',
    month: 'december',
    name: 'Толерантність',
    image: 'covers/tolerance450x350.png',
  },
  levels: {
    element: ToleranceLevel,
  },
});
