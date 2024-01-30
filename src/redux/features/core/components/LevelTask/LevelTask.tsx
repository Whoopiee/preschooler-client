import React, { useCallback, useEffect, useContext } from 'react';
import cn from 'classnames';

import { PauseMusicButton } from '@components/buttons/PauseMusicButton';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';

import { TLevelTask } from './LevelTask.types';
import styles from './LevelTask.module.scss';
import { Verse } from '../Verse';

type Props = TLevelTask;

export const LevelTask: React.FC<Props> = React.memo(({
  verse,
  description,
  audio,
  audioVerse,
  autoPlay = 'none',
  className,
  hasTopMargin = false,
}) => {
  const { track, isPlaying, toggleTrack } = useContext(AudioLevelContext);

  const toggleDescription = useCallback(() => {
    if (audio) {
      toggleTrack({ id: audio, src: audio });
    }
  }, [audio, toggleTrack]);

  const toggleVerse = useCallback(() => {
    if (audioVerse) {
      toggleTrack({ id: audioVerse, src: audioVerse });
    }
  }, [audioVerse, toggleTrack]);

  useEffect(() => {
    if (autoPlay === 'task') {
      toggleDescription();

      return;
    }

    if (autoPlay === 'verse') {
      toggleVerse();
    }
  }, []);

  return (
    <div
      className={cn(
        styles.container,
        className,
        {
          [styles.topMargin]: hasTopMargin,
        },
      )}
    >
      {verse && (
        <div className={styles.verse}>
          <Verse verse={verse} />

          {Boolean(audioVerse) && (
            <>
              &nbsp;&nbsp;
              <PauseMusicButton
                isPlaying={track?.id === audioVerse && isPlaying}
                className={cn(styles.play, styles.playVerse)}
                onClick={toggleVerse}
                width={20}
                height={20}
              />
            </>
          )}
        </div>
      )}

      {description && (
        <span className={styles.description}>
          {description}

          {Boolean(audio) && (
            <>
              &nbsp;&nbsp;
              <PauseMusicButton
                isPlaying={track?.id === audio && isPlaying}
                className={styles.play}
                onClick={toggleDescription}
                width={20}
                height={20}
              />
            </>
          )}
        </span>
      )}
    </div>
  );
});
