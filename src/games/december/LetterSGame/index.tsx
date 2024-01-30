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
  audio: 'letters/letter-s.m4a',
  letter: 'С',
  sound: 'с',
  description: 'Стоять під снігом сосни сонно, \nСидять на соснах снігурі. \nСанчата на ставок з розгону \nСкотились весело з гори.',
  author: 'Н. Забіла',
  leftBlock: {
    image: 'objects/cheese.png',
    text: 'Сир',
  },
  rightBlock: {
    image: 'objects/sled250x250.png',
    text: 'Санчата',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'objects/tractor.png',
    isRight: false,
  },
  {
    image: 'objects/cheese.png',
    isRight: true,
  },
  {
    image: 'animals/turkey.png',
    isRight: false,
  },
  {
    image: 'objects/matches250x250.png',
    isRight: true,
  },
  {
    image: 'objects/skateboard.png',
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
  errorMessage: 'Обери усі предмети зі звуком [с]',
  description: 'Обери ті предмети, в назвах яких є звук [с]',
  audio: 'task/december/choose-item-with-s-task.m4a',
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
    image: 'plants/ananas.png',
    rightAnswerMask: [false, false, true],
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
    image: 'animals/fox.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/cactus.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/rhino.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [С] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/december/choose-letter-s-position-task.m4a',
};

export const useLetterSGame = gameStore.registerGame({
  game: {
    slug: 'letter-s',
    section: 'education',
    filter: 'speaking',
    month: 'december',
    name: 'Алфавіт - Літера С',
    image: 'covers/letterS.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-s',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-s-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-s',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letterSDraw.png',
            description: 'Обведи маленьку і велику літери С с.',
            audio: 'task/december/circle-letter-s.m4a',
          }}
        />
      ),
    },
  ],
});
