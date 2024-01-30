/* eslint-disable max-len */
import React, { useState } from 'react';

import { MissingSymbolsRound } from './MissingSymbolsRound';
import { IMissingSymbolsTemplate } from './MissingSymbolsTemplate.interface';
import { AnimatedPageTransition } from '../../components/animated/AnimatedPageTransition';

type Props = {
  missingSymbolsData: IMissingSymbolsTemplate;
  onLevelFinish: () => void;
};

export const MissingSymbolsTemplate: React.FC<Props> = ({
  missingSymbolsData: {
    rounds,
    alternatives,
    alternativesSize,
  },
  onLevelFinish,
}) => {
  const [currentRoundId, setCurrentRoundId] = useState<number>(0);

  const goNextRound = () => setCurrentRoundId(prevState => prevState + 1);

  const handleRoundFinish = () => {
    if (currentRoundId < rounds.length - 1) {
      goNextRound();
    } else {
      onLevelFinish();
    }
  };

  const currentRound = rounds[currentRoundId];

  return (
    <AnimatedPageTransition pageKey={currentRoundId}>
      <MissingSymbolsRound
        round={{
          ...currentRound,
          alternatives,
          alternativesSize,
        }}
        onFinish={handleRoundFinish}
        withExplosion={currentRoundId === rounds.length - 1}
      />
    </AnimatedPageTransition>
  );
};
