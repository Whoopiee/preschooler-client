import React, { useRef, useState, useEffect } from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { motion, useAnimation } from 'framer-motion';
import { Picture } from '@components/Picture';
import { mainValues, initialContainers, Values } from './NewDragGame.settings';

import styles from './NewDragGame.module.scss';

interface ValuesPosition extends Values {
  x?: string,
  y?: string,
}

export const NewDragGame: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [divWidth, setDivWidth] = useState(1000);
  const [divHeight, setDivHeight] = useState(300);
  const [answerItems, setAnswerItems] = useState<string[]>([]);
  const [dragItems, setDragItems] = useState<ValuesPosition[]>(mainValues);
  const [targetContainers, setTargetContainers] = useState(initialContainers);

  const deviceWidth = useDeviceWidth();

  const initializeTargetContainers = async () => {
    const updateContainer = initialContainers.map((item) => {
      const targetArea = document.getElementById(item.id);
      const targetAreaRect = targetArea!.getBoundingClientRect();

      return {
        ...item,
        top: targetAreaRect.top,
        right: targetAreaRect.right,
        bottom: targetAreaRect.bottom,
        left: targetAreaRect.left,
      };
    });

    setTargetContainers(updateContainer);
  };

  const initializeDragItems = async () => {
    const updateArray = dragItems.map((item, index) => {
      return {
        ...item,
        y: setVertical(index, dragItems.length),
        x: setHorizontal(index, dragItems.length),
      };
    });

    setDragItems(updateArray);
  };

  useEffect(() => {
    if (divRef.current) {
      setDivWidth(divRef.current.offsetWidth);
      setDivHeight(divRef.current.offsetHeight);
    }

    initializeDragItems();
    initializeTargetContainers();

    const handleScroll = () => {
      initializeTargetContainers();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDragStart = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const { id } = target;

    const updateArray = [...answerItems];

    if (!updateArray.includes(id)) {
      updateArray.push(id);
      setAnswerItems(updateArray);
    }
  };

  const handleDragEnd = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const { id } = target;
    const draggableItem = document.getElementById(id);

    if (draggableItem === null) {
      return;
    }

    const draggableAreaRect = draggableItem.getBoundingClientRect();

    let isInside = false;

    for (let i = 0; i < targetContainers.length; i += 1) {
      if (
        draggableAreaRect.top + 40 >= targetContainers[i].top
        && draggableAreaRect.right - 10 <= targetContainers[i].right
        && draggableAreaRect.bottom - 20 <= targetContainers[i].bottom
        && draggableAreaRect.left + 10 >= targetContainers[i].left
      ) {
        isInside = true;
        break;
      }
    }

    if (!isInside) {
      setAnswerItems(prev => prev.filter((item) => item !== id));
    }
  };

  const setHorizontal = (index: number, length: number) => {
    if (deviceWidth > 1200) {
      return `${(index - 4) * 100}%`;
    }

    if (deviceWidth > 769) {
      if (index > length / 2) {
        return `${(index - 7) * 100}%`;
      }

      return `${(index - 2) * 100}%`;
    }

    if (index < length / 3) {
      return `${(index - 1) * 100}%`;
    }

    if (index < (2 * length) / 3) {
      return `${(index - 4) * 100}%`;
    }

    return `${(index - 7) * 100}%`;
  };

  const setVertical = (index: number, length: number) => {
    if (deviceWidth > 1200) {
      return '0%';
    }

    if (deviceWidth > 769) {
      if (index <= length / 2) {
        return '0%';
      }

      return '100%';
    }

    if (index < length / 3) {
      return '0%';
    }

    if (index < (2 * length) / 3) {
      return '100%';
    }

    return '200%';
  };

  const checkIsGameFinished = () => {
    return answerItems.length === 7;
  };

  const clearDragItems = async () => {
    await Promise.all(
      dragItems.map((items, index) => {
        return controlsArray[index].start({ x: items.x, y: items.y });
      }),
    );

    setAnswerItems([]);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controlsArray = dragItems.map(() => useAnimation());

  return (
    <LevelLayout
      description="Розподіли предмети по групах, щоб разом їх було сім"
      errorMessage="Неправильна кількість елементів в групах. Спробуйте ще."
      audio="task/december/distribute-items.m4a"
      onClear={clearDragItems}
      checkIsGameFinished={checkIsGameFinished}
    >
      <div
        className={styles.container}
        ref={divRef}
      >
        {dragItems.map((item, index) => (
          <motion.div
            id={item.id}
            className={styles.draggableImage}
            key={item.id}
            animate={controlsArray[index]}
            initial={{
              x: setHorizontal(index, dragItems.length),
              y: setVertical(index, dragItems.length),
            }}
            drag
            dragMomentum={false}
            dragConstraints={
              {
                top: 0,
                right: divWidth,
                bottom: divHeight,
                left: 0 - divWidth / 2,
              }
            }
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 1.2 }}
          >
            <Picture
              src={item.image}
              id={item.id}
              className={styles.image}
              alt="image"
              draggable={false}
            />
          </motion.div>
        ))}
        <div className={styles.targetContainer}>
          {targetContainers.map((container) => (
            <div
              className={styles.target}
              id={container.id}
              key={container.id}
            />
          ))}
        </div>
      </div>
    </LevelLayout>
  );
};
