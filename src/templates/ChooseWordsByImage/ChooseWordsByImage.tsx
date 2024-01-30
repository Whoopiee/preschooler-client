import { useCallback, useState, useContext } from 'react';
import cn from 'classnames';

import { Picture } from '@components/Picture';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { PauseMusicButton } from '@components/buttons/PauseMusicButton';
import { Template } from '@customTypes/Template';
import { LevelLayout } from '@core/components/LevelLayout';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';

import {
  IChooseWordsByImage,
  WordChoice,
} from './ChooseWordsByImage.interface';
import styles from './ChooseWordsByImage.module.scss';

export const ChooseWordsByImage: Template<IChooseWordsByImage> = ({
  level,
}) => {
  const [choices, setChoices] = useState<WordChoice[]>(level.initialChoices);
  const { track, isPlaying, toggleTrack } = useContext(AudioLevelContext);

  const checkIsGameFinished = (): boolean => {
    if (!level.isStrict) {
      return true;
    }

    return choices
      .filter((choice) => choice.isRight)
      .every((choice) => choice.isChosen);
  };

  const toggleChoice = useCallback((id: string) => {
    setChoices(prevState => prevState.map(choice => (
      choice.id === id
        ? { ...choice, isChosen: !choice.isChosen }
        : choice
    )));
  }, []);

  return (
    <LevelLayout
      {...level}
      checkIsGameFinished={checkIsGameFinished}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Picture
              src={level.image}
              className={styles.image}
              alt="Find items here"
            />

            <PrimaryButton
              onClick={() => (
                toggleTrack({
                  id: level.imageAudio,
                  src: level.imageAudio,
                })
              )}
              className={styles.button}
              theme="orange"
            >
              {level.imageText}

              <PauseMusicButton
                className={styles.play}
                isPlaying={isPlaying && track?.id === level.imageAudio}
                width={20}
                height={20}
              />
            </PrimaryButton>
          </div>

          <div className={styles.right}>
            <div className={styles.buttons}>
              {choices.map(choice => (
                <PrimaryButton
                  onClick={() => toggleChoice(choice.id)}
                  className={cn(
                    styles.button,
                    {
                      [styles.success]: choice.isChosen && choice.isRight,
                    },
                  )}
                  theme="grey"
                >
                  {choice.text}
                </PrimaryButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LevelLayout>
  );
};
