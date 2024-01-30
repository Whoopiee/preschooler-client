/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IMusicCard } from '@components/cards/MusicCard';
import { ListenToWordsTemplate, IListenToWordsTemplate } from '@templates/ListenToWordsTemplate';

const initialTracks: Omit<IMusicCard, 'image'>[] = [
  {
    id: uuid(),
    sound: 'task/january/christmas-eve-word.m4a',
    title: 'Святвечір',
    description: 'Вечір напередодні Різдва',
  },
  {
    id: uuid(),
    sound: 'task/january/shchedrivki-word.m4a',
    title: 'Щедрівки',
    description: 'Величальні обрядові пісні, що співаються у Щедрий вечір',
  },
  {
    id: uuid(),
    sound: 'task/january/icing-word.m4a',
    title: 'Ожеледиця',
    description: 'Тонкий шар льоду на земній поверхні',
  },
  {
    id: uuid(),
    sound: 'task/january/carols-word.m4a',
    title: 'Колядки',
    description: 'Різдвяні святкові пісні',
  },
  {
    id: uuid(),
    sound: 'task/january/cattle-word.m4a',
    title: 'Хуртовина',
    description: 'Сильний вітер, буря зі снігом',
  },
];

const level: IListenToWordsTemplate = {
  image: 'objects/snowman-685x607.png',
  tracks: initialTracks,
  description: 'Прослухай та запам’ятай слова, пов’язані з зимою',
};

export const WinterWordsLevel: React.FC = () => (
  <ListenToWordsTemplate level={level} />
);
