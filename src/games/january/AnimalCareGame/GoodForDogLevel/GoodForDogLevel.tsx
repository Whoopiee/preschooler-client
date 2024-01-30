import React from 'react';
import { QuizTemplate } from '@templates/QuizTemplate';
import { Picture } from '@components/Picture';
import { level } from './GoodForDog.settings';

import styles from './GoodForDogLevel.module.scss';

export const GoodForDogLevel: React.FC = () => {
  return (
    <QuizTemplate level={level}>
      <Picture
        src="animals/dog-400x500.png"
        className={styles.image}
        draggable={false}
      />
    </QuizTemplate>
  );
};
