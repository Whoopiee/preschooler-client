import { v4 as uuid } from 'uuid';

export interface DragElement {
  id: string,
  image: string,
}

export const initialValues = [
  {
    id: '1',
    image: 'objects/skateboard.png',
  },
  {
    id: '2',
    image: 'objects/skateboard.png',
  },
  {
    id: '3',
    image: 'objects/skateboard.png',
  },
  {
    id: '4',
    image: 'plants/cucumber.png',
  },
  {
    id: '5',
    image: 'plants/cucumber.png',
  },
  {
    id: '6',
    image: 'plants/cucumber.png',
  },
  {
    id: '7',
    image: 'animals/fish-250x250.png',
  },
  {
    id: '8',
    image: 'animals/fish-250x250.png',
  },
  {
    id: '9',
    image: 'animals/fish-250x250.png',
  },
];

// set interface for defaultColumns

// export const defaultColumns = {
//   [uuid()]: {
//     title: 'skateboard',
//     items: <DragElement[]>[],
//   },
//   [uuid()]: {
//     title: 'pickle',
//     items: <DragElement[]>[],
//   },
//   [uuid()]: {
//     title: 'fish',
//     items: <DragElement[]>[],
//   },
// };

export const defaultColumns = [
  [
    {
      id: uuid(),
      title: 'skateboard',
      items: <DragElement[]>[],
    },
    {
      id: uuid(),
      title: 'skateboard',
      items: <DragElement[]>[],
    },
    {
      id: uuid(),
      title: 'skateboard',
      items: <DragElement[]>[],
    },
  ],
  [
    {
      id: uuid(),
      title: 'pickle',
      items: <DragElement[]>[],
    },
    {
      id: uuid(),
      title: 'pickle',
      items: <DragElement[]>[],
    },
    {
      id: uuid(),
      title: 'pickle',
      items: <DragElement[]>[],
    },
  ],
  [
    {
      id: uuid(),
      title: 'fish',
      items: <DragElement[]>[],
    },
    {
      id: uuid(),
      title: 'fish',
      items: <DragElement[]>[],
    },
    {
      id: uuid(),
      title: 'fish',
      items: <DragElement[]>[],
    },
  ],
];
