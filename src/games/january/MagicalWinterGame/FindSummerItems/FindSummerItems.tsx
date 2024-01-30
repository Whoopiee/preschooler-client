import React, { useState } from 'react';
import cn from 'classnames';
import { LevelEndExplosion } from '@components/LevelEndExplosion';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';
// import { resolveImage } from '@helpers/resolver';

import styles from './FindSummerItems.module.scss';

export const summerItems = [
  {
    image: 'objects/slippers-140x138.png',
    class: cn(styles.buttonImg, styles.buttonImg0),
  },
  {
    image: 'objects/lifebuoy-125x140.png',
    class: cn(styles.buttonImg, styles.buttonImg1),
  },
  {
    image: 'objects/lounder-314x254.png',
    class: cn(styles.buttonImg, styles.buttonImg2),
  },
  {
    image: 'objects/rainbow-436x215.png',
    class: cn(styles.buttonImg, styles.buttonImg3),
  },
];

export const FindSummerItems: React.FC = () => {
  const width = useDeviceWidth();

  const [buttonClicked, setButtonClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [testFinished, setTestFinished] = useState(false);

  const handleButtonClick = (index: number) => {
    const updatedButtonClicked = [...buttonClicked];

    updatedButtonClicked[index] = true;
    setButtonClicked(updatedButtonClicked);

    if (updatedButtonClicked.every((clicked) => clicked)) {
      setTestFinished(true);
    }
  };

  const checkIsGameFinished = () => { // rework logic
    if (testFinished) {
      return true;
    }

    return false;
  };

  if (width < 768) {
    return (
      <LevelLayout
        description=""
      >
        <Warning />
      </LevelLayout>
    );
  }

  return (
    <LevelLayout
      description="Знайди зайві предмети на картинці"
      errorMessage="Знайди всі зайві елементи на картинці!"
      audio="task/january/find-unnecessary-items.m4a"
      checkIsGameFinished={checkIsGameFinished}
    >
      {/* <div
        className={styles.container}
        style={{
          backgroundImage: `url(${resolveImage('objects/winter-background-1978x1109.png')})`,
        }}
      > */}
      <div className={styles.container}>
        <Picture
          src="objects/winter-background-1978x1109.png"
          alt="backgroundImage"
          className={styles.image}
        />
        <LevelEndExplosion
          isVisible={testFinished}
        />
        {!testFinished
          && summerItems.map((item, index) => {
            if (!buttonClicked[index]) {
              return (
                <button
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  type="button"
                  onClick={() => handleButtonClick(index)}
                  className={item.class}
                >
                  <Picture
                    src={item.image}
                    alt={`Предмет ${index}`}
                  />
                </button>
              );
            }

            return null;
          })}
      </div>
      {/* </div> */}
    </LevelLayout>
  );
};
