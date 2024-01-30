/* eslint-disable max-len */
import React, { useState } from 'react';
import cn from 'classnames';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';
import { earthLevelSettings as settings } from './settings';

import styles from './EarthLevel.module.scss';

export const EarthLevel: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color('#19b041'));
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
      errorMessage="Нічого не намальовано"
      description="Розфарбуй материки: Європу зеленим, Азію - червоним, Африку - жовтим,
      Америку - синім, Автралію - фіолетовим, Антарктиду - помаранчевим."
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
      audio={settings.audio}
    >
      <ul className={styles.toolsList}>
        {settings.earthColors.map(color => (
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

      <div className={styles.earth}>
        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image={settings.earthImage}
          aspectRation={0.75}
          color={selectedColor}
        />
      </div>

    </LevelLayout>
  );
};
