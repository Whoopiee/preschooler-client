import React, { useState, useEffect } from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { ShakeButton } from '@components/buttons/ShakeButton';
import { ActionButton } from '@components/buttons/ActionButton';

import styles from './FeedCatLevel.module.scss';

export const FeedCatLevel: React.FC = () => {
  const [isCatFeeded, setIsCatFeeded] = useState(false);

  const [firstFood, setFirstFood] = useState(false);
  const [secondFood, setSecondFood] = useState(false);

  const handleUnfeed = () => {
    setFirstFood(false);
    setSecondFood(false);
  };

  useEffect(() => {
    if (firstFood || secondFood) {
      setIsCatFeeded(true);

      return;
    }

    setIsCatFeeded(false);
  }, [firstFood, secondFood]);

  return (
    <LevelLayout
      description="Погодуй котика правильною їжею"
      audio="task/january/feed-cat-right.m4a"
      errorMessage="Нагодуй котика правильною їжею"
      checkIsGameFinished={() => isCatFeeded}
    >
      <div className={styles.content}>
        <div className={styles.buttons}>
          <ShakeButton
            className={styles.button}
            onClick={handleUnfeed}
          >
            Солодощі
          </ShakeButton>

          <ActionButton
            title="Відварне м’ясо та риба"
            // actionIcon="elements/success.svg"
            onClick={() => setFirstFood(prev => !prev)}
            isActive={firstFood}
            className={styles.button}
          />

          <ShakeButton
            className={styles.button}
            onClick={handleUnfeed}
          >
            Випічка
          </ShakeButton>

          <ActionButton
            title="Каші"
            // actionIcon="elements/success.svg"
            onClick={() => setSecondFood(prev => !prev)}
            isActive={secondFood}
            className={styles.button}
          />
        </div>

        <div className={styles.imageContainer}>
          <div
            className={styles.image}
            style={{
              backgroundImage: isCatFeeded
                ? `url(${import.meta.env.VITE_FILES_API_URL}/images/animals/happy-cat-800x1000.png)`
                : `url(${import.meta.env.VITE_FILES_API_URL}/images/animals/sad-cat-800x1000.png)`,
            }}
          />
        </div>
      </div>
    </LevelLayout>
  );
};
