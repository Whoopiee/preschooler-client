import React from 'react';
import { v4 as uuid } from 'uuid';

import styles from './Verces.module.scss';

type Props = {
  verse: string[];
};

export const Verse: React.FC<Props> = React.memo(({ verse }) => (
  <span className={styles.verse}>
    {verse.map((line, i, array) => (
      <React.Fragment key={uuid()}>
        {line}
        {i !== array.length - 1 && <br />}
      </React.Fragment>
    ))}
  </span>
));
