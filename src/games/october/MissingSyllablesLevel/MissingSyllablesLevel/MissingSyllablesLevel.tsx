/* eslint-disable max-len */
import React, { useState } from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { IMissingSymbolsTemplate, MissingSymbolsTemplate } from '@templates/MissingSymbolsTemplate';

const initialRounds: IMissingSymbolsTemplate = {
  alternatives: [
    'ка', 'ко', 'ку', 'ма', 'ме', 'ми', 'на', 'не', 'ни', 'ра',
    'ре', 'ри', 'ла', 'ле', 'ли', 'від', 'нов', 'рад', 'гол', 'мір',
    'тяг', 'пір', 'сон', 'зір', 'дуб', 'лис', 'дим', 'сім', 'гір', 'кіт',
  ],
  alternativesSize: 3,
  rounds: [
    {
      question: 'В__ня',
      image: 'plants/cherry.png',
      rightAnswer: 'иш',
    },
    {
      question: 'Екска___ор',
      image: 'objects/excavator.png',
      rightAnswer: 'ват',
    },
    {
      question: 'П__ац',
      image: 'objects/palace.png',
      rightAnswer: 'ал',
    },
    {
      question: 'Бутерб___',
      image: 'objects/sandwich.png',
      rightAnswer: 'род',
    },
    {
      question: 'Йогу__',
      image: 'objects/yogurt.png',
      rightAnswer: 'рт',
    },
  ],
};

export const MissingSyllablesLevel: React.FC = () => {
  const [isLevelFinished, setIsLevelFinished] = useState(false);

  const checkIsGameFinished = () => isLevelFinished;
  const onLevelFinished = () => setIsLevelFinished(true);

  return (
    <LevelLayout
      description="Встав пропущені склади"
      errorMessage="Дай відповідь на всі питання"
      audio="task/october/missing-syllables-task.m4a"
      checkIsGameFinished={checkIsGameFinished}
    >
      <MissingSymbolsTemplate
        missingSymbolsData={initialRounds}
        onLevelFinish={onLevelFinished}
      />
    </LevelLayout>
  );
};
