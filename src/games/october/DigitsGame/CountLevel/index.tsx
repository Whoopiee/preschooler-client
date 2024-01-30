import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { LevelLayout } from '@core/components/LevelLayout';
import { CountLevelRound } from './CountLevelRound';
import { ICountLevelRound } from './CountLevelRound/CountLevelRound.interface';

const initialRounds: ICountLevelRound[] = [
  {
    question: 'Скільки кутів у зірки?',
    rightAnswer: '5',
    image: 'objects/star.png',
    audio: 'task/october/star-count.m4a',
  },
  {
    question: 'Скільки лапок у кішки?',
    rightAnswer: '4',
    image: 'objects/cat.png',
    audio: 'task/october/cat-count.m4a',
  },
  {
    question: 'Скільки крил у ластівки?',
    rightAnswer: '2',
    image: 'objects/bird.png',
    audio: 'task/october/swall-count.m4a',
  },
  {
    question: 'Скільки зубців у тризуба?',
    rightAnswer: '3',
    image: 'objects/trident.png',
    audio: 'task/october/trident-count.m4a',
  },
];

export const CountLevel: React.FC = () => {
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
      description="Порахуй"
      errorMessage="Дай відповідь на всі питання"
      audio="task/october/count-task.m4a"
      checkIsGameFinished={checkIsGameFinished}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoundId}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CountLevelRound
            round={currentRound}
            onFinish={handleRoundFinish}
            withExplosion={currentRoundId === initialRounds.length - 1}
          />
        </motion.div>
      </AnimatePresence>
    </LevelLayout>
  );
};
