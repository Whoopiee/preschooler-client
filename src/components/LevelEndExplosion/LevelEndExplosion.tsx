import React from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import styles from './LevelEndExplosion.module.scss';

type Props = {
  isVisible: boolean;
  height?: string;
};

export const LevelEndExplosion: React.FC<Props> = ({ isVisible, height }) => {
  return (
    <>
      {isVisible && (
        <ConfettiExplosion
          className={styles.explosion}
          zIndex={100}
          force={0.8}
          duration={3000}
          particleCount={100}
          width={1600}
          height={height}
        />
      )}
    </>
  );
};
