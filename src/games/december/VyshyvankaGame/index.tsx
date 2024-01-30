import { gameStore } from '@core/GameStore';
import { VyshyvankaLevel } from './VyshyvankaLevel';

export const useVyshyvankaGame = gameStore.registerGame({
  game: {
    slug: 'vyshyvanka',
    section: 'education',
    filter: 'art',
    month: 'december',
    name: 'Вишиванка',
    image: 'covers/vyshivanka-450x350.png',
  },
  levels: [
    {
      path: 'vyshyvanka',
      element: VyshyvankaLevel,
    },
  ],
});
