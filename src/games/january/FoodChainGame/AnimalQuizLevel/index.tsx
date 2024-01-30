/* eslint-disable max-len */
import React from 'react';
import { v4 as uuid } from 'uuid';

import {
  IQuizTemplate,
  IQuizChoice,
  QuizTemplate,
} from '@templates/QuizTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'animals/bear-230x230.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/jelly-230x230.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/raven-230x230.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/hedgehog-230x230.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/camel230x230.png',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  isSwitchable: true,
  isStrictCheck: true,
  description: 'Всеїдні тварини живляться і рослинною і тваринною їжею. Які з цих тварин всеїдні?',
  errorMessage: 'Оберіть усіх всеядних тварин',
  audio: 'task/january/omnivorous-animals.m4a',
  card: {
    cardsInARow: 5,
    hasHeightByContent: true,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: true,
  },
};

export const AnimalQuizLevel: React.FC = () => {
  return (
    <QuizTemplate level={level} />
  );
};
