import { v4 as uuid } from 'uuid';

interface IInfoCard {
  id: string,
  cardImage: string,
}

export const infoCards: IInfoCard[] = [
  {
    id: uuid(),
    cardImage: 'objects/first-food-chain.png',
  },
  {
    id: uuid(),
    cardImage: 'objects/second-food-chain.png',
  },
  {
    id: uuid(),
    cardImage: 'objects/third-food-chain.png',
  },
];
