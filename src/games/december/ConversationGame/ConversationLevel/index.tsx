/* eslint-disable max-len */
import React from 'react';
import { v4 as uuid } from 'uuid';

import { IQuizChoice } from '@templates/QuizTemplate';
import { QuizVideoTemplate, IQuizVideoTemplate } from '@templates/QuizVideoTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'pics/bicycle400x450.png',
    text: 'Нового велосипеду',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/robot400x450.png',
    text: 'Розумного робота',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/conversations400x450.png',
    text: 'Живого спілкування',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizVideoTemplate = {
  initialChoices,
  errorMessage: 'Обери правильну відповідь',
  description: 'Подивись відео та обери правильні відповіді',
  url: 'https://www.youtube.com/watch?v=VWZ0PHueaTk',
  descriptionSecond: 'Чого не вистачало хлопчику?',
  audio: 'common-phrases/watch-and-choose-right.m4a',
  audioSecond: 'task/december/boy-needs.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    isStrict: true,
    hasMobile100PercentWidth: true,
    hasHeightByContent: true,
  },
};

export const ConversationLevel: React.FC = () => {
  return <QuizVideoTemplate level={level} />;
};
