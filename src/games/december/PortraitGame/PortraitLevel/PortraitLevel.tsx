/* eslint-disable max-len */
import React, { useState } from 'react';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';
import { Picture } from '@components/Picture';
import { ElementWithAudio } from '@components/ElementWithAudio';
import { ColorPicker } from '@components/ColorPicker';

import styles from './PortraitLevel.module.scss';

export const lakeColors: Color[] = [
  Color('#454545'),
  Color('#EA241F'),
  Color('#2FB7DF'),
  Color('#f3e3bf'),
  Color('#41302e'),
];

export const DrawLakeRiverLevel: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(lakeColors[0]);
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

  const contentItems = [
    {
      image: 'pics/portrait1.png',
      alt: 'Петриківский розпис',
    },
    {
      image: 'pics/portrait2.png',
      alt: 'Петриківский розпис',
    },
    {
      image: 'pics/portrait3.png',
      alt: 'Петриківский розпис',
    },
    {
      image: 'pics/portrait4.png',
      alt: 'Петриківский розпис',
    },
  ];

  return (
    <LevelLayout
      errorMessage="Нічого не намальовано"
      description="Портрет – це форма зображення людини, де основний фокус зосереджений на її обличчі"
      audio="task/december/portrait.m4a"
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
    >
      <div className={styles.container_prev}>
        {contentItems.map((item) => (
          <div className={styles.content__prev}>
            <Picture className={styles.img} src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>

      <ElementWithAudio
        wrapperClass={styles.secondTask}
        audio="task/december/paint-girl-boy.m4a"
      >
        <h3>Розфарбуй хлопчика та дівчинку</h3>
      </ElementWithAudio>

      <div className={styles.lake}>

        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image="pics/portraitDraw.png"
          aspectRation={0.75}
          color={selectedColor}
        />
      </div>

      <ColorPicker
        colors={lakeColors}
        isHorizontal
        setActiveColor={setSelectedColor}
      />
      {/* <ul className={styles.toolsList}>
        {lakeColors.map(color => (
          <button
            type="button"
            aria-label="Color"
            key={color.hex()}
            style={{ backgroundColor: color.hex() }}
            className={cn(
              styles.color,
              {
                [styles.selected]: selectedColor.hex() === color.hex(),
              },
            )}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ul> */}

    </LevelLayout>
  );
};
