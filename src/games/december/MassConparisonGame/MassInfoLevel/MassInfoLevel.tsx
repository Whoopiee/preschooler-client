import React from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import styles from './MassInfoLevel.module.scss';

const massInfoImage = 'pics/1kg.png';

export const MassInfoLevel: React.FC = () => {
  return (
    <LevelLayout
      description="Для вимірювання ваги використовують мірку 1 кілограм (1 кг)."
      audio="task/december/to-measure.m4a"
    >
      <div className={styles.level}>
        <Picture src={massInfoImage} alt="" />
      </div>
    </LevelLayout>
  );
};
