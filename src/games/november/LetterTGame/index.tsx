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
  audio: 'letters/letter-t.m4a',
  letter: 'Т',
  sound: 'т',
  description: 'Удав - товстезний і строкатий\n - У затінок улігся спати.\nУвившись між високих трав,\nУдав до вечора куняв.',
  author: 'О. Кононенко',
  leftBlock: {
    image: 'objects/tractor.png',
    text: 'Трактор',
  },
  rightBlock: {
    image: 'animals/tiger.png',
    text: 'Тигр',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'plants/watermelon.png',
    isRight: false,
  },
  {
    image: 'objects/tractor.png',
    isRight: true,
  },
  {
    image: 'animals/turkey.png',
    isRight: false,
  },
  {
    image: 'animals/cancer.png',
    isRight: false,
  },
  {
    image: 'animals/tiger.png',
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
  errorMessage: 'Обери усі предмети зі звуком [т]',
  description: 'Обери ті предмети, в назвах яких є звук [т]',
  audio: 'task/november/choose-item-with-t-task.m4a',
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
    image: 'objects/skate.png',
    rightAnswerMask: [false, true, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/yogurt.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/hippo.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/raccoon.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/airplane.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [т] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/november/choose-letter-t-position-task.m4a',
};

export const useLetterTGame = gameStore.registerGame({
  game: {
    slug: 'letter-t',
    section: 'education',
    filter: 'speaking',
    month: 'november',
    name: 'Алфавіт - Літера Т',
    image: 'covers/coverLetterT.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-t',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-t-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-t',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letter-t-canvas.png',
            description: 'Обведи маленьку і велику літери Т т.',
            audio: 'task/november/circle-letter-t.m4a',
          }}
        />
      ),
    },
  ],
});
