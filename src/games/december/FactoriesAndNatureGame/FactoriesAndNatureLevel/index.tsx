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
    image: 'pics/lessSickness0.png',
    text: 'Економити папір та здавати макулатуру',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/lessSickness1.png',
    text: 'Не палити опале листя та траву',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/lessSickness2.png',
    text: 'Ставити очисні спороди на труби заводів',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/lessSickness3.png',
    text: 'Не зливати бруд у водойми',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/lessSickness4.png',
    text: 'Саджати більше дерев та кущів',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/lessSickness5.png',
    text: 'Користуватись екологічним транспортом '
      + '(велосипер, самокат, трамвай тощо)',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Фабрики та заводи - це не тільки корисне виробництво, '
    + 'але і забруднене повітря та інколи земля та води. '
    + 'Що треба щоб жителі менше хворіли від брудного повітря та води?',
  errorMessage: 'Обери усі правильні відповіді',
  audio: 'task/december/healthy-people.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasMobile100PercentWidth: true,
    isStrict: true,
  },
};

export const FactoriesAndNatureLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
