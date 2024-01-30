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
  audio: 'letters/letter-l.m4a',
  letter: 'Л',
  sound: 'л',
  description: 'Удав - товстезний і строкатий\n - У затінок улігся спати.\nУвившись між високих трав,\nУдав до вечора куняв.',
  author: 'О. Кононенко',
  leftBlock: {
    image: 'objects/bed.png',
    text: 'Ліжко',
  },
  rightBlock: {
    image: 'objects/airplane.png',
    text: 'Літак',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'objects/clippers.png',
    isRight: false,
  },
  {
    image: 'objects/cup-250x250.png',
    isRight: false,
  },
  {
    image: 'objects/excavator.png',
    isRight: false,
  },
  {
    image: 'objects/airplane.png',
    isRight: true,
  },
  {
    image: 'objects/stove.png',
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
  errorMessage: 'Обери усі предмети зі звуком [л]',
  description: 'Обери ті предмети, в назвах яких є звук [л]',
  audio: 'task/november/choose-item-with-l-task.m4a',
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
    image: 'plants/raspberry.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/soap.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/saw.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/key.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/rowan.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [л] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/november/choose-letter-l-position-task.m4a',
};

export const useLetterLGame = gameStore.registerGame({
  game: {
    slug: 'letter-l',
    section: 'education',
    filter: 'speaking',
    month: 'november',
    name: 'Алфавіт - Літера Л',
    image: 'covers/coverLetterL.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-l',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-l-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-l',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letter-l-canvas.png',
            description: 'Обведи маленьку і велику літери Л л.',
            audio: 'task/november/circle-letter-l.m4a',
          }}
        />
      ),
    },
  ],
});
