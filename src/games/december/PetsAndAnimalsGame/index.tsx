import { gameStore } from '@core/GameStore';

import { PetsAndAnimalsLevel } from './PetsAndAnimalsLevel';
import { ChooseAnAnimalLevel } from './ChooseAnAnimalLevel';

export const usePetsAndAnimalsGame = gameStore.registerGame({
  game: {
    slug: 'pets&animals',
    section: 'education',
    filter: 'speaking',
    month: 'december',
    name: 'Свійські тварини',
    image: 'covers/petsAndAnimals.png',
  },
  levels: [
    {
      path: 'pets',
      element: PetsAndAnimalsLevel,
    },
    {
      path: 'choose-animals',
      element: ChooseAnAnimalLevel,
    },
  ],
});
