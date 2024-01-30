/* eslint-disable @typescript-eslint/no-shadow */

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

import styles from './MilkLevel.module.scss';

interface Choice {
  id: string;
  image: string;
  text: string;
  rightIndex: number;
}

const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'objects/cow.svg',
    text: 'Корова пасеться',
    rightIndex: 0,
  },
  {
    id: uuid(),
    image: 'objects/giveMilk.svg',
    text: 'Корова дає молоко',
    rightIndex: 1,
  },
  {
    id: uuid(),
    image: 'objects/bringMilk.svg',
    text: 'Молоко збирають у цистерни',
    rightIndex: 2,
  },
  {
    id: uuid(),
    image: 'objects/sterilizeMilk.svg',
    text: 'Робітники стерилізують та фасують молоко',
    rightIndex: 3,
  },
  {
    id: uuid(),
    image: 'objects/transportMilk.svg',
    text: 'Пляшки відправляють у магазини',
    rightIndex: 4,
  },
];

export const MilkLevel: React.FC = () => {
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
      description="Встанови послідовність виготовлення молока"
      audio="task/november/sequence-of-milk.m4a"
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
                {choices.map(({ id, image }, index) => (
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

        <ul className={styles.column}>
          {initialChoices.map(({ id, text }, index) => (
            <li
              key={id}
              className={cn(styles.card, styles.withIndex)}
            >
              <span className={styles.circle}>{index + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </LevelLayout>
  );
};
