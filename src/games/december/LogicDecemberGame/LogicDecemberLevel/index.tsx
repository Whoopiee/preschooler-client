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
    image: 'plants/pear.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/saw250x250.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/socket250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/cup-250x250.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/ball-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/patifon.png',
    isRight: true,
    isChosen: false,
  },
];

const picMain = 'pics/logicNovPrew.png';

const level: IQuizTemplate = {
  initialChoices,
  description: 'Гра “Знайди відповідність”',
  audio: 'task/december/find-match.m4a',
  errorMessage: 'Знайди усі відповідності',
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

export const LogicDecemberLevel: React.FC = () => (
  <QuizTemplate level={level}>
    <Picture src={picMain} alt="asd" style={{ width: '50%' }} />
  </QuizTemplate>
);
