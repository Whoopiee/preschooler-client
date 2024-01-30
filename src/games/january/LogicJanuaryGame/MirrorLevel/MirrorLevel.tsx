/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Color from 'color';
import cn from 'classnames';

import { LevelLayout } from '@core/components/LevelLayout';
import { ColorPicker } from '@components/ColorPicker';
import { useDeviceWidth } from '@hooks/useDeviceWidth';

import {
  circles as initial, circlesDefault, colors,
} from './MirrorLevel.settings';
import styles from './MirrorLevel.module.scss';

export const MirrorLevel: React.FC = () => {
  const [color, setColor] = useState<Color>();
  const [circles, setCircles] = useState(initial);
  const width = useDeviceWidth();

  const onClear = () => setCircles(circles.map(circle => (
    circle.isEditable
      ? { ...circle, current: undefined }
      : circle
  )));

  const checkIsGameFinished = () => (
    circles.every(circle => circle.current === circle.color)
  );

  return (
    <LevelLayout
      description='Гра "Дзеркало"'
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Правильно розфарбуй усі кола за прикладом"
      audio="task/january/paint-circles-in-mirror.m4a"
      onClear={onClear}
    >
      <div className={styles.container}>
        <div className={styles.mirror}>
          <div className={styles.grid}>
            {circlesDefault.map(circle => (
              <div
                key={circle.id}
                style={{ backgroundColor: circle.color }}
                className={styles.drawingCircle}
              />
            ))}
          </div>

          <div className={styles.line} />

          <div className={styles.grid}>
            {circles.map(circle => (
              <div
                key={circle.id}
                style={{ backgroundColor: circle.current }}
                className={cn(
                  styles.drawingCircle,
                  {
                    [styles.border]: circle.isEditable,
                  },
                )}
                onClick={() => setCircles(prevState => (
                  prevState.map(c => (
                    c.id === circle.id && c.isEditable
                      ? { ...c, current: color?.hex() }
                      : c
                  ))
                ))}
              />
            ))}
          </div>
        </div>

        <ColorPicker
          isHorizontal={width < 1200}
          colors={colors}
          setActiveColor={setColor}
        />
      </div>
    </LevelLayout>
  );
};
