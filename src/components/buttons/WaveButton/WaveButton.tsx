import React from 'react';
import Wave from 'react-wavify';
import cn from 'classnames';

import styles from './WaveButton.module.scss';

type Props = {
  text: string;
  isWaved: boolean;
  onClick: () => void;
  className?: string;
  waveColor?: string;
  hasBubbles?: boolean;
  isBubblesRight?: boolean;
};

export const WaveButton: React.FC<Props> = ({
  text,
  isWaved,
  onClick,
  className,
  waveColor = '#61e2ff',
  hasBubbles = true,
  isBubblesRight = true,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.button, className)}
      onClick={onClick}
      data-text={text}
    >
      <Wave
        className={cn(
          styles.wave,
          {
            [styles.full]: isWaved,
          },
        )}
        fill={waveColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.2,
          points: 3,
        }}
      />

      <div
        className={cn(
          styles.background,
          {
            [styles.full]: isWaved,
          },
        )}
        style={{ backgroundColor: waveColor }}
      />

      {hasBubbles && (
        <div className={cn(
          styles.bubbleContainer,
          {
            [styles.hidden]: !isWaved,
            [styles.right]: isBubblesRight,
          },
        )}
        >
          <div className={cn(styles.bubble, styles.small)} />
          <div className={cn(styles.bubble, styles.smallMedium)} />
          <div className={cn(styles.bubble, styles.medium)} />
          <div className={cn(styles.bubble, styles.large)} />
          <div className={cn(styles.bubble, styles.smallLarge)} />
        </div>
      )}
    </button>
  );
};
