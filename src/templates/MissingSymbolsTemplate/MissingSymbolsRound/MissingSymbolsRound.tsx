import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';

import { Picture } from '@components/Picture';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { IMissingSymbolsRound } from '../MissingSymbolsTemplate.interface';

import styles from './MissingSymbolsRound.module.scss';

type Choice = {
  id: number;
  value: string;
};

const shuffleChoices = (
  round: IMissingSymbolsRound,
  prevChoices?: Choice[],
): Choice[] => {
  const { rightAnswer, alternatives, alternativesSize } = round;

  const wrongChoices = _.sampleSize(
    alternatives.filter(alt => alt !== rightAnswer),
    alternativesSize - 1,
  );

  // for initialize
  if (!prevChoices) {
    return _.shuffle([...wrongChoices, rightAnswer])
      .map((value, i) => ({ id: i, value }));
  }

  return _.shuffle(
    [...wrongChoices, rightAnswer]
      .map((value, i) => ({ id: prevChoices[i].id, value })),
  );
};

type Props = {
  round: IMissingSymbolsRound;
  onFinish: () => void;
  withExplosion?: boolean;
};

export const MissingSymbolsRound: React.FC<Props> = ({
  round,
  onFinish,
  withExplosion = false,
}) => {
  const [choices, setChoices] = useState<Choice[]>(
    () => shuffleChoices(round),
  );
  const [isExplosionVisible, setIsExplosionVisible] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isExplosionVisible) {
      const timeout = setTimeout(() => setIsExplosionVisible(false), 5000);

      return () => clearTimeout(timeout);
    }
  }, [isExplosionVisible]);

  const makeChoice = (choice: string) => {
    if (round.rightAnswer === choice) {
      onFinish();

      if (withExplosion) {
        setIsExplosionVisible(true);
      }

      return;
    }

    setChoices(() => shuffleChoices(round, choices));
  };

  return (
    <div className={styles.round}>
      <div className={styles.guess}>
        <Picture
          className={styles.image}
          src={round.image}
          alt="Guess who"
        />

        <p className={styles.word}>
          {round.question}
        </p>
      </div>

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
        {choices.map(({ id, value }) => (
          <motion.li
            className={styles.item}
            key={id}
            layout
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 100,
            }}
          >
            <PrimaryButton
              className={styles.button}
              theme="grey"
              text={value}
              onClick={() => makeChoice(value)}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
