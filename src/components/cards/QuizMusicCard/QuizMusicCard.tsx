import React from 'react';

import styles from './QuizMusicCard.module.scss';

import checkmarkRight from '../../../assets/icons/checkmark-right.svg';
import checkmarkWrong from '../../../assets/icons/checkmark-wrong.svg';

import { MusicCard } from '../MusicCard';
import { IQuizMusicCard } from './QuizMusicCard.interface';
import { AnimatedShine } from '../../animated/AnimatedShine';
import { AnimatedScaleAndRotate } from '../../animated/AnimatedScaleAndRotate';

interface Props {
  onClick: () => void,
  isPlaying: boolean,
  answer: IQuizMusicCard;
  giveAnswer: (id: string, index: number) => void;
  progress?: number;
}

export const QuizMusicCard: React.FC<Props> = ({
  onClick,
  isPlaying,
  answer: {
    id,
    image,
    audio,
    choices,
    riddlesText,
  },
  giveAnswer,
  progress,
}) => {
  const isRight = () => choices.some((choice) => (
    choice.isChosen && choice.isRight
  ));

  return (
    <>
      <MusicCard
        music={{
          id,
          sound: audio,
          image: isRight() ? image : '',
          riddlesText,
        }}
        onClick={onClick}
        isPlaying={isPlaying}
        progress={progress}
      />

      {choices.map((choice, index) => (
        <button
          key={choice.text}
          type="button"
          className={styles.button}
          onClick={() => giveAnswer(id, index)}
        >
          {choice.isRight && choice.isChosen && (
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

          {!choice.isRight && choice.isChosen && (
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

          {choice.text}
        </button>
      ))}
    </>
  );
};
