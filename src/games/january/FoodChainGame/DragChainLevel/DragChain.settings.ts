import { v4 as uuid } from 'uuid';

export interface Choice {
  id: string,
  image: string,
  text: string,
  rightIndex: number,
}

export const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'animals/eagle-500x255.png',
    text: 'Орел',
    rightIndex: 0,
  },
  {
    id: uuid(),
    image: 'animals/snake-500x255.png',
    text: 'Змія',
    rightIndex: 1,
  },
  {
    id: uuid(),
    image: 'animals/frog-500x255.png',
    text: 'Лягушка',
    rightIndex: 2,
  },
  {
    id: uuid(),
    image: 'animals/grasshooper-500x255.png',
    text: 'Коник',
    rightIndex: 3,
  },
  {
    id: uuid(),
    image: 'animals/clover-500x255.png',
    text: 'Конюшина',
    rightIndex: 4,
  },
];
