import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import _ from 'lodash';

import { IQuizChoice } from '@templates/QuizTemplate';
import { LevelLayout } from '@core/components/LevelLayout';
import { QuizCard } from '@components/cards/QuizCard';

import styles from './PersonalHygieneLevel.module.scss';

interface GridPosition {
  row: number;
  column: number;
}

interface GridChoice extends IQuizChoice {
  mobilePosition: GridPosition;
  desktopPosition: GridPosition;
}

const initialChoices: IQuizChoice[] = [
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'objects/teddyBear.svg',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'objects/candyOrange.svg',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'objects/cocktail.svg',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'objects/robot.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/spange.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/bath.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/towel.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/toothBrush.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/soap.svg',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'objects/candyWhite.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/shower.svg',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'objects/soapBottle.svg',
  },
];

const getRandomGridItems = (
  count: number,
  columns: number,
  rows: number,
): GridPosition[] => {
  const allPositions: GridPosition[] = _.range(1, columns).flatMap((column) => (
    _.range(1, rows).map((row) => ({ column, row }))
  ));

  const shuffledPositions = _.shuffle(allPositions);

  return shuffledPositions.slice(0, count);
};

const initializeGridChoices = (): GridChoice[] => {
  const mobilePositions = getRandomGridItems(initialChoices.length, 4, 6);
  const desktopPositions = getRandomGridItems(initialChoices.length, 7, 6);

  return initialChoices.map((choice, index) => ({
    ...choice,
    mobilePosition: mobilePositions[index],
    desktopPosition: desktopPositions[index],
  }));
};

export const PersonalHygieneLevel: React.FC = () => {
  const [choices, setChoices] = useState<GridChoice[]>(() => (
    initializeGridChoices()
  ));

  const makeChoice = (choiceId: string): void => (
    setChoices(prevState => prevState.map(choice => (
      choice.id !== choiceId
        ? choice
        : { ...choice, isChosen: !choice.isChosen }
    )))
  );

  const checkIsGameFinished = (): boolean => {
    return choices
      .filter((choice) => choice.isRight)
      .every((choice) => choice.isChosen);
  };

  const handleClear = () => (
    setChoices(() => initializeGridChoices())
  );

  return (
    <LevelLayout
      description="Обери ті предмети, що допомагають
      тобі підтримувати гігієну"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Обери усі предмети гігієни"
      audio="task/october/human-needs.m4a"
      onClear={handleClear}
    >
      <div className={styles.level}>
        {choices.map(choice => (
          <div
            key={choice.id}
            className={cn(
              styles[`itemColumn${choice.mobilePosition.column}Row${choice.mobilePosition.row}`],
              styles[`itemDesktopColumn${choice.desktopPosition.column}Row${choice.desktopPosition.row}`],
            )}
          >
            <div
              className={styles.card}
            >
              <QuizCard
                image={choice.image}
                onClick={() => makeChoice(choice.id)}
                isChosen={choice.isChosen}
                isRight={choice.isRight}
                isStrict
                hasScaleOnHover
                hasImageOnly
              />
            </div>
          </div>
        ))}
      </div>
    </LevelLayout>
  );
};
