import { v4 as uuid } from 'uuid';

export type IInfoCard = {
  id: string,
  title: string,
  image: string,
  audio: string,
};

export const cards: IInfoCard[] = [
  {
    id: uuid(),
    title: 'Індик',
    image: 'animals/turkey-230x230.png',
    audio: 'task/january/turkey-word.m4a',
  },
  {
    id: uuid(),
    title: 'Страус',
    image: 'animals/ostrich230x230.png',
    audio: 'task/january/ostrich-word.m4a',
  },
  {
    id: uuid(),
    title: 'Гусак',
    image: 'animals/goose-230x230.png',
    audio: 'task/january/goose-word.m4a',
  },
  {
    id: uuid(),
    title: 'Папуга',
    image: 'animals/parrot230x230.png',
    audio: 'task/january/parrot-word.m4a',
  },
  {
    id: uuid(),
    title: 'Голуб',
    image: 'animals/dove-230x230.png',
    audio: 'task/january/pigeon-word.m4a',
  },
  {
    id: uuid(),
    title: 'Павич',
    image: 'animals/peacock-230x230.png',
    audio: 'task/january/peacock-word.m4a',
  },
];
