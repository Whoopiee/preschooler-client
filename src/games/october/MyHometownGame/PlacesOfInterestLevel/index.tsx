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
    image: 'pics/embankment.png',
    isRight: true,
    isChosen: false,
    text: 'Набережна',
  },
  {
    id: uuid(),
    image: 'pics/monasteryIsland.png',
    isRight: true,
    isChosen: false,
    text: 'Монастирський острів',
  },
  {
    id: uuid(),
    image: 'pics/katerynoslavskyBoulevard.png',
    isRight: true,
    isChosen: false,
    text: 'Катеринославський бульвар',
  },
  {
    id: uuid(),
    image: 'pics/mostCity.png',
    isRight: true,
    isChosen: false,
    text: 'Мост Сіті',
  },
  {
    id: uuid(),
    image: 'pics/yachtClubSich.png',
    isRight: true,
    isChosen: false,
    text: 'Яхт-клуб “Січ”',
  },
  {
    id: uuid(),
    image: 'pics/greenGrove.png',
    isRight: true,
    isChosen: false,
    text: 'Зелений гай',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Оберіть визначні місця, де ви бували',
  audio: 'task/october/places-of-interest-task.m4a',
  isStrictCheck: false,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    isCardsWide: true,
    hasHeightByContent: false,
    hasMobile100PercentWidth: true,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
    hasImageOnly: false,
  },
};

export const PlacesOfInterestLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
