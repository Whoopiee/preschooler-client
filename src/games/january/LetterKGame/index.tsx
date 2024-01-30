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
  audio: 'letters/letter-k.m4a',
  letter: 'К',
  sound: 'к',
  description: 'И-и-и, - канючить Вова, - \nНе піду в сарай по дрова. \nЦе чому ж? Там лад і тиша. \n-Там гасає хижа миша.',
  author: 'Г. Бойченко',
  leftBlock: {
    image: 'animals/horse.png',
    text: 'Кінь',
  },
  rightBlock: {
    image: 'plants/watermelon.png',
    text: 'Кавун',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'animals/rhino.png',
    isRight: false,
  },
  {
    image: 'objects/excavator.png',
    isRight: true,
  },
  {
    image: 'animals/cancer.png',
    isRight: true,
  },
  {
    image: 'objects/key.png',
    isRight: true,
  },
  {
    image: 'objects/pen2.png',
    isRight: false,
  },
];

const initialChoices: IQuizChoice[] = images.map((image) => ({
  id: uuid(),
  isChosen: false,
  ...image,
}));

const chooseItemWithLetter: IQuizTemplate = {
  initialChoices,
  errorMessage: 'Обери усі предмети зі звуком [к]',
  description: 'Обери ті предмети, в назвах яких є звук [к]',
  audio: 'task/january/choose-item-with-k-task.m4a',
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
    image: 'animals/horse.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/chocolate-250x250.svg',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/teapot250x250.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/rowan.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/turkey.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [К] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/january/choose-letter-k-position-task.m4a',
};

export const useLetterKGame = gameStore.registerGame({
  game: {
    slug: 'letter-k',
    section: 'education',
    filter: 'speaking',
    month: 'january',
    name: 'Алфавіт - Літера К',
    image: 'covers/coverLetterK.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-k',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-k-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-k',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letterKDraw.png',
            description: 'Обведи маленьку і велику літери К к.',
            audio: 'task/january/circle-letter-k.m4a',
          }}
        />
      ),
    },
  ],
});
