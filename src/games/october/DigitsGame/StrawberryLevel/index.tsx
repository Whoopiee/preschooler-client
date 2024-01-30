/* eslint-disable max-len */
import { v4 as uuid } from 'uuid';
import { IMoveIntoGapsTemplate, MoveIntoGapsTemplate } from '@templates/MoveIntoGapsTemplate';

const level: IMoveIntoGapsTemplate = {
  description: 'Поклади 5 полуничок в кошик',
  errorMessage: 'Поклади 5 полуничок в кошик',
  audio: 'task/october/strawberry-task.m4a',
  startSlots: Array.from({ length: 10 }, () => ({
    id: uuid(),
    item: {
      id: uuid(),
      image: 'plants/strawberry.png',
    },
  })),
  targetSlots: Array.from({ length: 10 }, () => ({
    id: uuid(),
    item: null,
  })),
  threshold: 5,
};

export const StrawberryLevel: React.FC = () => <MoveIntoGapsTemplate level={level} />;
