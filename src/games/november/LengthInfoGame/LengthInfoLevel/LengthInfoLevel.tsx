import React from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import styles from './LengthInfoLevel.module.scss';

export const LengthInfoLevel: React.FC = () => {
  return (
    <LevelLayout
      description="Для визначення довжини
      використовують мірку 1 сантиметр (1 см).
      На лінійці це відстань між сусідніми цифрами"
      audio="task/november/get-length.m4a"
    >
      <div className={styles.level}>
        <Picture src="pics/lengthInfo.png" />
      </div>
    </LevelLayout>
  );
};
