import React from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { infoCards } from './FoodChainInfo.settings';

import styles from './FoodChainInfoLevel.module.scss';

export const FoodChainInfoLevel: React.FC = () => {
  return (
    <LevelLayout
      description="У природі все взаємопов’язане: одні
      організми є їжею для інших.
      Нижче приведені приклади харчових ланцюжків."
      audio="task/january/interconnected-nature.m4a"
    >
      {infoCards.map(({ id, cardImage }) => (
        <div className={styles.container}>
          <Picture
            key={id}
            src={cardImage}
            className={styles.image}
          />
        </div>
      ))}
    </LevelLayout>
  );
};
