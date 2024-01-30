/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import _ from 'lodash';
import ConfettiExplosion from 'react-confetti-explosion';

import { PauseMusicButton } from '@components/buttons/PauseMusicButton';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import { Picture } from '@components/Picture';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { CountLevelChoice, ICountLevelRound } from './CountLevelRound.interface';

import styles from './CountLevelRound.module.scss';

const shuffleChoices = (
  rightAnswer: CountLevelChoice['text'],
  choicesCount: number,
): CountLevelChoice[] => {
  const newChoicesText: CountLevelChoice['text'][] = _.sampleSize(
    ['0', '1', '2', '3', '4', '5']
      .filter(choice => choice !== rightAnswer) as CountLevelChoice['text'][],
    choicesCount - 1,
  );

  // shuffle changing css classes
  const newChoicesClasses: CountLevelChoice['class'][]
    = _.shuffle(['1', '2', '3', '4']);

  // create right answer choice
  const rightAnswerChoice: CountLevelChoice = {
    class: newChoicesClasses.pop() || '1',
    text: rightAnswer,
    isRight: true,
  };

  // create all others answers
  const newChoices: CountLevelChoice[] = [
    ...newChoicesText.map((text, i) => ({
      class: newChoicesClasses[i],
      text,
      isRight: false,
    })),
  ];

  // shuffle to make the right one be in random position
  return _.shuffle([...newChoices, rightAnswerChoice]);
};

type Props = {
  round: ICountLevelRound,
  onFinish: () => void;
  withExplosion?: boolean;
  buttonsCount?: number; // just for consistency of logic, don't pass it
};

export const CountLevelRound: React.FC<Props> = ({
  round: {
    rightAnswer,
    image,
    question,
    audio,
  },
  onFinish,
  withExplosion = false,
  buttonsCount = 4,
}) => {
  const [choices, setChoices] = useState<CountLevelChoice[]>(
    () => shuffleChoices(rightAnswer, buttonsCount),
  );

  const [isExplosionVisible, setIsExplosionVisible] = useState(false);

  const { track, isPlaying, toggleTrack } = useContext(AudioLevelContext);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isExplosionVisible) {
      const timeout = setTimeout(() => setIsExplosionVisible(false), 5000);

      return () => clearTimeout(timeout);
    }
  }, [isExplosionVisible]);

  const makeChoice = (isRight: boolean) => {
    if (isRight) {
      onFinish();

      if (withExplosion) {
        setIsExplosionVisible(true);
      }

      return;
    }

    setChoices(() => shuffleChoices(rightAnswer, buttonsCount));
  };

  return (
    <>
      <Picture
        className={styles.image}
        src={image}
        alt="Guess what"
      />

      <div className={styles.title}>
        <p className={styles.question}>
          {question}
        </p>

        <PauseMusicButton
          className={styles.play}
          isPlaying={isPlaying && track?.id === audio}
          onClick={() => toggleTrack({ id: audio, src: audio })}
          width={20}
          height={20}
        />
      </div>

      <div className={styles.buttons}>
        {isExplosionVisible && (
          <ConfettiExplosion
            zIndex={100}
            force={0.8}
            duration={3000}
            particleCount={100}
            width={1600}
          />
        )}

        {choices.map((choice, i) => (
          <PrimaryButton
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={cn(styles.button, styles[`button${choice.class}`])}
            onClick={() => makeChoice(choice.isRight)}
            theme="grey"
            text={choice.text}
          />
        ))}
      </div>
    </>
  );
};
