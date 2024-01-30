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
  audio: 'letters/letter-i.m4a',
  letter: 'І',
  sound: 'і',
  description: 'І-і-і, \nЛошачки малі. \nЄ у них чотири ніжки; \nКоло воза ідуть пішки - \nІ-і-і, \nЛошачки малі.',
  author: 'М. Підгірянка',
  leftBlock: {
    image: 'animals/turkey.png',
    text: 'Індик',
  },
  rightBlock: {
    image: 'plants/ginger300x300.png',
    text: 'Імбир',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'plants/ginger250x250.png',
    isRight: true,
  },
  {
    image: 'objects/scissors250x250.png',
    isRight: true,
  },
  {
    image: 'animals/turkey.png',
    isRight: true,
  },
  {
    image: 'objects/ball-250x250.png',
    isRight: false,
  },
  {
    image: 'objects/bed.png',
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
  errorMessage: 'Обери усі предмети зі звуком [і]',
  description: 'Обери ті предмети, в назвах яких є звук [і]',
  audio: 'task/december/choose-item-with-i-task.m4a',
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
    image: 'objects/door250x250.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/lizard250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/airplane.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/donkey250x250.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/matches250x250.png',
    rightAnswerMask: [true, false, true],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [І] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/december/choose-letter-i-position-task.m4a',
};

export const useLetterIGame = gameStore.registerGame({
  game: {
    slug: 'letter-i',
    section: 'education',
    filter: 'speaking',
    month: 'december',
    name: 'Алфавіт - Літера І',
    image: 'covers/letterI.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-i',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-i-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-i',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'objects/letterIDraw.png',
            description: 'Обведи маленьку і велику літери І і.',
            audio: 'task/december/circle-letter-i.m4a',
          }}
        />
      ),
    },
  ],
});
