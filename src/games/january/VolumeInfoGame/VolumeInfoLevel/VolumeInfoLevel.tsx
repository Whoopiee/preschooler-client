import React from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import styles from './VolumeInfoLevel.module.scss';

export const VolumeInfoLevel: React.FC = () => {
  return (
    <LevelLayout
      description="Для вимірювання об’єму рідин
        використовують мірку 1 літр (1 л).
        Подивись в магазині які об’єми мають продукти"
      audio="task/january/for-measuring-volume.m4a"
    >
      <div className={styles.level}>
        <Picture src="pics/number8mlPrev.png" />
      </div>
    </LevelLayout>
  );
};
