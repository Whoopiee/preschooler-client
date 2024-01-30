/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IQuizMusicTemplate, QuizMusicTemplate } from '@templates/QuizMusicTemplate';
import { IMusicCard } from '@components/cards/MusicCard';
import { IQuizMusicCard } from '@components/cards/QuizMusicCard';

const exampleMusicCards: IMusicCard[] = [
  {
    id: uuid(),
    sound: 'music/royal.mp3',
    image: 'objects/royal.png',
    title: 'Рояль',
  },
  {
    id: uuid(),
    sound: 'music/skripka.mp3',
    image: 'objects/skripka.png',
    title: 'Скрипка',
  },
  {
    id: uuid(),
    sound: 'music/saksofon.mp3',
    image: 'objects/saksofon.png',
    title: 'Саксафон',
  },
  {
    id: uuid(),
    sound: 'music/guitar.mp3',
    image: 'objects/guitar.png',
    title: 'Гітара',
  },
  {
    id: uuid(),
    sound: 'music/tube.mp3',
    image: 'objects/tube.png',
    title: 'Труба',
  },
  {
    id: uuid(),
    sound: 'music/garmony.mp3',
    image: 'objects/garmony.png',
    title: 'Губна гармоніка',
  },
  {
    id: uuid(),
    sound: 'music/drums.mp3',
    image: 'objects/drums.png',
    title: 'Барабани',
  },
  {
    id: uuid(),
    sound: 'music/arfa.mp3',
    image: 'objects/arfa.png',
    title: 'Арфа',
  },
];

const initialMusicAnswers: IQuizMusicCard[] = [
  {
    id: uuid(),
    image: 'objects/royal.png',
    choices: [
      { text: 'Рояль', isRight: true, isChosen: false },
      { text: 'Маракаси', isRight: false, isChosen: false },
      { text: 'Гітара', isRight: false, isChosen: false },
    ],
    audio: 'music/royal.mp3',
  },
  {
    id: uuid(),
    image: 'objects/tube.png',
    choices: [
      { text: 'Барабани', isRight: false, isChosen: false },
      { text: 'Труба', isRight: true, isChosen: false },
      { text: 'Скрипка', isRight: false, isChosen: false },
    ],
    audio: 'music/tube.mp3',
  },
  {
    id: uuid(),
    image: 'objects/garmony.png',
    choices: [
      { text: 'Губна гармоніка', isRight: true, isChosen: false },
      { text: 'Флейта', isRight: false, isChosen: false },
      { text: 'Гітара', isRight: false, isChosen: false },
    ],
    audio: 'music/garmony.mp3',
  },
  {
    id: uuid(),
    image: 'objects/arfa.png',
    choices: [
      { text: 'Барабани', isRight: false, isChosen: false },
      { text: 'Саксофон', isRight: false, isChosen: false },
      { text: 'Арфа', isRight: true, isChosen: false },
    ],
    audio: 'music/arfa.mp3',
  },
];

const level: IQuizMusicTemplate = {
  exampleMusicCards,
  initialMusicAnswers,
  description: 'Прослухай та запамятай як звучать популярні музичні інструменти',
  descriptionSecond: 'Відгадай який інструмент грає',
  errorMessage: 'Відгадай усі інструменти',
  audio: 'task/october/music-instrument-task.m4a',
  cardsInARow: 4,
};

export const MusicInstrumentLevel: React.FC = () => (
  <QuizMusicTemplate level={level} />
);
