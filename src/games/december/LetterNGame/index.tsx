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
  audio: 'letters/letter-n.m4a',
  letter: 'Н',
  sound: 'н',
  description: 'На довгу нитку намистинки \nНастуся хоче нанизать. \nВона напевно буде нині \nНа нашім святі виступать.',
  author: 'Н. Забіла',
  leftBlock: {
    image: 'objects/necklace.png',
    text: 'Намисто',
  },
  rightBlock: {
    image: 'animals/rhino.png',
    text: 'Носоріг',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'objects/necklace.png',
    isRight: true,
  },
  {
    image: 'plants/tomato.png',
    isRight: false,
  },
  {
    image: 'animals/camel.png',
    isRight: false,
  },
  {
    image: 'objects/sled250x250.png',
    isRight: true,
  },
  {
    image: 'animals/rhino.png',
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
  errorMessage: 'Обери усі предмети зі звуком [н]',
  description: 'Обери ті предмети, в назвах яких є звук [н]',
  audio: 'task/december/choose-item-with-n-task.m4a',
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
    image: 'plants/banana.png',
    rightAnswerMask: [false, true, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/rowan.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/raccoon.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/granate250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/sled250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [Н] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/december/choose-letter-n-position-task.m4a',
};

export const useLetterNGame = gameStore.registerGame({
  game: {
    slug: 'letter-n',
    section: 'education',
    filter: 'speaking',
    month: 'december',
    name: 'Алфавіт - Літера Н',
    image: 'covers/letterN.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-n',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-n-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-n',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letterNDraw.png',
            description: 'Обведи маленьку і велику літери Н н.',
            audio: 'task/december/circle-letter-n.m4a',
          }}
        />
      ),
    },
  ],
});
