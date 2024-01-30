/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IMusicCard } from '@components/cards/MusicCard';
import { IQuizMusicCard } from '@components/cards/QuizMusicCard';
import { IQuizMusicTemplate, QuizMusicTemplate } from '@templates/QuizMusicTemplate';

const exampleMusicCards: IMusicCard[] = [
  {
    id: uuid(),
    sound: 'music/classic.mp3',
    image: 'objects/skripka.png',
    title: 'Класична',
    description: 'Найдавніший музичний жанр. Музика без співів',
  },
  {
    id: uuid(),
    sound: 'music/folk.mp3',
    image: 'objects/accordion.png',
    title: 'Народна',
    description: 'Відображає характер народу, його традиції, історичні події.',
  },
  {
    id: uuid(),
    sound: 'music/disco.mp3',
    image: 'objects/patifon.png',
    title: 'Сучасна',
    description: 'Проста інструментальна мелодія та ритм з голосовим супроводом.',
  },
];

const initialMusicAnswers: IQuizMusicCard[] = [
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Класична', isRight: true, isChosen: false },
      { text: 'Народна', isRight: false, isChosen: false },
      { text: 'Сучасна', isRight: false, isChosen: false },
    ],
    audio: 'music/classic.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Класична', isRight: false, isChosen: false },
      { text: 'Народна', isRight: false, isChosen: false },
      { text: 'Сучасна', isRight: true, isChosen: false },
    ],
    audio: 'music/disco.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Класична', isRight: false, isChosen: false },
      { text: 'Народна', isRight: true, isChosen: false },
      { text: 'Сучасна', isRight: false, isChosen: false },
    ],
    audio: 'music/folk.mp3',
  },
];

const level: IQuizMusicTemplate = {
  exampleMusicCards,
  initialMusicAnswers,
  audio: 'task/october/music-genres-september-task.m4a',
  audioSecond: 'task/october/music-genres-september-second-task.m4a',
  description: 'Прослухай звуковий фрагмент, що представляє певний жанр',
  descriptionSecond: 'Вгадай жанри музики',
  errorMessage: 'Вгадай усі жанри музики',
  cardsInARow: 3,
};

export const MusicGenresOctoberLevel: React.FC = () => (
  <QuizMusicTemplate level={level} />
);
