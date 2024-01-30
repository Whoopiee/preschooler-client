import { v4 as uuid } from 'uuid';
import _ from 'lodash';

// const FILE_API_URL = 'https://api.sadok.dniprorada.gov.ua';

export interface Values {
  id: string;
  image: string;
}

export interface Container {
  id: string;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const initialContainers: Container[] = [
  {
    id: uuid(),
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  {
    id: uuid(),
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  {
    id: uuid(),
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
];

export const mainValues: Values[] = _.shuffle([
  {
    id: uuid(),
    image: 'animals/fish-250x250.png',
  },
  {
    id: uuid(),
    image: 'animals/fish-250x250.png',
  },
  {
    id: uuid(),
    image: 'animals/fish-250x250.png',
  },
  {
    id: uuid(),
    image: 'plants/cucumber.png',
  },
  {
    id: uuid(),
    image: 'plants/cucumber.png',
  },
  {
    id: uuid(),
    image: 'plants/cucumber.png',
  },
  {
    id: uuid(),
    image: 'objects/skateboard.png',
  },
  {
    id: uuid(),
    image: 'objects/skateboard.png',
  },
  {
    id: uuid(),
    image: 'objects/skateboard.png',
  },
]);
