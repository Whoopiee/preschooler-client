import React from 'react';
import { v4 as uuid } from 'uuid';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';
import { Picture } from '@components/Picture';

import styles from './AutumnVegetablesLevel.module.scss';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'plants/pumpkin.png',
    isRight: true,
    isChosen: false,
    text: 'Гарбуз',
  },
  {
    id: uuid(),
    image: 'plants/carrot.png',
    isRight: true,
    isChosen: false,
    text: 'Морква',
  },
  {
    id: uuid(),
    image: 'plants/potatoes.png',
    isRight: true,
    isChosen: false,
    text: 'Картопля',
  },
  {
    id: uuid(),
    image: 'plants/tomato.png',
    isRight: false,
    isChosen: false,
    text: 'Помідор',
  },
  {
    id: uuid(),
    image: 'plants/zucchini.png',
    isRight: false,
    isChosen: false,
    text: 'Кабачок',
  },
  {
    id: uuid(),
    image: 'plants/corn.png',
    isRight: false,
    isChosen: false,
    text: 'Кукурудза',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Які овочі збираються восени?',
  audio: 'task/november/autumn-vegetables.m4a',
  errorMessage: 'Вибери усі овочі',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    isCardsWide: false,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const AutumnVegetablesLevel: React.FC = () => (
  <QuizTemplate level={level}>
    <Picture
      src="pics/AutumnVegetablesCover.png"
      alt="Autumn fruits"
      className={styles.image}
    />
  </QuizTemplate>
);
