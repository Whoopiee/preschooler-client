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

import styles from './WinterFestsLevel.module.scss';

type FestKind = 'День святого Миколая' | 'День закоханих' | 'Новий рік';

interface FestItem {
  id: string;
  image: string;
  kind: FestKind;
}

interface FestSlot {
  id: string;
  kind: FestKind;
  item: FestItem | null;
}

const initialBreadItems: FestItem[] = [
  {
    id: uuid(),
    image: 'objects/saint-nicholas.png',
    kind: 'День святого Миколая',
  },
  {
    id: uuid(),
    image: 'objects/valentines-day.png',
    kind: 'День закоханих',
  },
  {
    id: uuid(),
    image: 'objects/new-year.png',
    kind: 'Новий рік',
  },
];

const initialStartSlots: FestSlot[] = initialBreadItems.map(item => (
  {
    id: uuid(),
    kind: item.kind,
    item,
  }
));

const initialTargetSlots: FestSlot[] = initialBreadItems.map(item => (
  {
    id: uuid(),
    kind: item.kind,
    item: null,
  }
));

export const WinterFestsLevel: React.FC = () => {
  const [startSlots, setStartSlots] = useState<FestSlot[]>(shuffle(initialStartSlots));
  const [targetSlots, setTargetSlots] = useState<FestSlot[]>(initialTargetSlots);
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

    const changeSlots = (slots: FestSlot[]) => slots.map(slot => {
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
      description="З’єднай свята"
      audio="task/january/connect-holidays.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="З'єднай усі свята"
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
