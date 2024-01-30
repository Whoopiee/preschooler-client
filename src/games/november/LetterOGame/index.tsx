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
  audio: 'letters/letter-o.m4a',
  letter: 'О',
  sound: 'о',
  description: 'Один осел в гніздо осине \nОберемок сіна кинув \nОт оказія була - \nОси жалили осла!',
  author: 'О. Кононенко',
  leftBlock: {
    image: 'plants/cucumber.png',
    text: 'Огірок',
  },
  rightBlock: {
    image: 'objects/pencil1.png',
    text: 'Олівець',
  },
};

const images: Pick<IQuizChoice, 'isRight' | 'image'>[] = [
  {
    image: 'objects/pencil1.png',
    isRight: true,
  },
  {
    image: 'objects/bed.png',
    isRight: true,
  },
  {
    image: 'plants/cucumber.png',
    isRight: true,
  },
  {
    image: 'objects/teacher.png',
    isRight: false,
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
  errorMessage: 'Обери усі предмети зі звуком [о]',
  description: 'Обери ті предмети, в назвах яких є звук [о]',
  audio: 'task/november/choose-item-with-o-task.m4a',
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
    image: 'plants/apple.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/glasses.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/pencil1.png',
    rightAnswerMask: [true, false, false],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'objects/necklace.png',
    rightAnswerMask: [false, false, true],
    isAnswered: [false, false, false],
  },
  {
    id: uuid(),
    image: 'plants/tomato.png',
    rightAnswerMask: [true, false, true],
    isAnswered: [false, false, false],
  },
];

const chooseLetterPosition = {
  initialAnswers,
  description: `Назви зображені предмети. Де в їхніх назвах розташований
  звук [О] - на початку, в кінці чи в середині? Обери відповідну
  частину схеми`,
  audio: 'task/november/choose-letter-o-position-task.m4a',
};

export const useLetterOGame = gameStore.registerGame({
  game: {
    slug: 'letter-o',
    section: 'education',
    filter: 'speaking',
    month: 'november',
    name: 'Алфавіт - Літера О',
    image: 'covers/coverLetterO.png',
  },
  levels: [
    {
      path: 'start',
      element: () => <Template.StartLetterLevel level={startLetterLevel} />,
    },
    {
      path: 'choose-item-with-o',
      element: () => <QuizTemplate level={chooseItemWithLetter} />,
    },
    {
      path: 'choose-letter-o-position',
      element: () => <Template.ChooseLetterPosition level={chooseLetterPosition} />,
    },
    {
      path: 'draw-letter-o',
      element: () => (
        <Template.DrawLetterLevel
          level={{
            image: 'pics/letter-o-canvas.png',
            description: 'Обведи маленьку і велику літери О о.',
            audio: 'task/november/circle-letter-o.m4a',
          }}
        />
      ),
    },
  ],
});
