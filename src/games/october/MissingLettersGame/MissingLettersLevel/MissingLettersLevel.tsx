/* eslint-disable max-len */
import React, { useState } from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { IMissingSymbolsTemplate, MissingSymbolsTemplate } from '@templates/MissingSymbolsTemplate';

const initialRounds: IMissingSymbolsTemplate = {
  alternatives: [
    'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й',
    'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч',
    'ш', 'щ', 'ь', 'ю', 'я',
  ],
  alternativesSize: 3,
  rounds: [
    {
      question: 'Аку_а',
      image: 'animals/shark.svg',
      rightAnswer: 'л',
    },
    {
      question: 'Бо_ка',
      image: 'objects/barrel.png',
      rightAnswer: 'ч',
    },
    {
      question: 'Гіт_ра',
      image: 'objects/guitar.png',
      rightAnswer: 'a',
    },
    {
      question: 'Ґ_дзик',
      image: 'objects/button.png',
      rightAnswer: 'у',
    },
    {
      question: 'Д_ері',
      image: 'objects/door.png',
      rightAnswer: 'в',
    },
    {
      question: 'Є_от',
      image: 'animals/racoon.png',
      rightAnswer: 'н',
    },
    {
      question: 'Жира_',
      image: 'animals/giraffe.png',
      rightAnswer: 'ф',
    },
  ],
};

export const MissingLettersLevel: React.FC = () => {
  const [isLevelFinished, setIsLevelFinished] = useState(false);

  const checkIsGameFinished = () => isLevelFinished;
  const onLevelFinished = () => setIsLevelFinished(true);

  return (
    <LevelLayout
      description="Встав пропущену букву"
      errorMessage="Дай відповідь на всі питання"
      audio="task/october/missing-letters-task.m4a"
      checkIsGameFinished={checkIsGameFinished}
    >
      <MissingSymbolsTemplate
        missingSymbolsData={initialRounds}
        onLevelFinish={onLevelFinished}
      />
    </LevelLayout>
  );
};
