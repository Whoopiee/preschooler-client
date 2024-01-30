/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { shuffle } from 'lodash';
import { v4 as uuid } from 'uuid';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import styles from './KindsOfBreadLevel.module.scss';

type BreadKind = 'Білий хліб' | 'Багет' | 'Булочка';

interface BreadItem {
  id: string;
  image: string;
  kind: BreadKind;
}

interface BreadSlot {
  id: string;
  kind: BreadKind;
  item: BreadItem | null;
}

const initialBreadItems: BreadItem[] = [
  {
    id: uuid(),
    image: 'objects/bun.svg',
    kind: 'Булочка',
  },
  {
    id: uuid(),
    image: 'objects/baguette.svg',
    kind: 'Багет',
  },
  {
    id: uuid(),
    image: 'objects/whiteBread.svg',
    kind: 'Білий хліб',
  },
];

const initialStartSlots: BreadSlot[] = initialBreadItems.map(item => (
  {
    id: uuid(),
    kind: item.kind,
    item,
  }
));

const initialTargetSlots: BreadSlot[] = initialBreadItems.map(item => (
  {
    id: uuid(),
    kind: item.kind,
    item: null,
  }
));

export const KindsOfBreadLevel: React.FC = () => {
  const [startSlots, setStartSlots] = useState<BreadSlot[]>(shuffle(initialStartSlots));
  const [targetSlots, setTargetSlots] = useState<BreadSlot[]>(initialTargetSlots);
  const [isDragging, setIsDragging] = useState(false);

  const checkIsGameFinished = useCallback(() => {
    return targetSlots.every(slot => slot.kind === slot.item?.kind);
  }, [targetSlots]);

  const handleClear = useCallback(() => {
    setStartSlots(shuffle(initialStartSlots));
    setTargetSlots(initialTargetSlots);
  }, []);

  const handleOnDragStart = () => setIsDragging(true);

  const handleOnDragEnd = (result: DropResult) => {
    setIsDragging(false);

    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const newStartSlots = [...startSlots];
    const newTargetSlots = [...targetSlots];
    const allSlots = [...newStartSlots, ...newTargetSlots];

    const sourceSlot = allSlots.find(slot => slot.id === source.droppableId);
    const targetSlot = allSlots.find(slot => slot.id === destination.droppableId);

    if (!sourceSlot || !targetSlot) {
      return;
    }

    const changeSlots = (slots: BreadSlot[]) => slots.map(slot => {
      if (slot.id === sourceSlot.id) {
        return {
          ...slot,
          item: null,
        };
      }

      if (slot.id === targetSlot.id) {
        return {
          ...slot,
          item: sourceSlot.item,
        };
      }

      return slot;
    });

    setStartSlots(prevState => changeSlots(prevState));
    setTargetSlots(prevState => changeSlots(prevState));
  };

  return (
    <LevelLayout
      description="З'єднай види випічки"
      audio="task/november/combine-bakery.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="З'єднай усі види випічки"
      onClear={handleClear}
    >
      <DragDropContext
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
      >
        <ul className={styles.level}>
          {targetSlots.map(slot => (
            <li
              key={slot.id}
              className={cn(
                styles.slot,
                styles.heightByContent,
                {
                  [styles.success]: slot.item?.kind === slot.kind,
                },
              )}
            >
              <span className={styles.text}>
                {slot.kind}
              </span>

              <Droppable
                droppableId={slot.id}
                isDropDisabled={Boolean(slot.item)}
              >
                {(provided, snapshot) => (
                  <div
                    key={slot.id}
                    className={cn(
                      styles.card,
                      styles.placeholder,
                      {
                        [styles.over]: snapshot.isDraggingOver,
                      },
                    )}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {slot.item && (
                      <Draggable
                        isDragDisabled={isDragging}
                        draggableId={slot.item.id}
                        index={1}
                      >
                        {(provided) => (
                          <div
                            className={styles.card}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <Picture
                              className={styles.image}
                              src={slot.item?.image}
                              alt={slot.kind}
                            />
                          </div>
                        )}
                      </Draggable>
                    )}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </li>
          ))}

          {startSlots.map(slot => (
            <Droppable
              key={slot.id}
              droppableId={slot.id}
              isDropDisabled={Boolean(slot.item) && isDragging}
            >
              {(provided) => (
                <li
                  key={slot.id}
                  className={styles.slot}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {slot.item && (
                    <Draggable
                      isDragDisabled={isDragging}
                      draggableId={slot.item.id}
                      index={1}
                    >
                      {(provided) => (
                        <div
                          className={styles.card}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Picture
                            className={styles.image}
                            src={slot.item?.image}
                            alt={slot.kind}
                          />
                        </div>
                      )}
                    </Draggable>
                  )}

                  {provided.placeholder}
                </li>
              )}
            </Droppable>
          ))}
        </ul>
      </DragDropContext>
    </LevelLayout>
  );
};
