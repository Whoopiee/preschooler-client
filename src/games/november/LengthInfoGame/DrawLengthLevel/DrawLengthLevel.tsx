/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import _ from 'lodash';

import { LevelLayout } from '@core/components/LevelLayout';
import { LevelEndExplosion } from '@components/LevelEndExplosion';
import { Picture } from '@components/Picture';

import styles from './DrawLengthLevel.module.scss';

interface Choice {
  id: string;
  image: string;
  text: string;
  rightIndex: number;
}

const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'objects/keyDrag.png',
    text: 'Ключ',
    rightIndex: 0,
  },
  {
    id: uuid(),
    image: 'objects/scissorsDrag.png',
    text: 'Ножиці',
    rightIndex: 1,
  },
  {
    id: uuid(),
    image: 'objects/pencilDrag.png',
    text: 'Олівець',
    rightIndex: 2,
  },
  {
    id: uuid(),
    image: 'objects/sledDrag.png',
    text: 'Санчата',
    rightIndex: 3,
  },
  {
    id: uuid(),
    image: 'objects/bathDrag.png',
    text: 'Ванна',
    rightIndex: 4,
  },
];

export const DrawLengthLevel: React.FC = () => {
  const [choices, setChoices] = useState<Choice[]>(
    () => _.shuffle(initialChoices),
  );

  const checkIsGameFinished = () => {
    return choices.every((choice, index) => (
      choice.rightIndex === index
    ));
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newChoices = [...choices];
    const removedItems = newChoices.splice(result.source.index, 1);

    newChoices.splice(result.destination.index, 0, ...removedItems);
    setChoices(newChoices);
  };

  return (
    <LevelLayout
      description="Який предмет довший? Розташуй їх по зростанню (зверху найменший)"
      audio="task/november/longest-object.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Розташуй картки в правильному порядку"
    >
      <div className={styles.level}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="milk-choices">
            {(provided) => (
              <ul
                className={cn(
                  styles.column,
                  styles.drop,
                  {
                    [styles.success]: checkIsGameFinished(),
                  },
                )}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {choices.map(({ id, image, text }, index) => (
                  <Draggable
                    key={id}
                    draggableId={id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        className={cn(
                          styles.card,
                          {
                            [styles.dragging]: snapshot.isDragging,
                          },
                        )}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <span>{text}</span>
                        <Picture
                          className={styles.image}
                          src={image}
                          alt="Remove to right position"
                        />
                      </li>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <LevelEndExplosion isVisible={checkIsGameFinished()} />
      </div>
    </LevelLayout>
  );
};
