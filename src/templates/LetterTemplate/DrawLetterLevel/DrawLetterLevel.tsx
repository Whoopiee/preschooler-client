import { useState } from 'react';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';

import { Template } from '@customTypes/Template';

import styles from './DrawLetterLevel.module.scss';
import { IDrawLetterLevel } from './IDrawLetterLevel.interface';

export const DrawLetterLevel: Template<IDrawLetterLevel> = ({
  level,
  children,
}) => {
  const [lines, setLines] = useState<DrawCanvasLine[]>([]);

  const handleClear = () => setLines([]);
  const checkIsGameFinished = () => lines.length !== 0;

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
      {...level}
      errorMessage="Нічого не намальовано"
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
    >
      {children}
      <div className={styles.canvas}>
        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image={level.image}
          aspectRation={0.2}
          color={Color('#19b041')}
        />
      </div>
    </LevelLayout>
  );
};
