import React, { useContext } from 'react';
import cn from 'classnames';

import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import { PauseMusicButton } from '@components/buttons/PauseMusicButton';

import styles from './ElementWithAudio.module.scss';

type Prop = {
  children: React.ReactNode;
  position?: 'right' | 'top' | 'left' | 'bottom';
  audio: string;
  wrapperClass?: string;
};

export const ElementWithAudio: React.FC<Prop> = ({
  children,
  position,
  audio,
  wrapperClass,
}) => {
  const { track, isPlaying, toggleTrack } = useContext(AudioLevelContext);

  if (position === 'top' || position === 'left') {
    return (
      <div className={cn(
        position === 'top'
          ? styles.column
          : styles.row,
        wrapperClass,
      )}
      >
        <PauseMusicButton
          isPlaying={isPlaying && track?.id === audio}
          width={20}
          height={20}
          onClick={() => toggleTrack({ id: audio, src: audio })}
          className={cn(
            styles.play,
            position === 'top'
              ? styles.top
              : styles.left,
          )}
        />
        {children}
      </div>
    );
  }

  return (
    <div className={cn(
      position === 'bottom'
        ? styles.column
        : styles.row,
      wrapperClass,
    )}
    >
      {children}
      <PauseMusicButton
        isPlaying={isPlaying && track?.id === audio}
        width={20}
        height={20}
        onClick={() => toggleTrack({ id: audio, src: audio })}
        className={cn(
          styles.play,
          position === 'bottom'
            ? styles.bottom
            : styles.right,
        )}
      />
    </div>
  );
};
