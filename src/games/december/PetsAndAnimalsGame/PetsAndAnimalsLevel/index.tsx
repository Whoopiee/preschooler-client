/* eslint-disable max-len */
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
    image: 'animals/llama230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Лама',
  },
  {
    id: uuid(),
    image: 'animals/camel230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Верблюд',
  },
  {
    id: uuid(),
    image: 'animals/bull230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Бик',
  },
  {
    id: uuid(),
    image: 'animals/donkey230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Віслюк',
  },
  {
    id: uuid(),
    image: 'animals/cat230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Кіт',
  },
  {
    id: uuid(),
    image: 'animals/bunny230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Кролик',
  },
  {
    id: uuid(),
    image: 'animals/dog230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Собака',
  },
  {
    id: uuid(),
    image: 'animals/ostrich230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Страус',
  },
  {
    id: uuid(),
    image: 'animals/horse230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Кінь',
  },
  {
    id: uuid(),
    image: 'animals/parrot230x230.png',
    isRight: true,
    isChosen: false,
    text: 'Папуга',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Свійські тварини — види тварин, що повністю або частково утримуються людиною, живуть з людиною та розводяться нею. Яких свійских тварин ти бачив (-ла) ?',
  audio: 'task/december/domestic-animals.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 5,
    hasHeightByContent: true,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: true,
  },
};

export const PetsAndAnimalsLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
