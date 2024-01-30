/* eslint-disable @typescript-eslint/no-shadow */

import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import _ from 'lodash';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DragStart,
  DropResult,
} from 'react-beautiful-dnd';

import { LevelLayout } from '@core/components/LevelLayout';
import { LevelEndExplosion } from '@components/LevelEndExplosion';
import { Picture } from '@components/Picture';

import styles from './TopsAndRootsLevel.module.scss';

type FruitType = 'top' | 'root';

interface Choice {
  id: string;
  image: string;
  type: FruitType;
}

const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'plants/cabbage.svg',
    type: 'top',
  },
  {
    id: uuid(),
    image: 'plants/garlic.svg',
    type: 'root',
  },
  {
    id: uuid(),
    image: 'plants/radish.svg',
    type: 'root',
  },
  {
    id: uuid(),
    image: 'plants/potato.svg',
    type: 'root',
  },
  {
    id: uuid(),
    image: 'plants/tomato.svg',
    type: 'top',
  },
  {
    id: uuid(),
    image: 'plants/cucumber.svg',
    type: 'top',
  },
  {
    id: uuid(),
    image: 'plants/pumpkin.svg',
    type: 'top',
  },
  {
    id: uuid(),
    image: 'plants/carrot.svg',
    type: 'root',
  },
];

type Fruits = { [key in FruitType]: Choice[] };

export const TopsAndRootsLevel: React.FC = () => {
  const [fruits, setFruits] = useState<Fruits>(() => {
    const shuffledChoices = _.shuffle(initialChoices);
    const [top, root] = _.chunk(shuffledChoices, shuffledChoices.length / 2);

    return {
      top,
      root,
    };
  });

  // to make all draggables (except current) be isDragDisabled and at the same time
  // souce droppable isDropDisabled. TWO FOR ONE
  // So disable self dropping and concurrent dragging like in PUBG inventory :)
  const [draggingSourceId, setdraggingSourceId] = useState<string | null>(null);

  const checkIsGameFinished = useCallback(() => {
    return Object
      .entries(fruits)
      .map(([key, fruitsHalf]) => (
        fruitsHalf.every(fruit => fruit.type === key)
      ))
      .every(reslut => reslut);
  }, [fruits]);

  const getAmount = useCallback((type: FruitType) => {
    return fruits[type].filter(fruit => fruit.type === type).length;
  }, [fruits]);

  const handleOnDragStart = (start: DragStart) => {
    setdraggingSourceId(start.source.droppableId);
  };

  const handleOnDragEnd = (result: DropResult) => {
    setdraggingSourceId(null);

    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    const sourceDroppableId = source.droppableId as FruitType;
    const destinationDroppableId = destination.droppableId as FruitType;

    const sourceClone = [...fruits[sourceDroppableId]];
    const destinationClone = [...fruits[destinationDroppableId]];

    const [removed] = sourceClone.splice(source.index, 1);

    destinationClone.splice(destination.index, 0, removed);

    const fruitsClone: Fruits = {
      top: [], // ебаный пиздец сука ну ладно :)
      root: [], // нужно их порядок сохранить чтобы всегда в этом порядке мапить
      [sourceDroppableId]: sourceClone,
      [destinationDroppableId]: destinationClone,
    };

    setFruits(fruitsClone);
  };

  return (
    <LevelLayout
      description="Розподіліть рослини по групах,
      відповідно до того, що в них їстівне"
      audio="task/november/divide-plants.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Відокрем вершки та корінці"
    >
      <div className={styles.level}>
        <LevelEndExplosion isVisible={checkIsGameFinished()} />

        <div className={styles.playzone}>
          <DragDropContext
            onDragStart={handleOnDragStart}
            onDragEnd={handleOnDragEnd}
          >
            {Object.entries(fruits).map(([key, fruitsHalf]) => (
              <div className={styles.section}>
                <p className={styles.group}>
                  {key === 'top' ? 'Вершки' : 'Корінці'}
                  <br />
                  <span className={styles.counter}>
                    {`${getAmount(key as FruitType)}/4`}
                  </span>
                </p>

                <Droppable
                  key={key}
                  droppableId={key}
                  isDropDisabled={draggingSourceId === key}
                >
                  {(provided, snapshot) => (
                    <ul
                      className={cn(
                        styles.drop,
                        {
                          [styles.over]: snapshot.isDraggingOver,
                          [styles.success]: checkIsGameFinished(),
                        },
                      )}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {fruitsHalf.map(({ id, image }, index) => (
                        <Draggable
                          isDragDisabled={Boolean(draggingSourceId)}
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
                                alt={key}
                              />
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </LevelLayout>
  );
};
