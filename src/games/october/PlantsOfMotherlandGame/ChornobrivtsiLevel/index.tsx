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
    image: 'plants/bluebells.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/wildRose.png',
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
    image: 'plants/chornobrivtsi.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/rose.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/snyt.png',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Обери зображення калини та чорнобривців',
  errorMessage: 'Обери зображення калини та чорнобривців',
  audio: 'task/october/chornobrivtsi-task.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasMobile100PercentWidth: true,
    isStrict: true,
  },
};

export const ChornobrivtsiLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
