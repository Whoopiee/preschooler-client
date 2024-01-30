/* eslint-disable max-len */
import React, { useState } from 'react';

import { AnimatedPageTransition } from '@components/animated/AnimatedPageTransition';
import { LevelLayout } from '@core/components/LevelLayout';
import { NewLetsCountRound } from './NewLetsCountRound';
import { ICountLevelRound } from './NewLetsCountRound/NewLetsCountRound.interface';
// import { ICountLevelRound } from './CountLevelRound/CountLevelRound.interface';

const initialRounds: ICountLevelRound[] = [
  {
    question: 'Порахуй яблука на картинці',
    rightAnswer: '8',
    image: 'pics/apples.png',
    audio: 'task/october/lets-count-numbers-apples-task.m4a',
  },
  {
    question: 'Скільки зелених рибок?',
    rightAnswer: '7',
    image: 'pics/fishes.png',
    audio: 'task/october/lets-count-numbers-fish-task.m4a',
  },
  {
    question: 'Порахуй скільки поверхів у будівлі',
    rightAnswer: '5',
    image: 'pics/house.png',
    audio: 'task/october/lets-count-numbers-house-task.m4a',
  },
  {
    question: 'Скільки кінцівок у восьминога?',
    rightAnswer: '8',
    image: 'pics/osminog.png',
    audio: 'task/october/lets-count-numbers-octupus-task.m4a',
  },
  {
    question: 'Яких олівців більше?',
    rightAnswer: '2',
    image: 'pics/pencil.png',
    audio: 'task/october/lets-count-numbers-pencils-task.m4a',
  },
];

export const NewLetsCountLevel: React.FC = () => {
  const [currentRoundId, setCurrentRoundId] = useState<number>(0);
  const [isLevelFinished, setIsLevelFinished] = useState(false);

  const goNextRound = () => setCurrentRoundId(prevState => prevState + 1);

  const handleRoundFinish = () => {
    if (currentRoundId < initialRounds.length - 1) {
      goNextRound();
    } else {
      setIsLevelFinished(true);
    }
  };

  const checkIsGameFinished = () => isLevelFinished;

  const currentRound = initialRounds[currentRoundId];

  return (
    <LevelLayout
      description={currentRound.question}
      audio={currentRound.audio}
      errorMessage="Дай відповідь на всі питання"
      checkIsGameFinished={checkIsGameFinished}
    >
      <AnimatedPageTransition pageKey={currentRoundId}>
        <NewLetsCountRound
          round={currentRound}
          onFinish={handleRoundFinish}
          withExplosion={currentRoundId === initialRounds.length - 1}
          buttonsCount={
            currentRoundId === initialRounds.length - 1
              ? 2
              : 4
          }
        />
      </AnimatedPageTransition>
    </LevelLayout>
  );
};
