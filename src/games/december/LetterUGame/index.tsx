/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import * as Template from '@templates/LetterTemplate';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';
import { ILetterPositionCard } from '@components/cards/LetterPositionCard';

import { gameStore } from '@core/GameStore';

const startLetterLevel = {
  audio: 'letters/letter-u.m4a',
  letter: 'И',
  sound: 'и',
  description: 'И-и-и, - канючить Вова, - \nНе піду в сарай по дрова. \nЦе чому ж? Там лад і тиша. \n-Там гасає хижа миша.',
  author: 'Г. Бойченко',
  leftBlock: {
    image: 'objects/cheese.png',
    text: 'сИр',
  },
  rightBlock: {
    image: 'animals/rat-250x250.png',
    text: 'мИша',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'objects/skripka250x250.png',
    isRight: true,
  },
  {
    image: 'objects/clock250x250.png',
    isRight: true,
  },
  {
    image: 'objects/chess250x250.png',
    isRight: true,
  },
  {
    image: 'objects/bath250x250.png',
    isRight: false,
  },
  {
    image: 'objects/matches250x250.png',
    isRight: true,
  },
];

const initialChoices: IQuizChoice[] = images.map((image) => ({
  id: uuid(),
  isChosen: false,
  ...image,
}));

const chooseItemWithLetter: IQuizTemplate = {
  initialChoices,
  errorMessage: 'Обери усі предмети зі звуком [и]',
  description: 'Обери ті предмети, в назвах яких є звук [и]',
  audio: 'task/december/choose-item-with-u-task.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 5,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

const initialAnswers: ILetterPositionCard[] = [
  {
    id: uuid(),
    image: 'animals/fish.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/raspberry.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/cherry.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/saw250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/teapot250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [И] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/december/choose-letter-u-position-task.m4a',
};

export const useLetterUGame = gameStore.registerGame({
  game: {
    slug: 'letter-u',
    section: 'education',
    filter: 'speaking',
    month: 'december',
    name: 'Алфавіт - Літера И',
    image: 'covers/letterU.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-u',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-u-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-u',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letterUDraw.png',
            description: 'Обведи маленьку і велику літери И и.',
            audio: 'task/december/circle-letter-u.m4a',
          }}
        />
      ),
    },
  ],
});
