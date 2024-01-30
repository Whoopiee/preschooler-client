/* eslint-disable @typescript-eslint/no-shadow */

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

import styles from './DragHerbsLevel.module.scss';

interface Choice {
  id: string;
  image: string;
  row: 1 | 2;
  isRight: boolean;
}

const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'plants/mint.png',
    row: 1,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/prolisok.png',
    row: 1,
    isRight: false,
  },
  {
    id: uuid(),
    image: 'plants/wheat.png',
    row: 1,
    isRight: false,
  },
  {
    id: uuid(),
    image: 'plants/burdock.png',
    row: 2,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/chamomile.png',
    row: 2,
    isRight: true,
  },
  {
    id: uuid(),
    image: 'plants/celandine.png',
    row: 2,
    isRight: true,
  },
];

const basketImage = 'objects/basket.png';

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
    transitionDuration: '2s',
    transitionTimingFunction: 'ease-in-out',
  };
};

// Если быстро перетаскивать сразу 2 карточки паралелльно то плохо работает
export const DragHerbsLevel: React.FC = () => {
  const [, setBasket] = useState<Choice[]>([]);
  const [mushrooms, setMushrooms] = useState<Choice[]>(initialChoices);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingCorrect, setIsDraggingCorrect] = useState(false);

  const checkIsGameFinished = () => {
    return !mushrooms.some(mushroom => mushroom.isRight);
  };

  const handleOnDragStart = (start: DragStart) => {
    setIsDragging(true);
    setIsDraggingCorrect(mushrooms.find(mushroom => (
      mushroom.id === start.draggableId
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
      const newMushrooms = [...mushrooms];
      const [removed] = newMushrooms.splice(source.index, 1);

      if (!removed.isRight) {
        return;
      }

      setBasket((prevState) => [...prevState, removed]);
      setMushrooms(newMushrooms);
    }
  };

  return (
    <LevelLayout
      description="Збери кошик з лікарських трав"
      errorMessage="Збери усі лікарські трави"
      audio="task/december/collect-plants.m4a"
      checkIsGameFinished={checkIsGameFinished}
    >
      <DragDropContext
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
      >
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
                src={basketImage}
                alt="Basket"
              />
            </div>
          )}
        </Droppable>

        <LevelEndExplosion isVisible={checkIsGameFinished()} />

        {splitByRow(mushrooms).map((row, droppableIndex) => (
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
                      + getRow1Lenth(mushrooms) * droppableIndex}
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
                          className={styles.mushroom}
                          src={image}
                          alt="Mushroom"
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
      </DragDropContext>
    </LevelLayout>
  );
};
