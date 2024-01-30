import { v4 as uuid } from 'uuid';
import { IQuizTemplate, IQuizChoice } from '@templates/QuizTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'objects/street-250x250.png',
    isRight: true,
    isChosen: false,
    text: 'Прогулянки',
  },
  {
    id: uuid(),
    image: 'objects/dogs-toy-250x250.png',
    isRight: true,
    isChosen: false,
    text: 'Рухливі ігри',
  },
  {
    id: uuid(),
    image: 'objects/food-250x250.png',
    isRight: false,
    isChosen: false,
    text: 'Їжа зі столу',
  },
  {
    id: uuid(),
    image: 'objects/punishment-250x250.png',
    isRight: false,
    isChosen: false,
    text: 'Покарання',
  },
  {
    id: uuid(),
    image: 'objects/shower-250x250.png',
    isRight: true,
    isChosen: false,
    text: 'Купання',
  },
  {
    id: uuid(),
    image: 'objects/groomer-250x250.png',
    isRight: true,
    isChosen: false,
    text: 'Стрижка',
  },
];

export const level: IQuizTemplate = {
  initialChoices,
  errorMessage: 'Оберіть усі правильні картинки',
  description: 'Як треба правильно доглядати за собакою?',
  audio: 'task/january/watch-the-dog.m4a',
  isStrictCheck: true,
  isSwitchable: true,
  card: {
    cardsInARow: 3,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: true,
    isRounded: false,
    hasScaleOnHover: false,
    textCentered: true,
  },
};
