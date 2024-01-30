import React, { useState } from 'react';
import Color from 'color';

import { LevelLayout } from '@core/components/LevelLayout';
import { ColorPicker } from '@components/ColorPicker';
import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';

import styles from './DrawWinterLevel.module.scss';

export const DrawWinterLevel: React.FC = () => {
  const initialColors: Color[] = [
    Color('#00ABEC'),
    Color('#248C18'),
    Color('#E30613'),
    Color('#000000'),
  ];

  const [activeColor, setActiveColor] = useState<Color>(initialColors[0]);
  const [linesTree, setLinesTree] = useState<DrawCanvasLine[]>([]);
  const [linesStar, setLinesStar] = useState<DrawCanvasLine[]>([]);

  const handleClear = () => {
    setLinesStar([]);
    setLinesTree([]);
  };

  const checkIsGameFinished = () => {
    return linesTree.length > 0 || linesStar.length > 0;
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
      description="Домалюй другі половинки"
      errorMessage="Нічого не намальовано"
      audio="task/january/draw-other-half.m4a"
      onClear={handleClear}
      checkIsGameFinished={checkIsGameFinished}
    >
      <div className={styles.container}>
        <div className={styles.block}>
          <DrawCanvas
            image="objects/tree-500x620.png"
            lines={linesTree}
            setLines={setLinesTree}
            aspectRation={1}
            color={activeColor}
          />
        </div>
        <div className={styles.block}>
          <DrawCanvas
            image="objects/star-500x500.png"
            lines={linesStar}
            setLines={setLinesStar}
            aspectRation={1}
            color={activeColor}
          />
        </div>
      </div>
      <ColorPicker
        colors={initialColors}
        setActiveColor={setActiveColor}
        isHorizontal
      />
    </LevelLayout>
  );
};
