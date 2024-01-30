import { v4 as uuid } from 'uuid';

import {
  IQuizChoice,
  IQuizTemplate,
  QuizTemplate,
} from '@templates/QuizTemplate';

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    image: 'people/shower-350x250.png',
    text: 'Приймаємо душ замість вани',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/faucet.png',
    text: 'Вимикаємо воду під час чищення зубів',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/clock.png',
    text: 'Зменшуємо час водних процедур',
    isRight: true,
    isChosen: false,
  },
  // {
  //   id: uuid(),
  //   image: 'objects/washing-machine.png',
  //   text: 'Використовуємо повне зававантаження пральної машини',
  //   isRight: true,
  //   isChosen: false,
  // },
  {
    id: uuid(),
    image: 'objects/washing-machine.png',
    text: 'Повністю завантажуємо пральну машину',
    isRight: true,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/teapot.png',
    text: 'Наливаємо в чайник стільки води, скільки потрібно',
    isRight: false,
    isChosen: false,
  },
  {
    id: uuid(),
    image: 'objects/chiken.png',
    text: 'Розморожуємо продукти без гарячої води',
    isRight: false,
    isChosen: false,
  },
];

const newLevel: IQuizTemplate = {
  initialChoices,
  description: 'Як бережуть воду у вашій родині?',
  isStrictCheck: false,
  isSwitchable: true,
  audio: 'task/october/keep-water-task.m4a',
  card: {
    cardsInARow: 3,
    hasHeightByContent: false,
    hasMobile100PercentWidth: false,
    isStrict: false,
    isRounded: false,
    hasScaleOnHover: false,
  },
};

export const KeepWaterLevel: React.FC = () => (
  <QuizTemplate level={newLevel} />
);
