import React from 'react';
import { ErrorGost } from '../ErrorGost';

import styles from './Warning.module.scss';

type Props = {
  text?: string;
};

const defaultText = 'Вибачте, але цей рівень'
 + ' недоступний для гри на планшетах та телефонах';

export const Warning: React.FC<Props> = ({ text = defaultText }) => {
  return (
    <div className={styles.warning}>
      <ErrorGost />

      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
};
