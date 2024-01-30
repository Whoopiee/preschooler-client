/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import { PauseMusicButton } from '@components/buttons/PauseMusicButton';
import { Template } from '@customTypes/Template';

import styles from './ListenToWordsTemplate.module.scss';
import { IListenToWordsTemplate } from './ListenToWordsTemplate.interface';

export const ListenToWordsTemplate: Template<IListenToWordsTemplate> = ({
  level,
}) => {
  const { track, isPlaying, toggleTrack } = useContext(AudioLevelContext);

  return (
    <LevelLayout {...level}>
      <div className={styles.level}>
        <Picture
          className={styles.image}
          src={level.image}
          alt="Pictures"
        />

        <div className={styles.audio}>
          {level.tracks.map(({
            id,
            title,
            description,
            sound,
          }) => (
            <button
              type="button"
              key={id}
              className={styles.track}
            >
              <div
                className={styles.play}
                onClick={() => toggleTrack({ id, src: sound })}
                tabIndex={0}
                role="button"
              >
                {title}

                <PauseMusicButton
                  isPlaying={id === track?.id && isPlaying}
                  className={styles.icon}
                />
              </div>

              {description}
            </button>
          ))}
        </div>
      </div>
    </LevelLayout>
  );
};
