import React, { useState, useEffect } from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { WaveButton } from '@components/buttons/WaveButton';
import { ShakeButton } from '@components/buttons/ShakeButton';

import styles from './WaterPlantLevel.module.scss';

export const WaterPlantLevel: React.FC = () => {
  const [isPlantWatered, setIsPlantWatered] = useState(false);

  const [faucetWater, setFaucetWater] = useState(false);
  const [rainWanter, setRainWater] = useState(false);

  useEffect(() => {
    if (faucetWater || rainWanter) {
      setIsPlantWatered(true);

      return;
    }

    setIsPlantWatered(false);
  }, [faucetWater, rainWanter]);

  const handleUnwatering = () => {
    setFaucetWater(false);
    setRainWater(false);
  };

  const desctiption = `У рослин немає ротиків. Вони корінцями висмоткують із землі воду.
  Так і живляться. Чим більше вип’ють води, тим соковитіші їхні плоди, яскравіші квіти та листя.
  Обери чим краще полити рослину!`;

  return (
    <LevelLayout
      checkIsGameFinished={() => isPlantWatered}
      errorMessage="Полий рослинку"
      description={desctiption}
      audio="task/october/water-plant-task.m4a"
    >
      <div className={styles.content}>
        <div className={styles.buttons}>
          <WaveButton
            text="Вода з під крану"
            className={styles.button}
            isWaved={faucetWater}
            isBubblesRight={false}
            onClick={() => setFaucetWater(prevState => !prevState)}
          />

          <ShakeButton
            className={styles.button}
            onClick={handleUnwatering}
          >
            Кава, чай
          </ShakeButton>

          <WaveButton
            text="Дощова вода"
            className={styles.button}
            isWaved={rainWanter}
            onClick={() => setRainWater(prevState => !prevState)}
          />

          <ShakeButton
            className={styles.button}
            onClick={handleUnwatering}
          >
            Компот
          </ShakeButton>
        </div>

        <div className={styles.imageContainer}>
          <div
            className={styles.image}
            style={{
              backgroundImage: isPlantWatered
                ? `url(${import.meta.env.VITE_FILES_API_URL}/images/plants/plant-watered.png)`
                : `url(${import.meta.env.VITE_FILES_API_URL}/images/plants/plant.png)`,
            }}
          />
        </div>
      </div>

    </LevelLayout>
  );
};
