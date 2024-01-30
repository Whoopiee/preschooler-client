import React from 'react';
import { DragInZonesTemplate } from '@templates/DragInZonesTemplate';
import {
  IDropTemplate,
  StrictDragElements,
} from '@templates/DragInZonesTemplate/DragInZonesTemplate.settings';
import { v4 as uuid } from 'uuid';

const staticData = [
  {
    prop: [
      {
        id: uuid(),
        image: 'animals/owl-230x230.png',
        static: true,
      },
      {
        id: uuid(),
        image: 'animals/owl-230x230.png',
        static: true,
      },
    ],
  },
  {
    prop: [
      {
        id: uuid(),
        image: 'animals/fox-230x230.png',
        static: true,
      },
    ],
  },
  {
    prop: [
      {
        id: uuid(),
        image: 'animals/hedgehog-230x230.png',
        static: true,
      },
      {
        id: uuid(),
        image: 'animals/hedgehog-230x230.png',
        static: true,
      },
      {
        id: uuid(),
        image: 'animals/hedgehog-230x230.png',
        static: true,
      },
    ],
  },
];

const dragItems: StrictDragElements[] = [
  {
    id: uuid(),
    countStatic: 2,
    imageStatic: 'animals/owl-230x230.png',
    elements: [
      {
        id: uuid(),
        image: 'animals/owl-230x230.png',
      },
      {
        id: uuid(),
        image: 'animals/owl-230x230.png',
      },
      {
        id: uuid(),
        image: 'animals/owl-230x230.png',
      },
    ],
  },
  {
    id: uuid(),
    countStatic: 1,
    imageStatic: 'animals/fox-230x230.png',
    elements: [
      {
        id: uuid(),
        image: 'animals/fox-230x230.png',
      },
      {
        id: uuid(),
        image: 'animals/fox-230x230.png',
      },
    ],
  },
  {
    id: uuid(),
    countStatic: 3,
    imageStatic: 'animals/hedgehog-230x230.png',
    elements: [
      {
        id: uuid(),
        image: 'animals/hedgehog-230x230.png',
      },
    ],
  },
];

const level: IDropTemplate = {
  description: 'Розподіли тваринок по групах і порахуй скільки їх',
  dragItems,
  staticData,
  zonesNumber: 3,
  strict: true,
};

export const DragAnimalLevel: React.FC = () => {
  return (
    <DragInZonesTemplate
      level={level}
    />
  );
};
