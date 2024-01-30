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
    image: 'pics/factoriesOleyna.png',
    text: 'Завод “Олейна”',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/factoriesInterpipe.png',
    text: 'Металургійний завод “Інтерпайп”',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/factoriesMachine.png',
    text: 'Південний машинобудівний завод',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/factoriesMetalurg.png',
    text: 'Дніпровський металургійний завод',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/factoriesProgres.png',
    text: 'Меблева фабрика “Прогрес”',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'pics/factoriesDnipropres.png',
    text: 'Завод “Дніпропрес”',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Фабрики та заводи - це промислові підприємства, '
    + 'які щось виробляють або перероблюють. '
    + 'Про які з цих заводів та фабрик ти знаєш або чув?',
  audio: 'task/december/familiar-factories.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasMobile100PercentWidth: true,
    isStrict: true,
  },
};

export const FactoriesAndPlantsLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
