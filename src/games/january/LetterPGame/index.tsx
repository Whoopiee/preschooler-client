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
  audio: 'letters/letter-p.m4a',
  letter: 'П',
  sound: 'п',
  description: 'На довгу нитку намистинки \nНастуся хоче нанизать. \nВона напевно буде нині \nНа нашім святі виступать.',
  author: 'Н. Забіла',
  leftBlock: {
    image: 'objects/avtoPolice-300x300.png',
    text: 'Поліція',
  },
  rightBlock: {
    image: 'plants/tomato.png',
    text: 'Помідор',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'animals/stork-250x250.png',
    isRight: false,
  },
  {
    image: 'plants/tomato.png',
    isRight: true,
  },
  {
    image: 'animals/frog.png',
    isRight: false,
  },
  {
    image: 'objects/teacher.png',
    isRight: false,
  },
  {
    image: 'objects/stove.png',
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
  errorMessage: 'Обери усі предмети зі звуком [п]',
  description: 'Обери ті предмети, в назвах яких є звук [п]',
  audio: 'task/january/choose-item-with-p-task.m4a',
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
    image: 'objects/skripka.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/hat.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/monkey.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/spider-250x250.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/stork-250x250.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [П] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/january/choose-letter-p-position-task.m4a',
};

export const useLetterPGame = gameStore.registerGame({
  game: {
    slug: 'letter-p',
    section: 'education',
    filter: 'speaking',
    month: 'january',
    name: 'Алфавіт - Літера П',
    image: 'covers/coverLetterP.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-p',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-p-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-p',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letterPDraw.png',
            description: 'Обведи маленьку і велику літери П п.',
            audio: 'task/january/circle-letter-p.m4a',
          }}
        />
      ),
    },
  ],
});
