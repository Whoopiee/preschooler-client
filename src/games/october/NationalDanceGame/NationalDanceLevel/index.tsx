/* eslint-disable max-len */
import React from 'react';
import { v4 as uuid } from 'uuid';

import { IQuizChoice } from '@templates/QuizTemplate';
import { QuizVideoTemplate, IQuizVideoTemplate } from '@templates/QuizVideoTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'people/gopak.png',
    text: 'Гопак',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/lezginka.png',
    text: 'Лезгінка',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/tango.png',
    text: 'Танго',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizVideoTemplate = {
  initialChoices,
  errorMessage: 'Обери український національний танець',
  description: 'Продивіться відео з українськими національними танцями',
  url: 'https://youtu.be/8R6pRSJOipg',
  descriptionSecond: 'Обери, який із запропонованих танців український',
  audio: 'task/october/national-dance-task.m4a',
  audioSecond: 'task/october/national-dance-second-task.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    isStrict: true,
    hasMobile100PercentWidth: true,
    hasHeightByContent: true,
  },
};

export const NationalDanceLevel: React.FC = () => {
  return <QuizVideoTemplate level={level} />;
};
