import { IMusicCard } from '@components/cards/MusicCard';
import { v4 as uuid } from 'uuid';

interface IQuizMusicCard extends IMusicCard {
  isRight: boolean,
}

export const cards: IQuizMusicCard[] = [
  {
    id: uuid(),
    sound: 'music/happy-music.mp3',
    title: 'Гімн 1',
    isRight: false,
  },
  {
    id: uuid(),
    sound: 'music/folk.mp3',
    title: 'Гімн 2',
    isRight: false,
  },
  {
    id: uuid(),
    sound: 'music/anthem-Ukraine.mp3',
    title: 'Гімн 3',
    isRight: true,
  },
];
