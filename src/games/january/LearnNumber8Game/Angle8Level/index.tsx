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
    image: 'objects/clock3-230x230.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/clock5-230x230.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/clock8-230x230.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/clock1-230x230.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/clock12-230x230.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'На якому з годинників восьма година?',
  audio: 'task/january/on-wich-clock.m4a',
  errorMessage: 'Обери вірну годину',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 5,
    isCardsWide: false,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const Angle8Level: React.FC = () => (
  <QuizTemplate level={level} />
);
