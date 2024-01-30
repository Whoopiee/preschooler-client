import React from 'react';
import { v4 as uuid } from 'uuid';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';
import { Picture } from '@components/Picture';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'objects/pic1.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic2.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic3.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic4.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic5.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic6.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic7.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pic8.png',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Виберіть правильну схему розташування фігур',
  audio: 'task/november/figure-order.m4a',
  errorMessage: 'Знайди усі фігури',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 4,
    isCardsWide: false,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const LogicNovemberLevel: React.FC = () => (
  <QuizTemplate level={level}>
    <Picture src="pics/picMain.png" style={{ width: '50%' }} />
  </QuizTemplate>
);
