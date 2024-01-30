import { useState, useEffect, useContext } from 'react';
import cn from 'classnames';

import { Template } from '@customTypes/Template';

import { LevelLayout } from '@core/components/LevelLayout';
import { PauseMusicButton } from '@components/buttons/PauseMusicButton';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import { Picture } from '@components/Picture';
import { HighlightLetter } from '@components/HighlightLetter';
import { IStartLevelLevel } from './StartLetterLevel.interface';

import styles from './StartLetterLevel.module.scss';

export const StartLetterLevel: Template<IStartLevelLevel> = ({ level }) => {
  const [isLevelFinished, setIsLevelFinished] = useState(false);
  const { track, isPlaying, toggleTrack } = useContext(AudioLevelContext);

  useEffect(() => {
    if (isPlaying) {
      setIsLevelFinished(true);
    }
  }, [isPlaying]);

  const checkIsLevelFinished = () => isLevelFinished;

  return (
    <LevelLayout
      description=""
      errorMessage="Прослухайте літеру"
      checkIsGameFinished={checkIsLevelFinished}
    >
      <div className={styles.bigContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() => toggleTrack({ id: 'letter-audio', src: level.audio })}
        >
          <span className={styles.letterA}>
            {`Літера ${level.letter}`}
          </span>

          <div className={styles.nameContainer}>
            <span className={styles.letterALower}>
              {`звук [${level.sound}]`}
            </span>

            <PauseMusicButton
              isPlaying={isPlaying && track?.id === 'letter-audio'}
              className={styles.pause}
            />
          </div>
        </button>

        <div className={styles.container}>
          <div className={styles.item}>
            <div className={cn(styles.imageContainer, styles.ananas)}>
              <Picture
                src={level.leftBlock.image}
                alt="image"
                className={styles.image}
              />
            </div>
            <HighlightLetter
              text={level.leftBlock.text}
              letter={level.letter}
            />
            {/* <span className={styles.text}>     //old version
              {level.leftBlock.text}
            </span> */}
          </div>

          <div className={cn(styles.item, styles.description)}>
            {level.description.split('\n').map(text => (
              <p key={text}>{text}</p>
            ))}
            <span className={styles.author}>
              {level.author}
            </span>
          </div>

          <div className={styles.item}>
            <div className={styles.imageContainer}>
              <Picture
                src={level.rightBlock.image}
                alt="image"
                className={styles.image}
              />
            </div>

            {/* <span className={styles.text}>    //old version
              {level.rightBlock.text}
            </span> */}

            <HighlightLetter
              text={level.rightBlock.text}
              letter={level.letter}
            />

          </div>
        </div>

      </div>
    </LevelLayout>
  );
};
