import React, { useState } from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';

import { initialWhales } from './CountWhalesLevel.settings';
import styles from './CountWhalesLevel.module.scss';

export const CountWhalesLevel: React.FC = () => {
  const [whales, setWhales] = useState(initialWhales);

  const checkIsGameFinished = () => (
    whales.every(whale => whale.value === whale.right)
  );

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rightId: string,
  ) => {
    setWhales(whales.map(whale => {
      if (whale.right === rightId) {
        return { ...whale, value: e.target.value };
      }

      return whale;
    }));
  };

  const onClear = () => setWhales(whales.map(whale => (
    whale.isEditable
      ? { ...whale, value: '' }
      : whale
  )));

  return (
    <LevelLayout
      description="Введи пропущені значення у поля"
      audio="common-phrases/enter-missing-values.m4a"
      checkIsGameFinished={checkIsGameFinished}
      errorMessage="Трохи невірно, спробуйте ще раз"
      onClear={onClear}
    >
      <div className={styles.container}>
        {whales.map((whale) => (
          <div
            key={whale.right}
            className={styles.card}
          >
            <Picture
              className={styles.image}
              src="animals/whale-150x150.png"
            />

            {whale.isEditable
              ? (
                <input
                  type="text"
                  id={whale.right}
                  className={styles.input}
                  value={whale.value}
                  onChange={(e) => handleValueChange(e, whale.right)}
                  autoComplete="off"
                />
              ) : (
                <span className={styles.label}>{whale.value}</span>
              )}
          </div>
        ))}
      </div>
    </LevelLayout>
  );
};
