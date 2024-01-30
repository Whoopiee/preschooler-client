import { gameStore } from '@core/GameStore';
import { YourRelativesLevel } from './YourRelativesLevel';
import { DescribeYourHouse } from './DescribeYourHouse';

export const useFamilyGame = gameStore.registerGame({
  game: {
    slug: 'family',
    section: 'education',
    filter: 'speaking',
    month: 'october',
    name: 'Родина. Сім’я. Знайомство',
    image: 'covers/family.svg',
  },
  levels: [
    {
      path: 'your-relatives',
      element: YourRelativesLevel,
    },
    {
      path: 'describe-your-house',
      element: DescribeYourHouse,
    },
  ],
});
