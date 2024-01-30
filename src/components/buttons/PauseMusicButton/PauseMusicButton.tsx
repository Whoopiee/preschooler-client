import React from 'react';
import SVG from 'react-inlinesvg';
import cn from 'classnames';

import pauseImage from '@assets/icons/trackPause.svg';
import playImage from '@assets/icons/trackPlay.svg';

import styles from './PauseMusicButton.module.scss';

type Props = {
  isPlaying: boolean;
  className?: string;
  width?: number;
  height?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const PauseMusicButton: React.FC<Props> = ({
  isPlaying,
  className,
  width,
  height,
  ...props
}) => {
  return (
    <div
      className={cn(styles.button, className)}
      {...props}
    >
      <div
        className={styles.wrapper}
        style={{ width, height }}
      >
        <SVG
          className={styles.icon}
          src={isPlaying ? playImage : pauseImage}
        />
      </div>
    </div>
  );
};
