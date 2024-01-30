/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IMusicCard } from '@components/cards/MusicCard';
import { ListenToWordsTemplate, IListenToWordsTemplate } from '@templates/ListenToWordsTemplate';

const initialTracks: Omit<IMusicCard, 'image'>[] = [
  {
    id: uuid(),
    sound: 'polite-words/good-morning.m4a',
    title: 'Доброго ранку!',
    description: 'Кажете вранці, коли бачитесь з людьми',
  },
  {
    id: uuid(),
    sound: 'polite-words/good-day.m4a',
    title: 'Добрий день!',
    description: 'Кажете вдень, коли бачитесь з людьми',
  },
  {
    id: uuid(),
    sound: 'polite-words/good-evenning.m4a',
    title: 'Добрий вечір!',
    description: 'Кажете ввечері, коли бачитесь з людьми',
  },
  {
    id: uuid(),
    sound: 'polite-words/hello.m4a',
    title: 'Вітаю!',
    description: 'Можна казати будь-коли, більш дружня форма',
  },
  {
    id: uuid(),
    sound: 'polite-words/see-you.m4a',
    title: 'До побачення!',
    description: 'Кажете коли прощаєтесь з людьми',
  },
  {
    id: uuid(),
    sound: 'polite-words/bye.m4a',
    title: 'Бувай(-те)!',
    description: 'Дружня форма прощання',
  },
  {
    id: uuid(),
    sound: 'polite-words/good-bye.m4a',
    title: 'Прощавай(-те)!',
    description: 'Кажуть, коли прощаються надовго або назавжди',
  },
];

const level: IListenToWordsTemplate = {
  image: 'people/discussion.png',
  tracks: initialTracks,
  description: '',
};

export const PoliteWordsFirstLevel: React.FC = () => (
  <ListenToWordsTemplate level={level} />
);
