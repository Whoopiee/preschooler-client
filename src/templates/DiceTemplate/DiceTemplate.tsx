/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { Warning } from '@components/Warning';
import { Block, IDiceTemplate } from './DiceTemplate.interface';

import styles from './DiceTemplate.module.scss';

type Props = {
  level: IDiceTemplate
};

export const DiceTemplate: React.FC<Props> = ({ level }) => {
  const [blocks, setDefaultBlocks] = useState(level.data);
  const [blocksTop, setBlocksTop] = useState(blocks.slice(0, Math.floor(blocks.length / 2)));
  const [blocksBottom, setBlocksBottom] = useState(blocks.slice(Math.floor(blocks.length / 2), blocks.length));

  const [answerBlock, setAnswerBlock] = useState<Block[]>([]);

  const width = useDeviceWidth();

  if (width < 768) {
    return (
      <LevelLayout
        description=""
      >
        <Warning />
      </LevelLayout>
    );
  }

  const reorder = (
    destination: DraggableLocation,
    source: DraggableLocation,
  ) => {
    if (width > 1200) {
      const items = Array.from(blocks);
      const [removed] = items.splice(source.index, 1);

      items.splice(destination.index, 0, removed);

      setDefaultBlocks(items);
    }
  };

  const move = (
    source: DraggableLocation,
    destination: DraggableLocation,
  ) => {
    if (width > 1200) {
      if (source.droppableId === 'default') {
        const sourceClone = Array.from(blocks);
        const [removed] = sourceClone.splice(source.index, 1);

        setAnswerBlock(prev => [...prev, removed]);
        setDefaultBlocks(sourceClone);
      } else if (source.droppableId === 'answer') {
        const destinationClone = Array.from(blocks);
        const removed = answerBlock[0];

        destinationClone.splice(destination.index, 0, removed);
        setDefaultBlocks(destinationClone);
        setAnswerBlock([]);
      }
    } else if (width <= 1200) {
      if (source.droppableId === 'defaultTop') {
        const sourceClone = Array.from(blocksTop);
        const [removed] = sourceClone.splice(source.index, 1);

        if (destination.droppableId === 'defaultBottom') {
          if (blocksBottom.length >= 3) {
            return;
          }

          const destinationClone = Array.from(blocksBottom);

          destinationClone.splice(destination.index, 0, removed);
          setBlocksTop(sourceClone);
          setBlocksBottom(destinationClone);
        } else {
          setAnswerBlock(prev => [...prev, removed]);
          setBlocksTop(sourceClone);
        }
      } else if (source.droppableId === 'defaultBottom') {
        const sourceClone = Array.from(blocksBottom);
        const [removed] = sourceClone.splice(source.index, 1);

        if (destination.droppableId === 'defaultTop') {
          if (blocksTop.length >= 3) {
            return;
          }

          const destinationClone = Array.from(blocksTop);

          destinationClone.splice(destination.index, 0, removed);
          setBlocksBottom(sourceClone);
          setBlocksTop(destinationClone);
        } else {
          setAnswerBlock(prev => [...prev, removed]);
          setBlocksBottom(sourceClone);
        }
      } else {
        const destinationClone = destination.droppableId === 'defaultTop'
          ? Array.from(blocksTop)
          : Array.from(blocksBottom);
        const removed = answerBlock[0];

        destinationClone.splice(destination.index, 0, removed);

        destination.droppableId === 'defaultTop'
          ? setBlocksTop(destinationClone)
          : setBlocksBottom(destinationClone);

        setAnswerBlock([]);
      }
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      reorder(destination, source);
    } else {
      move(source, destination);
    }
  };

  const handleClear = () => {
    if (width > 1200) {
      setDefaultBlocks(level.data);
    } else {
      setBlocksTop(level.data.slice(0, Math.floor(level.data.length / 2)));
      setBlocksBottom(level.data.slice(Math.ceil(level.data.length / 2), level.data.length));
    }

    setAnswerBlock([]);
  };

  const isGameFinished = () => {
    return answerBlock.length > 0 && answerBlock[0].answer === level.answer;
  };

  return (
    <LevelLayout
      {...level}
      description="Покладіть правильний кубик та вирішіть рівняння"
      errorMessage="Відповідь невірна, спробуй ще!"
      checkIsGameFinished={isGameFinished}
      onClear={handleClear}
    >
      <div className={styles.container}>
        <DragDropContext
          onDragEnd={handleDragEnd}
        >
          {
            width > 1200
              ? (
                <Droppable
                  droppableId="default"
                  direction="horizontal"
                  key={uuid()}
                >
                  {(provided) => (
                    <ul
                      className={styles.dropzone}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {blocks.map(({ id, image }, index) => {
                        return (
                          <div className={styles.dropzoneItem}>
                            <Draggable
                              key={id}
                              draggableId={id}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  className={styles.card}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Picture
                                    key={id}
                                    src={image}
                                    className={styles.image}
                                  />
                                </li>
                              )}
                            </Draggable>
                          </div>
                        );
                      })}

                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              )
              : (
                <>
                  <Droppable
                    droppableId="defaultTop"
                    direction="horizontal"
                    isDropDisabled={blocksTop.length >= 3}
                    key={uuid()}
                  >
                    {(provided) => (
                      <ul
                        className={styles.dropzone}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {
                          blocksTop.map(({ id, image }, index) => {
                            return (
                              <div className={styles.dropzoneItem}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <li
                                      className={styles.card}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <Picture
                                        key={id}
                                        src={image}
                                        className={styles.image}
                                      />
                                    </li>
                                  )}
                                </Draggable>
                              </div>
                            );
                          })
                        }

                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                  <Droppable
                    droppableId="defaultBottom"
                    direction="horizontal"
                    isDropDisabled={blocksBottom.length >= 3}
                    key={uuid()}
                  >
                    {(provided) => (
                      <ul
                        className={styles.dropzone}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {
                          blocksBottom.map(({ id, image }, index) => {
                            return (
                              <div className={styles.dropzoneItem}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <li
                                      className={styles.card}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <Picture
                                        key={id}
                                        src={image}
                                        className={styles.image}
                                      />
                                    </li>
                                  )}
                                </Draggable>
                              </div>
                            );
                          })
                        }
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>

                </>
              )
          }
          <div className={styles.answer}>
            <Picture
              draggable={false}
              src={level.answerImage}
            />
            <Droppable
              droppableId="answer"
              isDropDisabled={blocks.length < 6}
            >
              {(provided) => (
                <div
                  className={styles.target}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <Draggable
                    key={answerBlock[0]?.id}
                    draggableId={answerBlock[0]?.id}
                    index={0}
                  >
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {answerBlock.length > 0 && (
                            <Picture
                              key={answerBlock[0]?.id}
                              src={answerBlock[0]?.image}
                            />
                          )}

                        </div>
                      );
                    }}
                  </Draggable>
                </div>
              )}
            </Droppable>
            <p className={styles.text}>
              = {level.rightNumber}
            </p>
          </div>
        </DragDropContext>
      </div>
    </LevelLayout>
  );
};
