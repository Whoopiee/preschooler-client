import React, { useRef, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { animate, motion } from 'framer-motion';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Picture } from '@components/Picture';
import { LevelLayout } from '@core/components/LevelLayout';
import { LevelEndExplosion } from '@components/LevelEndExplosion';
// eslint-disable-next-line max-len
import { Container } from '@games/december/LearnNumber7Game/NewDragGame/NewDragGame.settings';
import { cards, MAX_RIGHT_ELEMENTS } from './DragSeaCreaturesLevel.settings';

import styles from './DragSeaCreaturesLevel.module.scss';

export const DragSeaCreaturesLevel: React.FC = () => {
  const initialValue = {
    id: uuid(),
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  const [
    dropDivPosition,
    setDropDivPosition,
  ] = useState<Container>(initialValue);
  const [isRightElement, setIsRightElement] = useState<boolean>(false);
  const [listOfElements, setListOfElements] = useState<string[]>([]);

  const dropRef = useRef(null);
  const width = useDeviceWidth();

  const initializeDropPosition = () => {
    const targetDiv = document.getElementById('drop');
    const targetDivRect = targetDiv?.getBoundingClientRect();

    setDropDivPosition({
      ...dropDivPosition,
      top: targetDivRect!.top,
      right: targetDivRect!.right,
      bottom: targetDivRect!.bottom,
      left: targetDivRect!.left,
    });
  };

  const handleDragStart = (isRight: boolean) => {
    setIsRightElement(isRight);
  };

  const handleDragEnd = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const { id } = target;
    const draggableItem = document.getElementById(id);

    if (draggableItem === null) {
      return;
    }

    const draggableAreaRect = draggableItem.getBoundingClientRect();

    if (
      draggableAreaRect.top + 40 >= dropDivPosition.top
      && draggableAreaRect.right - 10 <= dropDivPosition.right
      && draggableAreaRect.bottom - 20 <= dropDivPosition.bottom
      && draggableAreaRect.left + 10 >= dropDivPosition.left
    ) {
      if (isRightElement) {
        animate(draggableItem, { opacity: 0 }, { duration: 0.5 });
        animate(draggableItem, { display: 'none' }, { delay: 0.6 });
        setListOfElements(prev => [...prev, id]);
      } else {
        // eslint-disable-next-line max-len
        animate(draggableItem, { rotate: [0, 10, 0, -10, 0] }, { duration: 0.6 });
      }
    }
  };

  const isGameOver = () => {
    return listOfElements.length === MAX_RIGHT_ELEMENTS;
  };

  useEffect(() => {
    const handleScroll = () => {
      initializeDropPosition();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [width]);

  return (
    <LevelLayout
      description="В нашій країні є два моря:
      Чорне та Азовське. Засели наші моря тваринами, які можуть там жити"
      audio="task/january/there-are-couple-seas.m4a"
      checkIsGameFinished={() => isGameOver()}
      errorMessage="Заселіть моря тваринами"
    >
      <LevelEndExplosion
        isVisible={listOfElements.length === MAX_RIGHT_ELEMENTS}
      />
      <div className={styles.container}>
        <div className={styles.mainImageDiv}>
          <Picture
            src="objects/ocean-seas-1258x1050.png"
            className={styles.mainImage}
          />
          <div
            className={styles.dropZone}
            ref={dropRef}
            id="drop"
          />
        </div>

        <div className={styles.dragZone}>
          {cards.map((card) => (
            <div key={card.title} className={styles.cardWrapper}>
              <motion.div
                className={styles.dragItem}
                id={card.id}
                key={card.id}
                drag
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                onDragStart={() => handleDragStart(card.isRight)}
              >
                <Picture
                  id={card.id}
                  key={card.id}
                  draggable={false}
                  src={card.image}
                  className={styles.image}
                />
              </motion.div>
              <p className={styles.cardTitle}>{card.title}</p>
            </div>
          ))}
        </div>

      </div>
    </LevelLayout>
  );
};
