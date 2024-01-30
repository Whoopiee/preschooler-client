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
    image: 'people/parents230x230.png',
    text: 'Батьки',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/brother-sister230x230.png',
    text: 'Брат/сестра',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/grandparents230x230.png',
    text: 'Бабуся/дідусь',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/aunt-uncle230x230.png',
    text: 'Тітка/дядько',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/neighbors230x230.png',
    text: 'Сусіди',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/friendskind230x230.png',
    text: 'Друзі з садочка',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'people/friendsyard230x230.png',
    text: 'Друзі з двору',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'З ким ти любиш спілкуватися',
  audio: 'task/december/prefer-talking.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 4,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: false,
    isRounded: true,
    hasScaleOnHover: false,
  },
};

export const LikeConversationsLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
