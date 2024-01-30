import { v4 as uuid } from 'uuid';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'animals/rat-250x250.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/ball-250x250.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/bush-250x250.svg',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'plants/bush-small-250x250.svg',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/chocolate-250x250.svg',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/cup-250x250.png',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/dolphin.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'animals/fish.png',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/pencil-250x250.svg',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/teacher.png',
    isRight: true,
    isChosen: false,
  },
];

const level: IQuizTemplate = {
  initialChoices,
  errorMessage: 'Оберіть усі правильні картинки',
  description: 'Хто має потребу у воді?',
  audio: 'task/october/demand-water-task.m4a',
  audioVerse: 'task/october/demand-water-verse.m4a',
  verse: [
    'Відома вам всім рідина,',
    'Усі її вживають,',
    'Буває хмаркою вона,',
    'Сніжинкою буває.',
    'Бува як скло, бува тверда,',
    'Звичайна, підкажіть ...',
  ],
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

export const DemandWaterLevel: React.FC = () => (
  <QuizTemplate level={level} />
);
