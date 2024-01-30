import React, { useContext } from 'react';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import cn from 'classnames';
import SVG from 'react-inlinesvg';

import pauseImage from '@assets/icons/trackPause.svg';
import playImage from '@assets/icons/trackPlay.svg';

import styles from './PlayMusicButton.module.scss';

type Props = {
  id: string,
  audio: string;
  title?: string;
  className?: string;
  wrapperClass?: string;
  imageClass?: string;
  iconClass?: string;
  width?: number;
  height?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const PlayMusicButton: React.FC<Props> = ({
  id,
  audio,
  title,
  wrapperClass,
  width,
  height,
  className,
  imageClass,
  iconClass,
}) => {
  const {
    track,
    isPlaying,
    toggleTrack,
  } = useContext(AudioLevelContext);

  return (
    <button
      type="button"
      className={cn(wrapperClass)}
      onClick={(e) => {
        e.stopPropagation();
        toggleTrack({ id, src: audio });
      }}
    >
      <div
        className={cn(styles.wrapper, className)}
        style={{ width, height }}
      >
        {title && (
          <div className={styles.textContainer}>
            <p className={styles.text}>{title}</p>
          </div>
        )}
        <div className={cn(styles.imageContainer, imageClass)}>
          <SVG
            className={cn(styles.icon, iconClass)}
            src={isPlaying && id === track?.id ? playImage : pauseImage}
          />
        </div>
      </div>
    </button>
  );
};
