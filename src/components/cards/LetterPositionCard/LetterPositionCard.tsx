import React from 'react';
import cn from 'classnames';

import { Picture } from '@components/Picture';
import { ILetterPositionCard } from './LetterPositionCard.interface';

import checkmarkRight from '../../../assets/icons/checkmark-right.svg';
import checkmarkWrong from '../../../assets/icons/checkmark-wrong.svg';

import styles from './LetterPositionCard.module.scss';

type Props = {
  answer: ILetterPositionCard;
  giveAnswer: (id: string, index: number) => void;
};

export const LetterPositionCard: React.FC<Props> = ({
  answer,
  giveAnswer,
}) => {
  const isRight = () => answer.rightAnswerMask.some((right, i) => (
    right && answer.isAnswered[i]
  ));

  return (
    <div className={styles.positionCard}>
      <div className={cn(
        styles.card,
        {
          [styles.checkedFloppy]: isRight(),
        },
      )}
      >
        <Picture
          className={styles.image}
          src={answer.image}
          alt="Guess the position of letter"
        />
      </div>

      <ul className={styles.buttonsList}>
        {answer.isAnswered.map((_, i) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={styles.item}
          >
            <button
              type="button"
              className={styles.button}
              onClick={() => giveAnswer(answer.id, i)}
            >
              {answer.isAnswered[i] && answer.rightAnswerMask[i] && (
                <img
                  className={styles.checkmark}
                  src={checkmarkRight}
                  alt="right"
                />
              )}

              {answer.isAnswered[i] && !answer.rightAnswerMask[i] && (
                <img
                  className={styles.checkmark}
                  src={checkmarkWrong}
                  alt="right"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
