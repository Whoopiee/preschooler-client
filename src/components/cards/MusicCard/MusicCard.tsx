import React from 'react';

import styles from './MusicCard.module.scss';
import { PauseMusicButton } from '../../buttons/PauseMusicButton';
import { IMusicCard } from './MusicCard.interface';
import { ProgressBar } from '../../ProgressBar/ProgressBar';
import { Picture } from '../../Picture';

interface Props {
  music: IMusicCard;
  onClick: () => void;
  isPlaying: boolean;
  progress?: number;
}

export const MusicCard: React.FC<Props> = ({
  music: {
    image,
    title,
    description,
    riddlesText,
  },
  onClick,
  isPlaying,
  progress,
}) => {
  const lines = riddlesText ? riddlesText.split('\n') : [];

  return (
    <div className={styles.card}>
      <button
        type="button"
        aria-label="Play"
        onClick={onClick}
        className={styles.button}
      >
        {image && (
          <Picture
            className={styles.image}
            src={image}
            alt="Instrument"
          />
        )}

        {riddlesText && (
          <p style={
            {
              lineHeight: '25px',
              fontSize: '21px',
              marginBottom: '130px',
            }
          }
          >
            {lines.map((line) => (
              <>
                {line}
                <br />
              </>
            ))}
          </p>
        )}

        <PauseMusicButton
          isPlaying={isPlaying}
          className={styles.pause}
        />

        {progress !== undefined && (
          <div className={styles.progress}>
            <ProgressBar progress={progress} />
          </div>
        )}
      </button>

      {title && <h3 className={styles.title}>{title}</h3>}

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
