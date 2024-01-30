import React from 'react';
import { DiceTemplate, IDiceTemplate } from '@templates/DiceTemplate';
import { v4 as uuid } from 'uuid';

export const defaultBlocks = [
  {
    id: uuid(),
    image: 'objects/cube1-128x128.png',
    answer: '1',
  },
  {
    id: uuid(),
    image: 'objects/cube2-128x128.png',
    answer: '2',

  },
  {
    id: uuid(),
    image: 'objects/cube3-128x128.png',
    answer: '3',
  },
  {
    id: uuid(),
    image: 'objects/cube4-128x128.png',
    answer: '4',
  },
  {
    id: uuid(),
    image: 'objects/cube5-128x128.png',
    answer: '5',
  },
  {
    id: uuid(),
    image: 'objects/cube6-128x128.png',
    answer: '6',
  },
];

const level: IDiceTemplate = {
  description: 'Покладіть правильний кубик та вирішіть рівняння',
  errorMessage: 'Відповідь невірна, спробуйте ще!',
  data: defaultBlocks,
  answer: '4',
  rightNumber: '6',
  audio: 'task/november/put-correct-cube.m4a',
  answerImage: 'objects/cube2-128x128.png',
};

export const DiceSixLevel: React.FC = () => (
  <DiceTemplate level={level} />
);
