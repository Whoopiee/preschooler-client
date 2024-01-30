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

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'pics/apples.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'objects/broad.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'pics/house.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'people/uncle.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'plants/lilac.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'plants/pear.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
];

const artworkImage1 = 'pics/pictures2.png';
const artworkImage2 = 'pics/still-life-paint-760x440.svg';

const level: IQuizTemplate = {
  initialChoices,
  audio: 'task/november/still-art.m4a',
  description: 'Натюрморт – це жанр образотворчого мистецтва, в якому зображають неживі предмети, у реалістичному просторі : зірвані плоди, квіти, спійману здобич, а також можуть бути предмети, композиції фруктів чи овочів, посуд та інше.',
  errorMessage: 'Вибери усі елементи',
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

export const ArtworkLevel: React.FC = () => (
  <QuizTemplate level={level}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Picture style={{ width: '40%' }} src={artworkImage1} alt="Still life" />
      <Picture style={{ width: '40%' }} src={artworkImage2} alt="Still life" />
    </div>

    <LevelTask
      description="Які елементи можуть бути в натюрморті"
      audio="task/november/elements-on-natyurmort.m4a"
      hasTopMargin
    />
  </QuizTemplate>
);
