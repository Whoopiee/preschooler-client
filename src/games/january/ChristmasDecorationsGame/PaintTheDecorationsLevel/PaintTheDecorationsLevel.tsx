import React, { useState } from 'react';
import Color from 'color';
import { ColorPicker } from '@components/ColorPicker';
import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { Warning } from '@components/Warning';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';

import styles from './PaintTheDecorationsLevel.module.scss';

const colors: Color[] = [
  Color('#F5624E'),
  Color('#CC231E'),
  Color('#34A660'),
  Color('#0F8A5E'),
  Color('#235E6E'),
];

export const PaintTheDecorationsLevel: React.FC = () => {
  const [lines, setLines] = useState<DrawCanvasLine[]>([]);
  const [currentColor, setCurrentColor] = useState<Color>(colors[0]);

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
      errorMessage="Нічого не намальовано"
      description="Розмалюйте новорічні прикраси"
      audio="task/january/color-christmas-toys.m4a"
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
    >
      <div className={styles.layout}>
        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image="objects/christmas-toys-1447x1307.png"
          aspectRation={0.75}
          color={currentColor}
        />
      </div>

      <ColorPicker
        colors={colors}
        setActiveColor={setCurrentColor}
        isHorizontal
      />
    </LevelLayout>
  );
};
