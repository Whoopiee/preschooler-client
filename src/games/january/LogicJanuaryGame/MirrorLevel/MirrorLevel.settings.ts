import Color from 'color';
import { v4 as uuid } from 'uuid';

export const circlesDefault = [
  {
    id: uuid(),
    color: '#39ABEB',
  },
  {
    id: uuid(),
    color: '#D1FFB5',
  },
  {
    id: uuid(),
    color: '#FA855F',
  },
  {
    id: uuid(),
    color: '#39ABEB',
  },
  {
    id: uuid(),
    color: '#D1FFB5',
  },
  {
    id: uuid(),
    color: '#39ABEB',
  },
];

export const circles = [
  {
    id: uuid(),
    color: '#D1FFB5',
    isEditable: true,
  },
  {
    id: uuid(),
    color: '#39ABEB',
    current: '#39ABEB',
    isEditable: false,
  },
  {
    id: uuid(),
    color: '#39ABEB',
    isEditable: true,
  },
  {
    id: uuid(),
    color: '#FA855F',
    isEditable: true,
  },
  {
    id: uuid(),
    color: '#39ABEB',
    current: '#39ABEB',
    isEditable: false,
  },
  {
    id: uuid(),
    color: '#D1FFB5',
    current: '#D1FFB5',
    isEditable: false,
  },
];

export const colors: Color[] = [
  Color('#39ABEB'),
  Color('#D1FFB5'),
  Color('#FA855F'),
];
