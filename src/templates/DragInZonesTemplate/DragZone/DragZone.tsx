import React, { useMemo, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Picture } from '@components/Picture';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { DragElement } from '../DragInZonesTemplate.settings';

import styles from './DragZone.module.scss';
import { setHorizontal, setVertical } from './DragZone.settings';

type RefProp = {
  onClear: () => void,
};

interface Prop {
  dragItems: DragElement[],
  parentSize: any,
  handleDropEnd: (data: any) => void,
}

export const DragZone = React.forwardRef<RefProp, Prop>(({
  dragItems,
  parentSize,
  handleDropEnd,
}, ref) => {
  const parentDivSize = useMemo(() => parentSize, [parentSize]);
  const [
    positionedItems, setPositionedItems,
  ] = useState<DragElement[]>(dragItems);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controlsArray = dragItems.map(() => useAnimation());
  const deviceWidth = useDeviceWidth();

  const dragConstraints = {
    top: 0,
    right: parentDivSize?.width / 2,
    bottom: parentDivSize?.height,
    left: 0 - parentDivSize?.width / 2,
  };

  const dragEnd = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const { id } = target;
    const draggableItem = document.getElementById(id);

    if (draggableItem === null) {
      return;
    }

    const draggableAreaRect = draggableItem.getBoundingClientRect();

    handleDropEnd(draggableAreaRect);
  };

  const initializeDragItems = () => {
    const updateArray = dragItems.map((item, index) => {
      return {
        ...item,
        x: setHorizontal(index, dragItems.length, deviceWidth),
        y: setVertical(index, dragItems.length, deviceWidth),
      };
    });

    setPositionedItems(updateArray);
  };

  useEffect(() => {
    initializeDragItems();
  }, []);

  const onClear = async () => {
    await Promise.all(
      positionedItems.map((items, index) => {
        return controlsArray[index].start({ x: items.x, y: items.y });
      }),
    );
  };

  React.useImperativeHandle(ref, () => ({
    onClear,
  }));

  return (
    <div className={styles.container}>
      {positionedItems.map((item, index) => (
        <motion.div
          drag
          dragConstraints={
            dragConstraints
          }
          key={item.id}
          id={item.id}
          initial={{
            x: setHorizontal(index, positionedItems.length, deviceWidth),
            y: setVertical(index, positionedItems.length, deviceWidth),
          }}
          animate={controlsArray[index]}
          className={styles.element}
          dragMomentum={false}
          whileDrag={{ scale: 1.2 }}
          onDragEnd={dragEnd}
        >
          <Picture
            className={styles.image}
            src={item.image}
            id={item.id}
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
});
