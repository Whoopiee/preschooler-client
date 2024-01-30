import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { v4 as uuid } from 'uuid';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { motion } from 'framer-motion';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';
import { DynamicOrnamentType } from '@customTypes/IOrnament';
import { ornamentData } from './DragToysLevel.settings';

import styles from './DragToysLevel.module.scss';

export const DragToysLevel: React.FC = () => {
  const width = useDeviceWidth();
  const [layoutHeight, setLayoutHeight] = useState(600);

  const layoutRef = useRef<HTMLDivElement | null>(null);
  const [
    dynamicOrnaments,
    setDynamicOrnaments,
  ] = useState<DynamicOrnamentType[]>([]);

  const initializeDynamics = () => {
    const data = ornamentData.map((item, index) => {
      return {
        id: uuid(),
        data: Array.from({ length: 6 }, () => item),
        className: `ornament${index}`,
      };
    });

    setDynamicOrnaments(data);
  };

  const dragDivWidth = useMemo(() => {
    if (width < 1200) {
      return 100;
    }

    if (width < 1400) {
      return 150;
    }

    return 200;
  }, [width]);

  useEffect(() => {
    if (layoutRef.current) {
      setLayoutHeight(layoutRef.current.offsetHeight);
    }

    initializeDynamics();
  }, []);

  if (width < 768) {
    return (
      <LevelLayout
        description=""
      >
        <Warning />
      </LevelLayout>
    );
  }

  return (
    <LevelLayout
      description="Прикрась ялинку іграшками"
      errorMessage="Прикрасьте ялинку іграшками"
      audio="task/january/decorate-tree.m4a"
      // onClear={handleClear}
      checkIsGameFinished={() => true}
    >
      <div
        className={styles.container}
        ref={layoutRef}
      >
        <Picture
          draggable={false}
          src="plants/pine-768x1300.png"
          className={styles.image}
        />
        <div
          className={styles.dragContainer}
        >
          {dynamicOrnaments.map((item, index) => (
            <div
              className={styles.wrapper}
              key={uuid()}
            >
              {item.data.map((ornament) => (
                <motion.div
                  className={styles.draggable}
                  drag
                  key={uuid()}
                  dragMomentum={false}
                  initial={{ x: 0, y: 0 }}
                  whileDrag={{ scale: 1.1 }}
                  dragConstraints={{
                    top: 0 - layoutHeight,
                    bottom: 0 + dragDivWidth / 2,
                    left: 0 - ((dragDivWidth) * (index + 1)),
                    // eslint-disable-next-line max-len
                    right: 0 + (dragDivWidth) * (dynamicOrnaments.length - index),
                  }}
                >
                  <Picture
                    src={ornament.image}
                    id={ornament.id}
                    className={styles.imageOrnament}
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </LevelLayout>
  );
};
