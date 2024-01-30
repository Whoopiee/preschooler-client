import React, { useState } from 'react';
import cn from 'classnames';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import _ from 'lodash';

import { Picture } from '@components/Picture';
import { LevelLayout } from '@core/components/LevelLayout';

import {
  initialValues,
  defaultColumns,
  DragElement,
} from './DragTo7Level.settings';
import styles from './DragTo7Level.module.scss';

export const DragTo7Level: React.FC = () => {
  const [mainColumn, setMainColumn] = useState<DragElement[]>(
    () => _.shuffle(initialValues),
  );
  const [columns, setColumns] = useState(defaultColumns);

  const findElement = (id: string) => {
    let variable: any;

    columns.some((item) => {
      variable = item.find(
        obj => obj.id === id,
      );

      return variable !== undefined;
    });

    return variable;
  };

  const handleDragEnd = (result: DropResult) => {
    try {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      if (source.droppableId !== destination.droppableId) {
        if (destination.droppableId === 'main') {
          const sourceColumn = findElement(source.droppableId);

          if (sourceColumn) {
            const sourceItems = [...sourceColumn.items];

            const destItems = [...mainColumn];
            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);
            setMainColumn(destItems);

            const copy = columns.map(column => {
              return column.map(item => {
                if (item.id === source.droppableId) {
                  return { ...item, items: sourceItems };
                }

                return item;
              });
            });

            setColumns(copy);
          }
        } else if (source.droppableId === 'main') {
          const destColumn = findElement(destination.droppableId);

          if (destColumn) {
            const destItems = [...destColumn.items];

            const sourceItems = [...mainColumn];
            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);
            setMainColumn(sourceItems);

            const copy = columns.map(column => {
              return column.map(item => {
                if (item.id === destination.droppableId) {
                  return { ...item, items: destItems };
                }

                return item;
              });
            });

            setColumns(copy);
          }
        } else {
          const sourceColumn = findElement(source.droppableId);
          const destColumn = findElement(destination.droppableId);

          if (sourceColumn && destColumn) {
            const sourceItems = [...sourceColumn.items];

            const destItems = [...destColumn.items];

            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);
            const copy = columns.map(column => {
              return column.map(item => {
                if (item.id === destination.droppableId) {
                  return { ...item, items: destItems };
                }

                if (item.id === source.droppableId) {
                  return { ...item, items: sourceItems };
                }

                return item;
              });
            });

            setColumns(copy);
          }
        }
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <LevelLayout
      description="Розподіли предмети по групах, щоб разом їх було сім"
      errorMessage="Error"
      onClear={() => false}
      checkIsGameFinished={() => false}
    >
      <div className={styles.container}>
        <DragDropContext
          onDragEnd={handleDragEnd}
        >
          <Droppable droppableId="main" direction="horizontal">
            {(provided) => (
              <ul
                className={styles.block}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {mainColumn.map(({ id, image }, index) => (
                  <Draggable
                    key={id}
                    index={index}
                    draggableId={id}
                  >
                    {(provided) => (
                      <li
                        className={styles.card}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Picture
                          className={styles.image}
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
          <div className={styles.additionalWrapper}>
            {columns.map(column => (
              <div className={styles.additionalBlock}>
                {Object.values(column).map((block) => {
                  return (
                    <Droppable
                      key={block.id}
                      droppableId={block.id}
                      isDropDisabled={block.items.length === 1}
                      ignoreContainerClipping
                    >
                      {(provided) => (
                        <ul
                          className={
                            cn(
                              styles.column,
                              styles[`columnImage-${block.title}`],
                              block.items.length < 1
                                ? null
                                : styles.none,
                            )
                          }
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {block.items.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  className={styles.columnCard}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Picture
                                    className={styles.image}
                                    src={item.image}
                                  />
                                </li>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </ul>
                      )}
                    </Droppable>
                  );
                })}
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>

    </LevelLayout>
  );
};
