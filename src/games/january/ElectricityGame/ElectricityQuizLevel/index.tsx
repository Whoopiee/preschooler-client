import React from 'react';
import { v4 as uuid } from 'uuid';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'objects/hydroplant-350x250.png',
    text: 'Гідроелектростанція',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/solarplant-350x250.png',
    text: 'Сонячна станція',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/battery-350x250.png',
    text: 'Акумулятор та батарейки',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/nuclearplant-350x250.png',
    text: 'Атомна електространція',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/generator-350x250.png',
    text: 'Бензиновий генератор',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/heatplant-350x250.png',
    text: 'Теплова електростанція',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  // eslint-disable-next-line max-len
  description: 'Електроенергію можна отримати багатьма способами. Які ти знаєш джерела електричної енергії?',
  audio: 'task/january/gain-electricity.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: false,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const ElectricityQuizLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
