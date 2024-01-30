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
    image: 'people/father.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/mother.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/brother.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/sister.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/grandmother.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/grandfather.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/uncle.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/aunt.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/siblings.png',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Хто є в твоїй родині?',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 5,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: false,
    isRounded: true,
  },
};

export const YourRelativesLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
