import { IQuizMusicCard } from '@components/cards/QuizMusicCard';
import { v4 as uuid } from 'uuid';

export const initialMusicAnswers: IQuizMusicCard[] = [
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Радісна', isRight: true, isChosen: false },
      { text: 'Сумна', isRight: false, isChosen: false },
    ],
    audio: 'music/happy-music.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Спокійна', isRight: true, isChosen: false },
      { text: 'Енергійна', isRight: false, isChosen: false },
    ],
    audio: 'music/calm-music.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Бадьора', isRight: false, isChosen: false },
      { text: 'Сумна', isRight: true, isChosen: false },
    ],
    audio: 'music/sad-music.mp3',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Енергійна', isRight: true, isChosen: false },
      { text: 'Трагічна', isRight: false, isChosen: false },
    ],
    audio: 'music/fast-music.mp3',
  },
];
