/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable max-len */
import React, { useState } from 'react';
import cn from 'classnames';

import { Picture } from '@components/Picture';
import { LevelLayout } from '@core/components/LevelLayout';

import success from '@assets/icons/checkmark-right.svg';
import error from '@assets/icons/checkmark-wrong.svg';

import styles from './LetsCountNumbersLevel.module.scss';

type Level = {
  count: number;
  answers: (number | { img: string; value: number })[];
  correctAnswer: number;
  image: string;
  textUp: string;
  audio?: string;
};

const levels: Level[] = [
  {
    count: 8,
    answers: [9, 6, 8, 5],
    correctAnswer: 8,
    image: 'pics/apples.png',
    textUp: 'Порахуй яблука на картинці',
    audio: 'task/october/lets-count-numbers-apples-task.m4a',
  },
  {
    count: 7,
    answers: [8, 6, 7, 3],
    correctAnswer: 7,
    image: 'pics/fishes.png',
    textUp: 'Скільки зелених рибок',
    audio: 'task/september/lest-count-numbers-fish-task.m4a',
  },
  {
    count: 5,
    answers: [5, 3, 6, 4],
    correctAnswer: 5,
    image: 'pics/house.png',
    textUp: 'Порахуй скільки поверхів у будівлі',
  },
  {
    count: 8,
    answers: [5, 8, 12, 9],
    correctAnswer: 8,
    image: 'pics/osminog.png',
    textUp: 'Скільки кінцівок у восьминога',
  },
  {
    count: 2,
    answers: [
      { img: 'objects/red_pencil.png', value: 1 },
      { img: 'objects/blue_pencil.png', value: 2 },
    ],
    correctAnswer: 2,
    image: 'pics/pencil.png',
    textUp: 'Яких олівців більше?',
  },
];

export const LetsCountNumbersLevel: React.FC = () => {
  const [answer, setAnswer] = useState<number | null>(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [message, setMessage] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleAnswerClick = (answer: number | { img: string; value: number }) => {
    if (typeof answer === 'number') {
      setAnswer(answer);
    } else {
      setAnswer(answer.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentCorrectAnswer = levels[currentLevel].correctAnswer;

    if (answer === currentCorrectAnswer) {
      setMessage('Правильно');
      setResultImage(success);

      if (currentLevel < levels.length - 1) {
        setTimeout(() => {
          setCurrentLevel(currentLevel + 1);
          setAnswer(null);
          setMessage('');
          setResultImage(null);
        }, 1500);
      }
    } else {
      setMessage('Спробуйте ще раз');
      setResultImage(error);
    }
  };

  const currentAnswers = levels[currentLevel].answers;
  const currentImage = levels[currentLevel].image;
  const currentTextUp = levels[currentLevel].textUp;
  const audio = levels[currentLevel]?.audio;

  const checkIsGameFinished = () => {
    const currentCorrectAnswer = levels[currentLevel].correctAnswer;

    if (currentLevel === levels.length - 1 && answer === currentCorrectAnswer) {
      return true;
    }

    return false;
  };

  return (
    <LevelLayout
      description={currentTextUp}
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Дайте правильну відповідь на всі запитання!"
      audio={audio}
    >
      <div className={styles.gameContent}>
        <div className={styles.imageContainer}>
          <Picture src={currentImage} style={{ width: '100%' }} alt="imgLevel" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.answers}>
            {currentAnswers.map((answerOption, index) => (
              <button
                type="submit"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={cn(
                  styles.answerButton,
                )}
                onClick={() => handleAnswerClick(answerOption)}
              >
                {typeof answerOption === 'number' ? answerOption : <Picture src={answerOption.img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="pen" />}
              </button>
            ))}
          </div>
        </form>
      </div>
      <div className={styles.feedbackContainer}>
        {message && (
          <div className={styles.message}>
            <img className={styles.resultImage} src={resultImage!} alt="" />
            <span>{message}</span>
          </div>
        )}
      </div>
    </LevelLayout>
  );
};
