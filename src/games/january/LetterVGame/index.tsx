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
  audio: 'letters/letter-v.m4a',
  letter: 'В',
  sound: 'в',
  description: 'Стоять під снігом сосни сонно, \nСидять на соснах снігурі. \nСанчата на ставок з розгону \nСкотились весело з гори.',
  author: 'Н. Забіла',
  leftBlock: {
    image: 'plants/cherry.png',
    text: 'Вишня',
  },
  rightBlock: {
    image: 'animals/camel.png',
    text: 'Верблюд',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'plants/watermelon.png',
    isRight: true,
  },
  {
    image: 'plants/cherry.png',
    isRight: true,
  },
  {
    image: 'animals/camel.png',
    isRight: true,
  },
  {
    image: 'objects/airplane.png',
    isRight: false,
  },
  {
    image: 'plants/cucumber.png',
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
  errorMessage: 'Обери усі предмети зі звуком [в]',
  description: 'Обери ті предмети, в назвах яких є звук [в]',
  audio: 'task/january/choose-item-with-v-task.m4a',
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
    image: 'animals/cow1.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/bath-250x250.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/monkey.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/spider-250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/wolf-250x250.png',
    rightAnswerMask: [true, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [В] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/january/choose-letter-v-position-task.m4a',
};

export const useLetterVGame = gameStore.registerGame({
  game: {
    slug: 'letter-v',
    section: 'education',
    filter: 'speaking',
    month: 'january',
    name: 'Алфавіт - Літера В',
    image: 'covers/coverLetterV.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-v',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-v-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-v',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letterVDraw.png',
            description: 'Обведи маленьку і велику літери В в.',
            audio: 'task/january/circle-letter-v.m4a',
          }}
        />
      ),
    },
  ],
});
