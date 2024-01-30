/* eslint-disable max-len */
import React, { useState } from 'react';
import cn from 'classnames';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { ElementWithAudio } from '@components/ElementWithAudio';
import { Warning } from '@components/Warning';

import styles from './MountainsAndPlainsLevel.module.scss';

const DrawMountainsAndPlainsImage = 'pics/DrawMountainsAndPlains.png';

export const lakeColors: Color[] = [
  Color('#454545'),
  Color('#9D9D9D'),
  Color('#8EC31E'),
  Color('#3AA209'),
  Color('#D2F4FF'),
];

export const MountainsAndPlainsLevel: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color('#000'));
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
      image: 'pics/Mountains.png',
      text: 'Гори — це ділянки землі, високо підняті над навколишньою місцевістю.',
      alt: 'Гори',
    },
    {
      image: 'pics/Plains.png',
      text: 'Рівнини — це рівні або горбисті великі простори землі, на яких зовсім малий перепад висот.',
      alt: 'Рівнини',
    },
  ];

  return (
    <LevelLayout
      errorMessage="Нічого не намальовано"
      description=""
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
        audio="task/december/draw-mountaints.m4a"
      >
        <h3>Домалюй на картинці гори</h3>
      </ElementWithAudio>

      <div className={styles.lake}>

        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image={DrawMountainsAndPlainsImage}
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
