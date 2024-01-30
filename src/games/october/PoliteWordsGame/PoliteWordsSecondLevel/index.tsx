/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IMusicCard } from '@components/cards/MusicCard';
import { ListenToWordsTemplate, IListenToWordsTemplate } from '@templates/ListenToWordsTemplate';

const initialTracks: Omit<IMusicCard, 'image'>[] = [
  {
    id: uuid(),
    sound: 'polite-words/thank-you.m4a',
    title: 'Дякую, спасибі',
    description: 'Промовляють за зроблену послугу',
  },
  {
    id: uuid(),
    sound: 'polite-words/please.m4a',
    title: 'Будь ласка',
    description: 'Звертаються з проханням або у відповідь на прохання',
  },
  {
    id: uuid(),
    sound: 'polite-words/excuse-me.m4a',
    title: 'Вибачте, пробачте',
    description: 'Кажете, коли почуваєте провину',
  },
  {
    id: uuid(),
    sound: 'polite-words/pardon-me.m4a',
    title: 'Перепрошую',
    description: 'Форма вибачення або ввічливе звертання',
  },
  {
    id: uuid(),
    sound: 'polite-words/sorry.m4a',
    title: 'Даруйте',
    description: 'У випадку, коли ви збираєтеся вчинити провину',
  },
];

const level: IListenToWordsTemplate = {
  image: 'people/please.png',
  tracks: initialTracks,
  description: '',
};

export const PoliteWordsSecondLevel: React.FC = () => (
  <ListenToWordsTemplate level={level} />
);
