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
  audio: 'letters/letter-m.m4a',
  letter: 'М',
  sound: 'м',
  description: 'Удав - товстезний і строкатий\n - У затінок улігся спати.\nУвившись між високих трав,\nУдав до вечора куняв.',
  author: 'О. Кононенко',
  leftBlock: {
    image: 'animals/monkey.png',
    text: 'Мавпа',
  },
  rightBlock: {
    image: 'objects/ball-250x250.png',
    text: 'М ’яч',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'objects/key.png',
    isRight: false,
  },
  {
    image: 'objects/cheese.png',
    isRight: false,
  },
  {
    image: 'plants/cucumber.png',
    isRight: false,
  },
  {
    image: 'objects/ball-250x250.png',
    isRight: true,
  },
  {
    image: 'animals/monkey.png',
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
  errorMessage: 'Обери усі предмети зі звуком [м]',
  description: 'Обери ті предмети, в назвах яких є звук [м]',
  audio: 'task/november/choose-item-with-m-task.m4a',
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
    image: 'objects/ball-250x250.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/rat-250x250.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/cloud.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/necklace.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/monkey.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [м] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/november/choose-letter-m-position-task.m4a',
};

export const useLetterMGame = gameStore.registerGame({
  game: {
    slug: 'letter-m',
    section: 'education',
    filter: 'speaking',
    month: 'november',
    name: 'Алфавіт - Літера М',
    image: 'covers/coverLetterM.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-m',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-m-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-m',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letter-m-canvas.png',
            description: 'Обведи маленьку і велику літери М м.',
            audio: 'task/november/circle-letter-m.m4a',
          }}
        />
      ),
    },
  ],
});
