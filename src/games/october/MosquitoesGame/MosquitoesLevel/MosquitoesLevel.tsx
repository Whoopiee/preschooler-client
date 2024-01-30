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

import { InsectInfo } from '../InsectInfo';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'animals/ant.png',
    isRight: true,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'animals/bee.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'animals/dragonfly.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
  {
    id: uuid(),
    image: 'animals/ladybug.png',
    isRight: false,
    isChosen: false,
    text: '',
  },
];

const level: IQuizTemplate = {
  initialChoices,
  description: 'Комахи бувають корисні та шкідливі. Нижче зображені корисні комахи',
  errorMessage: 'Вибери комаху',
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

export const MosquitoesLevel: React.FC = () => (
  <QuizTemplate level={level}>
    <InsectInfo items={[
      { text: 'Бабка', image: 'animals/dragonfly.png' },
      { text: 'Сонечко', image: 'animals/ladybug.png' },
      { text: 'Мураха', image: 'animals/ant.png' },
      { text: 'Бджола', image: 'animals/bee.png' },
    ]}
    />

    <LevelTask
      description="Яких комах більше на малюнку?"
      audio="task/october/mosquitoes-task.m4a"
      hasTopMargin
    />

    <Picture
      src="pics/Garden_insects.png"
      style={{ marginBottom: '32px', width: '80%' }}
      alt="Garden_insects"
    />
  </QuizTemplate>
);
