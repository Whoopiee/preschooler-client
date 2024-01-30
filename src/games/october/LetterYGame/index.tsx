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

const startLetterYLevel = {
  letter: 'У',
  sound: 'у',
  audio: 'letters/letter-y.m4a',
  description: 'Удав - товстезний і строкатий\n - У затінок улігся спати\nУвившись між високих трав,\nУдав до вечора куняв.',
  author: 'О. Кононенко',
  leftBlock: {
    image: 'people/teacher.svg',
    text: 'Учитель',
  },
  rightBlock: {
    image: 'objects/smile.svg',
    text: 'Усмішка',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'animals/shark.png',
    isRight: true,
  },
  {
    image: 'objects/smile.png',
    isRight: true,
  },
  {
    image: 'animals/monkey.png',
    isRight: false,
  },
  {
    image: 'objects/ball-250x250.png',
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

const chooseItemWithYLetter: IQuizTemplate = {
  initialChoices,
  errorMessage: 'Обери усі предмети зі звуком [у]',
  description: 'Обери ті предмети, в назвах яких є звук [у]',
  audio: 'task/october/choose-item-with-y-task.m4a',
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
    image: 'plants/flowers.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/pear.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'animals/chicken.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/watermelon.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/pen.png',
    rightAnswerMask: [false, true, false],
    isAnswered: [false, false, false],
  },
];

const chooseLetterYPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [у] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/october/choose-letter-y-position-task.m4a',
};

export const useLetterYGame = gameStore.registerGame({
  game: {
    slug: 'letter-y',
    section: 'education',
    filter: 'speaking',
    month: 'october',
    name: 'Алфавіт - Літера У',
    image: 'covers/letterY.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterYLevel} />,
    },
    {
      path: 'choose-item-with-y',
      element: () => <QuizTemplate level={chooseItemWithYLetter} />,
    },
    {
      path: 'choose-letter-y-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterYPosition} />,
    },
    {
      path: 'draw-letter-y',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letter-y-1536x300.png',
            description: 'Напиши маленьку і велику літери У у.',
            audio: 'task/october/draw-letter-y.m4a',
          }}
        />
      ),
    },
  ],
});
