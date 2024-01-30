/* eslint-disable max-len */
import React, { useState, useCallback, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { LevelEndExplosion } from '@components/LevelEndExplosion';
import { LevelLayout } from '@core/components/LevelLayout';
import { LevelTask } from '@core/components/LevelTask';
import { resolveImage } from '@helpers/resolver';
import { InsectInfo } from '../InsectInfo';

import styles from './SaveThePlantLevel.module.scss';
import { Insect, isHarmful } from './Insect';
import { insectsInitial } from './SaveThePlantLevel.settings';

// type Stage = Record<1 | 2 | 3, string>; // can come from generic
// type Stages = { [key in keyof Stage]: Stage[key] };

export const SaveThePlantLevel: React.FC = React.memo(() => {
  const [stage, setStage] = useState<number>(0);
  const [insects, setInsects] = useState(insectsInitial);
  const [startExplosion, setStartExplosion] = useState(false);
  // we can create custom hooks for them all
  const bad = useAnimation();
  const normal = useAnimation();
  const good = useAnimation();

  const kill = useCallback((id: string) => {
    if (insects
      .filter(isHarmful)
      .find(insect => insect.id === id)?.isKilled
    ) {
      return;
    }

    const group = insects.find(insect => insect.id === id)?.group;

    setStage(prevState => prevState + 1);
    setInsects(prevState => prevState.map(insect => (
      insect.group === group
        ? { ...insect, isKilled: true }
        : insect
    )));
  }, [stage]);

  const checkIsGameFinished = () => (
    insects
      .filter(isHarmful)
      .every(insect => insect.isKilled)
  );

  useEffect(() => {
    // В начале уровня подгружаются картинки растения чтобы при переходе
    // на них они не грузились с сервера, а уже были в кеше. Иначе изображение
    // будет моргать
    new Image().src = resolveImage('/plants/tomato-normal-850x1250.svg');
    new Image().src = resolveImage('/plants/tomato-normal-850x1250.svg');
  }, []);

  useEffect(() => {
    switch (stage) {
      case 0: {
        bad.start({ opacity: 1 });
        normal.start({ opacity: 0 });
        good.start({ opacity: 0 });
        break;
      }

      case 1: {
        bad.start({ opacity: 0 });
        normal.start({ opacity: 1 });
        good.start({ opacity: 0 });
        break;
      }

      default: {
        bad.start({ opacity: 0 });
        normal.start({ opacity: 0 });
        good.start({ opacity: 1 });
        setStartExplosion(true);
        break;
      }
    }
  }, [stage]);

  return (
    <LevelLayout
      description="Комахи бувають корисні та шкідливі.
      Нижче зображені комахи шкідники"
      audio="task/october/insects.m4a"
      errorMessage="Прибери усіх шкідливих комах"
      checkIsGameFinished={checkIsGameFinished}
    >
      <InsectInfo items={[
        { text: 'Муха', image: 'animals/fly.png' },
        { text: 'Колорадський жук', image: 'animals/colorados.png' },
        { text: 'Тля', image: 'animals/tlya.png' },
        { text: 'Цикада', image: 'animals/cicada-350x350.png' },
      ]}
      />

      <LevelTask
        description="Прибери шкідливих комах, щоб врятувати рослину"
        hasTopMargin
        audio="task/october/save-plant.m4a"
      />
      <div className={styles.container}>

        <div className={styles.square}>
          {[
            { image: '/plants/tomato-bad-850x1250.svg', animate: bad, opacity: 1 },
            { image: '/plants/tomato-normal-850x1250.svg', animate: normal, opacity: 0 },
            { image: '/plants/tomato-good-850x1250.svg', animate: good, opacity: 0 },
          ].map(({ image, animate, opacity }) => (
            <motion.img
              key={image}
              src={resolveImage(image)}
              className={styles.plant}
              initial={{ opacity }}
              animate={animate}
              transition={{ duration: 1.25 }}
            />
          ))}
          <LevelEndExplosion
            isVisible={startExplosion}
            height="120vh"
          />
          {insects.map((insect) => (
            <Insect
              key={insect.id}
              className={insect.className}
              initial={{ rotate: insect.rotate }}
              image={insect.image}
              kill={
                isHarmful(insect)
                  ? () => (kill(insect.id))
                  : undefined
              }
              isKilled={isHarmful(insect) ? insect.isKilled : undefined}
            />
          ))}
        </div>
      </div>
    </LevelLayout>
  );
});
