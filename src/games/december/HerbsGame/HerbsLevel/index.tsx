/* eslint-disable max-len */
import React from 'react';
import { v4 as uuid } from 'uuid';

import { IQuizChoice } from '@templates/QuizTemplate';
import { QuizVideoTemplate, IQuizVideoTemplate } from '@templates/QuizVideoTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'pics/chamomile.png',
    text: 'Ромашка',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/plantain.png',
    text: 'Подорожник',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/celandine.png',
    text: 'Чистотіл',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizVideoTemplate = {
  initialChoices,
  errorMessage: 'Обери правильну відповідь',
  description: 'Подивись відео та дай відповіді на запитання',
  audio: 'common-phrases/watch-and-choose-right.m4a',
  url: 'https://www.youtube.com/watch?v=L4GlfHfHYCQ',
  descriptionSecond: 'Яка з лікарських рослин тобі трапляється найчастіше?',
  audioSecond: 'task/december/familiar-plants.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    isStrict: true,
    hasMobile100PercentWidth: true,
    hasHeightByContent: true,
  },
};

export const HerbsLevel: React.FC = () => {
  return <QuizVideoTemplate level={level} />;
};
