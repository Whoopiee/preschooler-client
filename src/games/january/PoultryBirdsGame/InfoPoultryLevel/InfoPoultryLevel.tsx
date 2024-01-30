import React from 'react';
import { NewMusicCard } from '@components/cards/NewMusicCard';
import { LevelLayout } from '@core/components/LevelLayout';
import { LevelTask } from '@core/components/LevelTask';
import { cards } from './InfoPoultryLevel.settings';

import styles from './InfoPoultryLevel.module.scss';

export const InfoPoultryLevel: React.FC = () => {
  return (
    <LevelLayout
      description="Свійські птахи - це одомашнені птахи,
      які утримуються з метою одержання м’яса,
      яєць, пір’я і пуху або для краси."
      audio="task/january/poultry-birds.m4a"
    >
      <LevelTask
        description="Які є свійскі птахи"
        hasTopMargin
      />
      <div className={styles.container}>
        {cards.map((
          {
            id,
            audio,
            image,
            title,
          },
        ) => (
          <NewMusicCard
            id={id}
            audio={audio}
            image={image}
            title={title}
          />
        ))}
      </div>
    </LevelLayout>
  );
};
