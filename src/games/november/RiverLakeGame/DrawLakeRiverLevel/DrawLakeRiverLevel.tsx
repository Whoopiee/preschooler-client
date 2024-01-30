/* eslint-disable max-len */
import React, { useState } from 'react';
import cn from 'classnames';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';
import { Picture } from '@components/Picture';
import { ElementWithAudio } from '@components/ElementWithAudio';

import styles from './DrawLakeRiverLevel.module.scss';

export const lakeColors: Color[] = [
  Color('#A7E7F6'),
  Color('#68B2F7'),
  Color('#78FFD7'),
];

export const DrawLakeRiverLevel: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color('#68B2F7'));
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
      image: 'pics/river.png',
      text: 'РІЧКА - водний потік, створений природою, який живиться за рахунок підземних вод та кудись впадає',
      alt: 'РІЧКА',
    },
    {
      image: 'pics/trickle.png',
      text: 'СТРУМОК - невеликий водотік, шириною до декількох метрів. Глибина водойми невелика. Виникає сезонно',
      alt: 'СТРУМОК',
    },
    {
      image: 'pics/lake.png',
      text: 'ОЗЕРО є велика площа води, оточена сушею. Нікуди не впадає та не рухається',
      alt: 'ОЗЕРО',
    },
  ];

  return (
    <LevelLayout
      errorMessage="Нічого не намальовано"
      description="В нашій країні є багато водних ресурсів. Вивчимо деякі з них:"
      audio="task/november/water-resourses.m4a"
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
    >
      <div className={styles.container_prev}>
        {contentItems.map((item) => (
          <div className={styles.content__prev}>
            <Picture className={styles.img} src={item.image} alt={item.alt} />
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>

      <ElementWithAudio
        audio="task/november/color-river.m4a"
      >
        <h3>Розфарбуй річку</h3>
      </ElementWithAudio>

      <div className={styles.lake}>

        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image="pics/draw-lake-river-canvas.png"
          aspectRation={0.75}
          color={selectedColor}
        />
      </div>

      <ul className={styles.toolsList}>
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
      </ul>

    </LevelLayout>
  );
};
