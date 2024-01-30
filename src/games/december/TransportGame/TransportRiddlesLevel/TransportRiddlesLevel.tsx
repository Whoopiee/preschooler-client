/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';

import { IQuizMusicCard } from '@components/cards/QuizMusicCard';
import { IQuizMusicTemplate, QuizMusicTemplate } from '@templates/QuizMusicTemplate';

const initialMusicAnswers: IQuizMusicCard[] = [
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Автобус', isRight: false, isChosen: false },
      { text: 'Лайнер', isRight: false, isChosen: false },
      { text: 'Тролейбус', isRight: true, isChosen: false },
    ],
    audio: 'task/december/what-kind-of-train.m4a',
    riddlesText: 'Що за вагон мчить навздогін, \nДивніше не буває, \nБо рейки нагорі, а він, \nРуками їх тримає',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Трамвай', isRight: false, isChosen: false },
      { text: 'Метро', isRight: true, isChosen: false },
      { text: 'Ракета', isRight: false, isChosen: false },
    ],
    audio: 'task/december/we-with-mother.m4a',
    riddlesText: 'Ми з матусею моєю \nЇдем в гості... під землею, \nПоїзд нас вперед везе, \nПо тунелях мчить усе.',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Автобус', isRight: true, isChosen: false },
      { text: 'Поїзд', isRight: false, isChosen: false },
      { text: 'Літак', isRight: false, isChosen: false },
    ],
    audio: 'task/december/highway-rushing.m4a',
    riddlesText: 'Мчиться по шосе невпинно \nНе підвода, не будинок: \nВ нього гумове взуття, \nА бензин - його пиття.',
  },
  {
    id: uuid(),
    image: '',
    choices: [
      { text: 'Лайнер', isRight: false, isChosen: false },
      { text: 'Ракета', isRight: false, isChosen: false },
      { text: 'Літак', isRight: true, isChosen: false },
    ],
    audio: 'task/december/in-blue-sky.m4a',
    riddlesText: 'В синім небі пролітаю, \nШвидкість я велику маю, \nДва крила, хоча не птах, \nНазиваюсь я…',
  },
];

const level: IQuizMusicTemplate = {
  initialMusicAnswers,
  audio: 'task/september/genres-task.m4a',
  description: '',
  descriptionSecond: 'Відгадай загадки про транспорт',
  audioSecond: 'task/december/solve-riddles.m4a',
  errorMessage: 'Вгадай усі загадки',
  cardsInARow: 4,
};

export const TransportRiddlesLevel: React.FC = () => (
  <QuizMusicTemplate level={level} />
);
