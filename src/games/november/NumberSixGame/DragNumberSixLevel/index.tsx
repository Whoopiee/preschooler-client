/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';
import { IMoveIntoGapsTemplate, MoveIntoGapsTemplate } from '@templates/MoveIntoGapsTemplate';

const level: IMoveIntoGapsTemplate = {
  description: 'Поклади 6 китів у квадрати',
  audio: 'task/november/drag-six-whales.m4a',
  errorMessage: 'Поклади усі 6 китів у квадрати',
  startSlots: Array.from({ length: 10 }, () => ({
    id: uuid(),
    item: {
      id: uuid(),
      image: 'animals/whale.png',
    },
  })),
  targetSlots: Array.from({ length: 10 }, () => ({
    id: uuid(),
    item: null,
  })),
  threshold: 6,
};

export const DragNumberSixLevel: React.FC = () => (
  <MoveIntoGapsTemplate level={level} />
);
