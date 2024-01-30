import React, { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import cn from 'classnames';
import _ from 'lodash';
import { LevelEndExplosion } from '@components/LevelEndExplosion';

import { Picture } from '@components/Picture';
import { LevelLayout } from '@core/components/LevelLayout';
import { initialChoices, Choice } from './DragChain.settings';

import styles from './DragChainLevel.module.scss';

export const DragChainLevel: React.FC = () => {
  const [choices, setChoices] = useState<Choice[]>(
    () => _.shuffle(initialChoices),
  );

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const choicesCopy = [...choices];
    const removeditem = choicesCopy.splice(result.source.index, 1);

    choicesCopy.splice(result.destination.index, 0, ...removeditem);
    setChoices(choicesCopy);
  };

  const checkIsGameFinished = () => {
    return choices.every((choice, index) => choice.rightIndex === index);
  };

  return (
    <LevelLayout
      // eslint-disable-next-line max-len
      description="Склади ланцюжок харчування у правильному порядку. Почни з рослини знизу"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Розташуй картки в правильному порядку"
      audio="task/january/complete-food-chain.m4a"
    >
      <div className={styles.level}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="animals">
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
                {choices.map(({ id, text, image }, index) => (
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
