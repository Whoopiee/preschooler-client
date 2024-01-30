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
    image: 'animals/owl.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/fox.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/candy.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/enot.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/bunny.png',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Знайди зайве',
  errorMessage: 'Знайди усе зайве',
  audio: 'task/october/logic-september-task.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 5,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const LogicOctoberLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
