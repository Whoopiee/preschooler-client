import { v4 as uuid } from 'uuid';

export type DeviceType = 'old' | 'new';

export interface Choice {
  id: string;
  image: string;
  type: DeviceType;
}

export const initialValues: Choice[] = [
  {
    id: uuid(),
    image: 'objects/washingMachine-230x230.png',
    type: 'new',
  },
  {
    id: uuid(),
    image: 'objects/lamp-230x230.png',
    type: 'new',
  },
  {
    id: uuid(),
    image: 'objects/microwave-230x230.png',
    type: 'new',
  },
  {
    id: uuid(),
    image: 'objects/iron-230x230.png',
    type: 'new',
  },
  {
    id: uuid(),
    image: 'objects/coffee-mug-230x230.png',
    type: 'old',
  },
  {
    id: uuid(),
    image: 'objects/slicer-230x230.png',
    type: 'old',
  },
  {
    id: uuid(),
    image: 'objects/ladle-230x230.png',
    type: 'old',
  },
  {
    id: uuid(),
    image: 'objects/pan-230x230.png',
    type: 'old',
  },
];
