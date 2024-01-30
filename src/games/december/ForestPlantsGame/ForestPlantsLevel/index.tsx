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
    image: 'plants/pine.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/cactus.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/flyAgaric.svg',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/whilow.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/plant-watered.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/oak.png',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Ліс — це місце, '
    + 'де росте багато різних рослин, '
    + 'серед яких обов’язково мають бути дерева. '
    + 'Які рослини ростуть у лісі?',
  errorMessage: 'Обери усі рослини що ростуть у лісі',
  audio: 'task/december/which-plants-grow.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasMobile100PercentWidth: true,
    isStrict: true,
  },
};

export const ForestPlantsLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
