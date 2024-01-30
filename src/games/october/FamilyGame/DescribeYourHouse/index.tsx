import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  ChooseWordsByImage,
  IChooseWordsByImage,
} from '@templates/ChooseWordsByImage';

const level: IChooseWordsByImage = {
  description: 'Опиши свою домівку, яка вона?',
  initialChoices: [
    'Простора',
    'Безпечна',
    'Тиха',
    'Сучасна',
    'Кольорова',
    'Світла',
    'Затишна',
    'Зручна',
    'Тепла',
  ].map(text => ({
    id: uuid(), text, isRight: true, isChosen: false,
  })),
  audio: 'task/october/describe-your-home.m4a',
  image: '/pics/describe-house-893x596.png',
  imageText: 'Домівка, житло',
  imageAudio: 'task/october/your-home.m4a',
  isStrict: false,
};

export const DescribeYourHouse: React.FC = () => (
  <ChooseWordsByImage level={level} />
);
