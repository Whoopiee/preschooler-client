import React from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  progress: number;
};

export const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div
      className={styles.block}
      style={{
        width: `${progress}%`,
        transitionDuration: progress < 1
          ? '0s'
          : '',
      }}
    />
  );
};
