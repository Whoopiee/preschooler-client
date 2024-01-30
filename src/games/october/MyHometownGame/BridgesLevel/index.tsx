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
    image: 'pics/kaidatskyiBridge.png',
    isRight: true,
    isChosen: false,
    text: 'Кайдацький',
  },
  {
    id: uuid(),
    image: 'pics/amurskyBridge.png',
    isRight: true,
    isChosen: false,
    text: 'Амурський',
  },
  {
    id: uuid(),
    image: 'pics/centralBridge.png',
    isRight: true,
    isChosen: false,
    text: 'Центральний',
  },
  {
    id: uuid(),
    image: 'pics/merefoKhersonskyiBridge.png',
    isRight: true,
    isChosen: false,
    text: 'Мерефо-Херсонський',
  },
  {
    id: uuid(),
    image: 'pics/monastirskyIslandBridge.png',
    isRight: true,
    isChosen: false,
    text: 'Міст на Монастирський острів',
  },
  {
    id: uuid(),
    image: 'pics/southernBridge.png',
    isRight: true,
    isChosen: false,
    text: 'Південний',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Місто Дніпро славиться своїми мостами. Давай вивчимо їх. Обери мости, на яких бували',
  isStrictCheck: false,
  isSwitchable: true,
  audio: 'task/october/bridges-task.m4a',
  card: {
    cardsInARow: 3,
    isCardsWide: true,
    hasHeightByContent: false,
    hasMobile100PercentWidth: true,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
    hasImageOnly: false,
  },
};

export const BridgesLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
