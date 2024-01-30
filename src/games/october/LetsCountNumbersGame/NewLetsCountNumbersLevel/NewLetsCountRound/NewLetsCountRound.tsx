/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
// import cn from 'classnames';
import { motion } from 'framer-motion';
import _ from 'lodash';
import ConfettiExplosion from 'react-confetti-explosion';

// import { PauseMusicButton } from '@components/buttons/PauseMusicButton';
// import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import { Picture } from '@components/Picture';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { CountLevelChoice, ICountLevelRound } from './NewLetsCountRound.interface';

import styles from './NewLetsCountRound.module.scss';

const bluePencil = `${import.meta.env.VITE_FILES_API_URL}/images/objects/blue-pencil-250x250.png`;
const redPencil = `${import.meta.env.VITE_FILES_API_URL}/images/objects/red-pencil-250x250.png`;

const shuffleChoices = (
  rightAnswer: CountLevelChoice['text'],
  choicesCount: number,
): CountLevelChoice[] => {
  const newChoicesText: CountLevelChoice['text'][] = _.sampleSize(
    ['0', '1', '2', '3', '4', '5']
      .filter(choice => choice !== rightAnswer) as CountLevelChoice['text'][],
    choicesCount - 1,
  );

  // create right answer choice
  const rightAnswerChoice: CountLevelChoice = {
    text: rightAnswer,
    isRight: true,
  };

  // create all others answers
  const newChoices: CountLevelChoice[] = [
    ...newChoicesText.map((text) => ({
      text,
      isRight: false,
    })),
  ];

  // shuffle to make the right one be in random position
  return _.shuffle([...newChoices, rightAnswerChoice]);
};

const shuffleTwoChoices = (choices: CountLevelChoice[]) => {
  const removed: CountLevelChoice = choices.pop()!; // terrible thing - done for linter

  choices.splice(0, 0, removed);

  return choices;
};

type Props = {
  round: ICountLevelRound,
  onFinish: () => void;
  withExplosion?: boolean;
  buttonsCount: number; // just for consistency of logic, don't pass it
};

export const NewLetsCountRound: React.FC<Props> = ({
  round: {
    rightAnswer,
    image,
  },
  onFinish,
  withExplosion = false,
  buttonsCount,
}) => {
  const [choices, setChoices] = useState<CountLevelChoice[]>(
    () => shuffleChoices(rightAnswer, buttonsCount),
  );

  const [isExplosionVisible, setIsExplosionVisible] = useState(false);

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

    setChoices(() => (buttonsCount === 4
      ? shuffleChoices(rightAnswer, buttonsCount)
      : shuffleTwoChoices([...choices])));
  };

  return (
    <div className={styles.round}>
      <Picture
        className={styles.image}
        src={image}
        alt="Guess what"
      />

      {isExplosionVisible && (
        <ConfettiExplosion
          zIndex={100}
          force={0.8}
          duration={3000}
          particleCount={100}
          width={1600}
        />
      )}

      <ul className={styles.buttons}>
        {choices.map((choice) => (
          <motion.li
            className={styles.item}
            key={choice.text}
            layout
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 100,
            }}
          >
            {buttonsCount === 4
              ? (
                <PrimaryButton
                  className={styles.button}
                  theme="grey"
                  text={choice.text}
                  onClick={() => makeChoice(choice.isRight)}
                />
              )
              : (
                <PrimaryButton
                  className={styles.button}
                  theme="grey"
                  onClick={() => makeChoice(choice.isRight)}
                >
                  <img
                    className={styles.icon}
                    src={
                      choice.isRight
                        ? bluePencil
                        : redPencil
                    }
                    alt="pencil"
                  />
                </PrimaryButton>
              )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
