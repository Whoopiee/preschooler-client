import React from 'react';
import cn from 'classnames';

import { Picture } from '@components/Picture';
import { AnimatedShine } from '@components/animated/AnimatedShine';
import { AnimatedScaleAndRotate } from '../../animated/AnimatedScaleAndRotate';
import { IQuizCard } from './QuizCard.interface';

import checkmarkRight from '../../../assets/icons/checkmark-right.svg';
import checkmarkWrong from '../../../assets/icons/checkmark-wrong.svg';

import styles from './QuizCard.module.scss';

type Props = {
  image: string;
  onClick: () => void;
  text?: string;
  riddlesText?: string;
  isRight?: boolean;
  isChosen?: boolean;
} & IQuizCard;

export const QuizCard: React.FC<Props> = React.memo(({
  image,
  onClick,
  text = '',
  riddlesText = '',
  isRight = false,
  isChosen = false,
  isStrict = false,
  isRounded = false,
  hasScaleOnHover = false,
  hasImageOnly = false,
  textCentered,
}) => {
  return (
    <div className={styles.card}>
      <button
        type="button"
        className={cn(
          styles.button,
          {
            [styles.checkedFloppy]: !isStrict && isChosen,
            [styles.rounded]: isRounded,
            [styles.hasScaleOnHover]: hasScaleOnHover,
            [styles.hasImageOnly]: hasImageOnly,
          },
        )}
        onClick={onClick}
      >
        <Picture
          src={image}
          className={cn(
            styles.image,
            {
              [styles.rounded]: isRounded,
              [styles.checked]: isStrict && isChosen,
              [styles.hasImageOnly]: hasImageOnly,
            },
          )}
          alt="Card content"
        />

        {riddlesText && (
          <p className={styles.riddlesText}>
            {riddlesText}
          </p>
        )}

        {(isStrict && isChosen) && isRight && (
          <div className={styles.mark}>
            <AnimatedShine>
              <img
                className={styles.checkmark}
                src={checkmarkRight}
                alt="right"
              />
            </AnimatedShine>
          </div>
        )}

        {(isStrict && isChosen) && !isRight && (
          <div className={styles.mark}>
            <AnimatedScaleAndRotate>
              <img
                className={styles.checkmark}
                src={checkmarkWrong}
                alt="wrong"
              />
            </AnimatedScaleAndRotate>
          </div>
        )}
      </button>

      {text && (
        <p className={cn(styles.text, textCentered && styles.textCentered)}>
          {text}
        </p>
      )}
    </div>
  );
});
