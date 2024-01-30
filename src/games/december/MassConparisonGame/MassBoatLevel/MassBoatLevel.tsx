import React, { useState } from 'react';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

import { LevelLayout } from '@core/components/LevelLayout';
import { Warning } from '@components/Warning';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { resolveImage } from '@helpers/resolver';
import { LevelEndExplosion } from '@components/LevelEndExplosion';

import styles from './MassBoatLevel.module.scss';
import { Animal } from './Animal';

const image = 'pics/boat.png';

type AnimalProp = {
  id: string;
  class: string;
  image: string;
  isCorrect: boolean;
};

export const MassBoatLevel: React.FC = () => {
  const animalList: AnimalProp[] = [
    {
      id: uuid(),
      class: cn(styles.buttonImg, styles.buttonImg0),
      image: 'animals/bunny-150x150.png',
      isCorrect: false,
    },
    {
      id: uuid(),
      class: cn(styles.buttonImg, styles.buttonImg1),
      image: 'animals/rat-250x250.png',
      isCorrect: false,
    },
    {
      id: uuid(),
      class: cn(styles.buttonImg, styles.buttonImg2),
      image: 'animals/monkey.png',
      isCorrect: false,
    },
    {
      id: uuid(),
      class: cn(styles.buttonImg, styles.buttonImg3),
      image: 'animals/giraffe-210x300.png',
      isCorrect: true,
    },
  ];

  const [isRemoved, setIsRemoved] = useState(false);

  const deviceWidth = useDeviceWidth();

  if (deviceWidth < 768) {
    return (
      <LevelLayout
        description=""
      >
        <Warning />
      </LevelLayout>
    );
  }

  const handleRemove = () => {
    setIsRemoved(true);
  };

  return (
    <LevelLayout
      errorMessage="Приберіть найважчу тварину"
      description="Човен не може пливти через велику вагу тварин.
      Прибери найважчу, щоб човен поплив"
      audio="task/december/boat-cant.m4a"
      checkIsGameFinished={() => isRemoved}
    >
      <div className={styles.container}>
        <div
          className={styles.back}
          style={{
            backgroundImage: `url(${resolveImage(image)})`,
            backgroundSize: '100%',
            width: '100%',
          }}
        >
          <LevelEndExplosion isVisible={isRemoved} />
          {animalList.map((animal) => (
            <Animal
              key={animal.image}
              handleRemove={handleRemove}
              image={animal.image}
              isRemovable={animal.isCorrect}
              className={cn(styles.buttonImg, animal.class)}
            />
          ))}
        </div>
      </div>
    </LevelLayout>
  );
};
