import React from 'react';
import cn from 'classnames';

import styles from './ErrorGost.module.scss';

export const ErrorGost: React.FC = () => {
  return (
    <div className={styles.illustration}>
      <div className={styles.circle} />
      <div className={styles.clip}>
        <div className={styles.paper}>
          <div className={styles.face}>
            <div className={styles.eyes}>
              <div className={cn(styles.eye, styles.eye_left)} />
              <div className={cn(styles.eye, styles.eye_right)} />
            </div>
            <div className={cn(styles.rosyCheeks, styles.rosyCheeks_left)} />
            <div className={cn(styles.rosyCheeks, styles.rosyCheeks_right)} />
            <div className={styles.mouth} />
          </div>
        </div>
      </div>
    </div>
  );
};
