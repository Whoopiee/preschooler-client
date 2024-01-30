import React from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import styles from './OceanInfoLevel.module.scss';

export const OceanInfoLevel: React.FC = () => {
  return (
    <LevelLayout
      description="Океан — найбільший водний об’єкт,
      розміщений між материками. Запам’ятай назви та
      розташування океанів на Землі."
      audio="task/january/ocean-biggeset-water-object.m4a"
    >
      <div className={styles.container}>
        <Picture className={styles.image} src="objects/ocean-map.svg" />
      </div>
    </LevelLayout>
  );
};
