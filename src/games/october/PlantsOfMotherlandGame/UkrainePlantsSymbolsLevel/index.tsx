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
    image: 'plants/sunflower.png',
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
    image: 'plants/wheat.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/lily.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/rowan.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/peony.png',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Обери рослини, які є символами України',
  errorMessage: 'Обери усі рослини символи України',
  audio: 'task/october/ukraine-plants-symbols-task.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasMobile100PercentWidth: true,
    isStrict: true,
  },
};

export const UkrainePlantsSymbolsLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
