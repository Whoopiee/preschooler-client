import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import _ from 'lodash';

import { IQuizChoice } from '@templates/QuizTemplate';
import { LevelLayout } from '@core/components/LevelLayout';
import { QuizCard } from '@components/cards/QuizCard';

import styles from './ChooseAnAnimalLevelLevel.module.scss';

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
    image: 'animals/horse230x230.png',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'animals/bunny230x230.png',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'animals/dog230x230.png',
  },
  {
    id: uuid(),
    isRight: false,
    isChosen: false,
    image: 'animals/cat230x230.png',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'animals/camel230x230.png',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'animals/ostrich230x230.png',
  },
  {
    id: uuid(),
    isRight: true,
    isChosen: false,
    image: 'animals/parrot230x230.png',
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

export const ChooseAnAnimalLevel: React.FC = () => {
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
      description="Обери свійських тварин, не типових для нашої місцевості"
      audio="task/december/pick-animals.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Обери усіх тварин"
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
