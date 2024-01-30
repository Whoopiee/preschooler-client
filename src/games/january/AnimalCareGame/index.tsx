import { gameStore } from '@core/GameStore';
import { FeedCatLevel } from './FeedCatLevel';
import { GoodForDogLevel } from './GoodForDogLevel';

export const useAnimalCareGame = gameStore.registerGame({
  game: {
    slug: 'animal-care',
    section: 'education',
    filter: 'society',
    month: 'january',
    name: 'Дбаємо про тварин',
    image: 'covers/animal-care-cover-450x350.png',
  },
  levels: [
    {
      path: 'feed-cat',
      element: FeedCatLevel,
    },
    {
      path: 'good-dog',
      element: GoodForDogLevel,
    },
  ],
});
