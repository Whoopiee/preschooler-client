/* eslint-disable max-len */
import React, { useState } from 'react';
import cn from 'classnames';

import { LevelEndExplosion } from '@components/LevelEndExplosion';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { resolveImage } from '@helpers/resolver';
import { Warning } from '@components/Warning';
import { useDeviceWidth } from '@hooks/useDeviceWidth';

import styles from './Sculpture.module.scss';

export const SculptureLevel: React.FC = () => {
  const sculptureImgs = [
    {
      imgUrl: 'pics/sculpture0.png',
      class: cn(styles.buttonImg, styles.buttonImg0),
      imgSculpture: 'objects/sculptureItem.png',
      isCorrect: true,
    },
    {
      imgUrl: 'pics/sculpture1.png',
      class: cn(styles.buttonImg, styles.buttonImg1),
      imgSculpture: 'objects/sculptureItem0.png',
      isCorrect: true,
    },
    {
      imgUrl: 'pics/sculpture2.png',
      class: cn(styles.buttonImg, styles.buttonImg2),
      imgSculpture: 'objects/sculptureItem1.png',
      isCorrect: true,
    },
    {
      imgUrl: 'pics/sculpture3.png',
      class: cn(styles.buttonImg, styles.buttonImg3),
      imgSculpture: 'objects/sculptureItem2.png',
      isCorrect: true,
    },
  ];

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

  const width = useDeviceWidth();

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
      errorMessage="Знайдіть усі скульптури"
      description="Скульптура - один з видів мистецтва, який відтворює навколишній світ за
      допомогою об’ємної форми. Ось які бувають скульптури"
      audio="task/october/sculpture.m4a"
      checkIsGameFinished={checkIsGameFinished} // change
    >
      <div className={styles.container}>
        <div className={styles.img_block}>
          {sculptureImgs.map((e) => (
            <Picture
              src={e.imgUrl}
              className={styles.sculptureImg}
              alt="Sculpture"
            />
          ))}
        </div>

        <div className={styles.container_content}>
          <p>Знайти скульптури в кімнаті</p>
          <div
            className={styles.back}
            style={{
              backgroundImage: `url(${resolveImage('pics/room.png')})`,
              backgroundSize: '100%',
              width: '100%',
            }}
          >
            <LevelEndExplosion
              isVisible={testFinished}
            />
            {!testFinished
              && sculptureImgs.map((sculpture, index) => {
                if (!buttonClicked[index]) {
                  return (
                    <button
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      type="button"
                      onClick={() => handleButtonClick(index)}
                      className={sculpture.class}
                    >
                      <Picture
                        src={sculpture.imgSculpture}
                        alt={`Скульптура ${index}`}
                      />
                    </button>
                  );
                }

                return null;
              })}
          </div>
        </div>
      </div>

    </LevelLayout>
  );
};
