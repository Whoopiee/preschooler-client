/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IMusicCard } from '@components/cards/MusicCard';
import { IQuizMusicCard } from '@components/cards/QuizMusicCard';
import { IQuizMusicTemplate, QuizMusicTemplate } from '@templates/QuizMusicTemplate';

const exampleMusicCards: IMusicCard[] = [
  {
    id: uuid(),
    sound: 'vehicles/plane.m4a',
    image: 'objects/airplane250x250.png',
    title: 'Літак',
  },
  {
    id: uuid(),
    sound: 'vehicles/train.m4a',
    image: 'objects/train250x250.png',
    title: 'Поїзд',
  },
  {
    id: uuid(),
    sound: 'vehicles/bike.m4a',
    image: 'objects/motorcycle250x250.png',
    title: 'Мотоцикл',
  },
  {
    id: uuid(),
    sound: 'vehicles/helicopter.m4a',
    image: 'objects/helicopter250x250.png',
    title: 'Гелікоптер',
  },
  {
    id: uuid(),
    sound: 'vehicles/excavator.m4a',
    image: 'objects/excavator250x250.png',
    title: 'Екскаватор',
  },
  {
    id: uuid(),
    sound: 'vehicles/ambulance.m4a',
    image: 'objects/Ambulance250x250.png',
    title: 'Швидка допомога',
  },
  {
    id: uuid(),
    sound: 'vehicles/boat-horn.m4a',
    image: 'objects/liner250x250.png',
    title: 'Лайнер',
  },
  {
    id: uuid(),
    sound: 'vehicles/rocket.m4a',
    image: 'objects/rocket250x250.png',
    title: 'Ракета',
  },
];

const initialMusicAnswers: IQuizMusicCard[] = [
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Екскаватор', isRight: true, isChosen: false },
      { text: 'Лайнер', isRight: false, isChosen: false },
      { text: 'Поїзд', isRight: false, isChosen: false },
    ],
    audio: 'vehicles/excavator.m4a',
    riddlesText: 'Транспорт 1',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Гелікоптер', isRight: false, isChosen: false },
      { text: 'Ракета', isRight: false, isChosen: false },
      { text: 'Літак', isRight: true, isChosen: false },
    ],
    audio: 'vehicles/plane.m4a',
    riddlesText: 'Транспорт 2',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Лайнер', isRight: false, isChosen: false },
      { text: 'Поїзд', isRight: true, isChosen: false },
      { text: 'Екскаватор', isRight: false, isChosen: false },
    ],
    audio: 'vehicles/train.m4a',
    riddlesText: 'Транспорт 3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Літак', isRight: false, isChosen: false },
      { text: 'Ракета', isRight: true, isChosen: false },
      { text: 'Швидка допомога', isRight: false, isChosen: false },
    ],
    audio: 'vehicles/rocket.m4a',
    riddlesText: 'Транспорт 4',
  },
];

const level: IQuizMusicTemplate = {
  exampleMusicCards,
  initialMusicAnswers,
  audio: 'task/december/memorize-transport-sound.m4a',
  audioSecond: 'task/december/guess-transport.m4a',
  description: 'Запам’ятай звуки сучасного транспорту',
  descriptionSecond: 'Відгадай про який засіб транспорту йдеться?',
  errorMessage: 'Вгадай усі звуки транспорту',
  cardsInARow: 4,
};

export const TransportLevel: React.FC = () => (
  <QuizMusicTemplate level={level} />
);
