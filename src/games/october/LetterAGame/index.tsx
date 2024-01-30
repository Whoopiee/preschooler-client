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
  audio: 'letters/letter-a.m4a',
  letter: 'А',
  sound: 'a',
  description: 'Альбатрос Абетку мав,\nАкулятам її дав.\nА-Бе-Ве-акула-мати\nАкулят навча читати.',
  author: 'О. Кононенко',
  leftBlock: {
    image: 'plants/ananas.svg',
    text: 'Ананас',
  },
  rightBlock: {
    image: 'animals/shark.svg',
    text: 'Акула',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'plants/ananas.png',
    isRight: true,
  },
  {
    image: 'objects/key.png',
    isRight: false,
  },
  {
    image: 'objects/scissors.png',
    isRight: false,
  },
  {
    image: 'objects/pencil1.png',
    isRight: false,
  },
  {
    image: 'animals/shark.png',
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
  errorMessage: 'Обери усі предмети зі звуком [а]',
  description: 'Обери ті предмети, в назвах яких є звук [а]',
  audio: 'task/october/choose-item-with-a-task.m4a',
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
    image: 'plants/watermelon.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/fish.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/shark.png',
    rightAnswerMask: [true, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/zebra.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/baguette.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [a] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/october/choose-letter-a-position-task.m4a',
};

export const useLetterAGame = gameStore.registerGame({
  game: {
    slug: 'letter-a',
    section: 'education',
    filter: 'speaking',
    month: 'october',
    name: 'Алфавіт - Літера А',
    image: 'covers/letter-a.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-a',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-a-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-a',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letter-a-canvas.png',
            description: 'Напиши маленьку і велику літери А а.',
            audio: 'task/october/draw-letter-a-task.m4a',
          }}
        />
      ),
    },
  ],
});
