import { v4 as uuid } from 'uuid';
import _ from 'lodash';

export const MAX_RIGHT_ELEMENTS = 4;

interface IOceanCard {
  id: string,
  image: string,
  title: string,
  isRight: boolean,
}

export const cards: IOceanCard[] = _.shuffle([
  {
    id: uuid(),
    image: 'animals/hippo-250x250.png',
    title: 'Бегемот',
    isRight: false,
  },
  {
    id: uuid(),
    image: 'animals/catfish.png',
    title: 'Сом',
    isRight: false,
  },
  {
    id: uuid(),
    image: 'animals/jelly-230x230.png',
    title: 'Медуза',
    isRight: true,
  },
  {
    id: uuid(),
    image: 'animals/dolphin.png',
    title: 'Дельфін',
    isRight: true,
  },
  {
    id: uuid(),
    image: 'animals/flatfish-250x250.png',
    title: 'Камбала',
    isRight: true,
  },
  {
    id: uuid(),
    image: 'animals/shell-250x250.png',
    title: 'Гребінець',
    isRight: true,
  },
]);
