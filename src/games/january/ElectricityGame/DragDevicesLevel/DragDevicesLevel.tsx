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

import styles from './DragDevicesLevel.module.scss';

type FurnitureType = 'modern' | 'old';

interface Choice {
  id: string;
  image: string;
  type: FurnitureType;
}

const initialChoices: Choice[] = [
  {
    id: uuid(),
    image: 'objects/washingMachine-230x230.png',
    type: 'modern',
  },
  {
    id: uuid(),
    image: 'objects/lamp-230x230.png',
    type: 'modern',
  },
  {
    id: uuid(),
    image: 'objects/microwave-230x230.png',
    type: 'modern',
  },
  {
    id: uuid(),
    image: 'objects/iron-230x230.png',
    type: 'modern',
  },
  {
    id: uuid(),
    image: 'objects/coffee-mug-230x230.png',
    type: 'old',
  },
  {
    id: uuid(),
    image: 'objects/slicer-230x230.png',
    type: 'old',
  },
  {
    id: uuid(),
    image: 'objects/ladle-230x230.png',
    type: 'old',
  },
  {
    id: uuid(),
    image: 'objects/pan-230x230.png',
    type: 'old',
  },
];

type Furniture = { [key in FurnitureType]: Choice[] };

export const DragDevicesLevel: React.FC = () => {
  const [fruits, setFruits] = useState<Furniture>(() => {
    const shuffledChoices = _.shuffle(initialChoices);
    const [modern, old] = _.chunk(shuffledChoices, shuffledChoices.length / 2);

    return {
      modern,
      old,
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

  const getAmount = useCallback((type: FurnitureType) => {
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

    const sourceDroppableId = source.droppableId as FurnitureType;
    const destinationDroppableId = destination.droppableId as FurnitureType;

    const sourceClone = [...fruits[sourceDroppableId]];
    const destinationClone = [...fruits[destinationDroppableId]];

    const [removed] = sourceClone.splice(source.index, 1);

    destinationClone.splice(destination.index, 0, removed);

    const fruitsClone: Furniture = {
      modern: [],
      old: [],
      [sourceDroppableId]: sourceClone,
      [destinationDroppableId]: destinationClone,
    };

    setFruits(fruitsClone);
  };

  return (
    <LevelLayout
      description="Домашні прилади бувають електричні, що живляться
      через розетки чи батареї та механічні,
      якими треба працювати вручну. Розподіли електричні та механічні прилади"
      audio="task/january/home-devices.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Розподіли пристрої по групах"
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
                  {key === 'modern' ? 'Електричні' : 'Механічні'}
                  <br />
                  <span className={styles.counter}>
                    {`${getAmount(key as FurnitureType)}/4`}
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
