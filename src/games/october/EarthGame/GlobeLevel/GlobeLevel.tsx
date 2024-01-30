import React, { useState } from 'react';
import cn from 'classnames';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { Warning } from '@components/Warning';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Picture } from '@components/Picture';
import { globeLevelSettings as settings } from './settings';

import styles from './GlobeLevel.module.scss';

export const GlobeLevel: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color('#2981d9'));

  const [linesEast, setLinesEast] = useState<DrawCanvasLine[]>([]);
  const [linesWest, setLinesWest] = useState<DrawCanvasLine[]>([]);

  const handleClear = () => {
    setLinesEast([]);
    setLinesWest([]);
  };

  const checkIsGameFinished = () => (
    linesEast.length !== 0 || linesWest.length !== 0
  );

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
      description="Земля має форму кулі. Якщо зробити карту планети на папері,
      то вона матиме такий вигляд. Розфарбуй планету згідно позначень"
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
      audio={settings.audio}
    >
      <ul hidden className={styles.toolsList}>
        {settings.globeTools.map(({
          color,
          mark,
          markHeight,
          text,
        }) => (
          <li
            key={text}
            className={styles.toolItem}
          >
            <button
              type="button"
              aria-label="Pick a color"
              style={{ backgroundColor: color.hex() }}
              className={cn(
                styles.color,
                {
                  [styles.selected]: selectedColor.hex() === color.hex(),
                },
              )}
              onClick={() => setSelectedColor(color)}
            />

            {mark ? (
              <Picture
                style={{ height: markHeight }}
                className={styles.mark}
                src={mark}
                alt="Earth"
              />
            ) : (
              <div className={styles.mark} />
            )}

            <div className={styles.tipText}>{text}</div>
          </li>
        ))}
      </ul>

      <div className={styles.earth}>
        <div className={cn(styles.round, styles.west)}>
          <DrawCanvas
            lines={linesEast}
            setLines={setLinesEast}
            image={settings.earthWestImage}
            aspectRation={1}
            color={selectedColor}
            isRound
          />
        </div>

        <div className={cn(styles.round)}>
          <DrawCanvas
            lines={linesWest}
            setLines={setLinesWest}
            image={settings.earthEastImage}
            aspectRation={1}
            color={selectedColor}
            isRound
          />
        </div>
      </div>
    </LevelLayout>
  );
};
