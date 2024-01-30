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
  DraggingStyle,
  NotDraggingStyle,
  DraggableStateSnapshot,
  DragStart,
} from 'react-beautiful-dnd';

import { LevelLayout } from '@core/components/LevelLayout';
import { LevelEndExplosion } from '@components/LevelEndExplosion';
import { Picture } from '@components/Picture';

import styles from './AutumnFruitsLevel.module.scss';

interface Choice {
  id: string;
  image: string;
  row: 1 | 2;
  isRight: boolean;
}

const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'plants/grapes.png',
    row: 1,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/apple.png',
    row: 1,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/banana.png',
    row: 1,
    isRight: false,
  },
  {
    id: uuid(),
    image: 'plants/pear.png',
    row: 2,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/plum.png',
    row: 2,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/orange.png',
    row: 2,
    isRight: false,
  },
];

const potImage = 'objects/pot.png';

const splitByRow = (choices: Choice[]) => (
  [
    choices.filter(choice => choice.row === 1),
    choices.filter(choice => choice.row === 2),
  ]
);

const getRow1Lenth = (choices: Choice[]) => {
  return choices.filter(choice => choice.row === 1).length;
};

// override animation when dropping mushroom into basket
// https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/drop-animation.md#skipping-the-drop-animation
const getStyle = (
  style: DraggingStyle | NotDraggingStyle | undefined,
  snapshot: DraggableStateSnapshot,
): React.CSSProperties => {
  if (!snapshot.isDropAnimating || !snapshot.dropAnimation) {
    return style as React.CSSProperties;
  }

  if (snapshot.draggingOver !== 'basket') {
    return style as React.CSSProperties;
  }

  const { moveTo } = snapshot.dropAnimation;

  return {
    ...style,
    transform: `translate(${moveTo.x}px, ${moveTo.y}px) scale(0.01)`,
    opacity: 0.2,
    transitionDuration: '1s',
    transitionTimingFunction: 'ease-in-out',
  };
};

// Если быстро перетаскивать сразу 2 карточки паралелльно то плохо работает
export const AutumnFruitsLevel: React.FC = () => {
  const [, setBasket] = useState<Choice[]>([]);
  const [fishs, setFishs] = useState<Choice[]>(initialChoices);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingCorrect, setIsDraggingCorrect] = useState(false);

  const checkIsGameFinished = () => {
    return !fishs.some(fishs => fishs.isRight);
  };

  const handleOnDragStart = (start: DragStart) => {
    setIsDragging(true);
    setIsDraggingCorrect(fishs.find(fishs => (
      fishs.id === start.draggableId
    ))?.isRight ?? false);
  };

  const handleOnDragEnd = (result: DropResult) => {
    setIsDragging(false);

    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      (source.droppableId === 'mushrooms0'
        || source.droppableId === 'mushrooms1')
      && destination.droppableId === 'basket'
    ) {
      const newFishs = [...fishs];
      const [removed] = newFishs.splice(source.index, 1);

      if (!removed.isRight) {
        return;
      }

      setBasket((prevState) => [...prevState, removed]);
      setFishs(newFishs);
    }
  };

  return (
    <LevelLayout
      description="Компот варять тількі з фруктів. Давайте зваримо компот з сезонних українських фруктів"
      audio="task/november/lets-biol-compote.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Додайте усі фрукти, щоб зварити компот"
    >
      <DragDropContext
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
      >
        <LevelEndExplosion isVisible={checkIsGameFinished()} />

        {splitByRow(fishs).map((row, droppableIndex) => (
          <Droppable
            // eslint-disable-next-line react/no-array-index-key
            key={droppableIndex}
            droppableId={`mushrooms${droppableIndex}`}
            direction="horizontal"
            isDropDisabled
          >
            {(provided) => (
              <ul
                className={styles.list}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {row.map(({ id, image }, draggableIndex) => (
                  <Draggable
                    key={id}
                    index={draggableIndex
                      + getRow1Lenth(fishs) * droppableIndex}
                    draggableId={id}
                  >
                    {(provided, snapshot) => (
                      <li
                        className={cn(
                          styles.item,
                          {
                            [styles.dragging]: snapshot.isDragging,
                          },
                        )}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={getStyle(
                          provided.draggableProps.style,
                          snapshot,
                        )}
                      >
                        <Picture
                          className={styles.fishs}
                          src={image}
                          alt="items"
                        />
                      </li>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        ))}
        <Droppable
          droppableId="basket"
          direction="horizontal"
          isDropDisabled={!isDraggingCorrect}
        >
          {(provided) => (
            <div
              className={styles.basketContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className={cn(
                styles.basketGlow,
                {
                  [styles.visible]: isDragging,
                },
              )}
              />
              <Picture
                className={styles.basketImage}
                src={potImage}
                alt="Basket"
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </LevelLayout>
  );
};
