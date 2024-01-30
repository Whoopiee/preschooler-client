/* eslint-disable max-len */
import React from 'react';
import { v4 as uuid } from 'uuid';

import { IQuizChoice } from '@templates/QuizTemplate';
import { QuizVideoTemplate, IQuizVideoTemplate } from '@templates/QuizVideoTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'pics/condolences400x450.png',
    text: 'Співчуття',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/respect400x450.png',
    text: 'Повага',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/envy400x450.png',
    text: 'Заздрість',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizVideoTemplate = {
  initialChoices,
  errorMessage: 'Обери правильну відповідь',
  description: 'Толерантність - це мистецтво жити з іншими людьми та з іншими ідеями. Подивись відео та обери правильні відповіді',
  url: 'https://www.youtube.com/watch?v=DKWHP_41uRY',
  descriptionSecond: 'Яка з картинок не є прикладом толерантності',
  audio: 'common-phrases/watch-and-choose-right.m4a',
  audioSecond: 'task/december/not-tolerant-picture.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    isStrict: true,
    hasMobile100PercentWidth: true,
    hasHeightByContent: true,
  },
};

export const ToleranceLevel: React.FC = () => {
  return <QuizVideoTemplate level={level} />;
};
