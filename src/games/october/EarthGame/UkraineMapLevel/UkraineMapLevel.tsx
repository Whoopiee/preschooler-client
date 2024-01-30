import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Color from 'color';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';

import styles from './UkraineMapLevel.module.scss';

export const UkraineMapLevel: React.FC = () => {
  const [pointerId, setPointerId] = useState<string>(uuid());
  const [lines, setLines] = useState<DrawCanvasLine[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const handleClear = () => {
    setLines([]);
    setPointerId(uuid());
  };

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

  return (
    <LevelLayout
      description="Обведи кордон України.
      Перетягни фігурку розташування на місто, в якому ти живеш"
      onClear={handleClear}
      audio="task/october/ukraine-border.m4a"
    >
      <div
        ref={ref}
        className={styles.level}
      >
        <motion.div
          key={pointerId}
          className={styles.pointerContainer}
          drag
          dragConstraints={ref}
          dragElastic={0.5}
          dragMomentum={false}
        >
          <Picture
            src="objects/map-pointer-130x151.svg"
            className={styles.pointer}
          />
        </motion.div>

        <div className={styles.image}>
          <DrawCanvas
            lines={lines}
            setLines={setLines}
            image="pics/ukraine-map-1251x850.svg"
            aspectRation={0.68}
            color={Color('#000')}
          />
        </div>
      </div>
    </LevelLayout>
  );
};
