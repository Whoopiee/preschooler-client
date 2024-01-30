/* eslint-disable max-len */
import React from 'react';
import { v4 as uuid } from 'uuid';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';

import { Picture } from '@components/Picture';
import { LevelTask } from '@core/components/LevelTask';
import styles from './LandscapeLevel.module.scss';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'pics/portrait-Shevchenko.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'pics/pictures2.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'pics/pictures3.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'pics/pictures4.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Пейзаж - це загальний вигляд якоїсь місцевості, картина природи, краєвид.',
  audio: 'task/october/landskape-title.m4a',
  errorMessage: 'Вибери усі елементи',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 2,
    isCardsWide: false,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const LandscapeLevel: React.FC = () => (
  <QuizTemplate level={level}>

    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Picture className={styles.image} src="pics/landscapeup1.png" />
      <Picture className={styles.image} src="pics/landscapeup2.png" />
    </div>

    <LevelTask
      description="Знайди картини пейзажу"
      audio="task/october/landscape-task.m4a"
    />

  </QuizTemplate>
);
