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
    image: 'objects/squareNude.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/starGreen.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/trigonBlue.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/ejectorGreen.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/rectangleBlue.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Яка з фігур має сім кутів',
  errorMessage: 'Знайди усі фігури',
  audio: 'task/december/figure-7-corners.m4a',
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

export const Angle7Level: React.FC = () => (
  <QuizTemplate level={level} />
);
