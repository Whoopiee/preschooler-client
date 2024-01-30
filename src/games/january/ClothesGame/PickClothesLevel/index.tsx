import { v4 as uuid } from 'uuid';

import {
  IQuizTemplate,
  IQuizChoice,
  QuizTemplate,
} from '@templates/QuizTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'objects/pinkshirt-250x250.svg',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/scarf-250x250.svg',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/flipflops-250x250.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/jacket-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/cap-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/hat-250x250.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/boots-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/sweater-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pinkgloves-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/shirt-250x250.png',
    isRight: false,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  errorMessage: 'Оберіть усі правильні картинки',
  description: 'Який одяг та взуття носять взимку?',
  verse: [
    'Вдень - завзяті та проворні:',
    'можем бігати, стрибати,',
    'а вночі ми безпорадні,',
    'бо лягають ноги спати.',
  ],
  // audioVerse: 'task/january/gain-electricity.m4a',
  audio: 'task/january/wich-clothes-and-shoes.m4a',
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

export const PickClothesLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
