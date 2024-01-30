/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import { IMoveIntoGapsTemplate, Slot } from './MoveIntoGapsTemplate.interface';

import styles from './MoveIntoGapsTemplate.module.scss';

type Props = {
  level: IMoveIntoGapsTemplate
};

export const MoveIntoGapsTemplate: React.FC<Props> = ({ level }) => {
  const [startSlots, setStartSlots] = useState<Slot[]>(level.startSlots);
  const [targetSlots, setTargetSlots] = useState<Slot[]>(level.targetSlots);
  const [isDragging, setIsDragging] = useState(false);

  const checkIsGameFinished = useCallback(() => {
    return targetSlots.filter(s => s.item !== null).length === level.threshold;
  }, [targetSlots]);

  const handleClear = useCallback(() => {
    setStartSlots(level.startSlots);
    setTargetSlots(level.targetSlots);
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

    const updatedStartSlots = newStartSlots.map(slot => {
      if (slot.id === sourceSlot.id) {
        return {
          ...slot,
          item: null,
        };
      }

      return slot;
    });

    const updatedTargetSlots = newTargetSlots.map(slot => {
      if (slot.id === targetSlot.id) {
        return {
          ...slot,
          item: sourceSlot.item,
        };
      }

      return slot;
    });

    setStartSlots(updatedStartSlots);
    setTargetSlots(updatedTargetSlots);
  };

  return (
    <LevelLayout
      {...level}
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
    >
      <DragDropContext
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
      >
        <div className={styles.level}>
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
                            alt="Strawberry"
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

          <div className={styles.target_container}>
            {targetSlots.map(slot => (
              <li
                key={slot.id}
                className={cn(
                  styles.slot,
                  styles.heightByContent,
                  {
                    [styles.success]: slot.item,
                  },
                )}
              >
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
                                alt="Strawberry"
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
          </div>
        </div>
      </DragDropContext>
    </LevelLayout>
  );
};
