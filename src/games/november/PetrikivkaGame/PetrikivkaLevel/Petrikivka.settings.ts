import Color from 'color';
import { v4 as uuid } from 'uuid';

export const colors = [
  Color('#F9D34C'),
  Color('#518900'),
  Color('#EA241F'),
  Color('#B6A61D'),
  Color('#2FB7DF'),
  Color('#FF6525'),
];

export const cards = [
  {
    id: uuid(),
    image: 'objects/map-350x350.jpg',
  },
  {
    id: uuid(),
    image: 'objects/plate-350x350.jpg',
  },
  {
    id: uuid(),
    image: 'objects/horseshoe-350x350.jpg',
  },
];
