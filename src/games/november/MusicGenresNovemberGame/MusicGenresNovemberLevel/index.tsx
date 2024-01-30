/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IMusicCard } from '@components/cards/MusicCard/MusicCard.interface';
import { IQuizMusicCard } from '@components/cards/QuizMusicCard/QuizMusicCard.interface';
import { IQuizMusicTemplate, QuizMusicTemplate } from '@templates/QuizMusicTemplate';

const exampleMusicCards: IMusicCard[] = [
  {
    id: uuid(),
    sound: 'music/acapella.mp3',
    image: 'people/acapella.png',
    title: 'Акаппела',
    description: 'Хоровий спів без музичних інструментів',
  },
  {
    id: uuid(),
    sound: 'music/jazz.mp3',
    image: 'people/jazz.png',
    title: 'Джаз',
    description: 'Імпровізаційна музика, переважно на трубі та саксофоні',
  },
  {
    id: uuid(),
    sound: 'music/disco.mp3',
    image: 'objects/patifon.png',
    title: 'Диско',
    description: 'Для цього жанру з 70-90х років характерні яскраві мелодії з танцювальними ритмами та простими текстами',
  },
];

const initialMusicAnswers: IQuizMusicCard[] = [
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Акаппела', isRight: true, isChosen: false },
      { text: 'Джаз', isRight: false, isChosen: false },
      { text: 'Диско', isRight: false, isChosen: false },
    ],
    audio: 'music/acapella.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Акаппела', isRight: false, isChosen: false },
      { text: 'Джаз', isRight: true, isChosen: false },
      { text: 'Диско', isRight: false, isChosen: false },
    ],
    audio: 'music/jazz.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Акаппела', isRight: false, isChosen: false },
      { text: 'Джаз', isRight: false, isChosen: false },
      { text: 'Диско', isRight: true, isChosen: false },
    ],
    audio: 'music/disco.mp3',
  },
];

const level: IQuizMusicTemplate = {
  exampleMusicCards,
  initialMusicAnswers,
  description: 'Прослухай звуковий фрагмент, що представляє певний жанр',
  descriptionSecond: 'Вгадай жанри музики',
  errorMessage: 'Вгадай усі жанри музики',
  audio: 'task/november/listen-to-genre.m4a',
  audioSecond: 'task/november/guess-music-genre.m4a',
  cardsInARow: 3,
};

export const MusicGenresNovemberLevel: React.FC = () => (
  <QuizMusicTemplate level={level} />
);
