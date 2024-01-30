import React, { useState } from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { LevelTask } from '@core/components/LevelTask';
import { PlayMusicButton } from '@components/buttons/PlayMusicButton';
import { cards } from './AnthemLevel.settings';

import styles from './AnthemLevel.module.scss';
import { AnthemCard } from './AnthemCard';

export const AnthemLevel: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const checkIsGameFinished = () => {
    if (activeButton) {
      return cards[activeButton].isRight === true;
    }

    return false;
  };

  return (
    <LevelLayout
      description="Гімн - це урочиста пісня, символ держави.
      Прослухайте фрагмент Гімну України"
      audio="task/january/anthem-is.m4a"
      errorMessage="Обери правильний фрагмент гімну"
      checkIsGameFinished={checkIsGameFinished}
    >
      <div className={styles.anthemMainWrapper}>
        <Picture
          src="objects/anthem-main.png"
          className={styles.image}
        />
        <PlayMusicButton
          id="main"
          audio="music/anthem-Ukraine.mp3"
          wrapperClass={styles.mainButton}
          className={styles.button}
          imageClass={styles.imageButton}
          iconClass={styles.iconButton}
        />
      </div>

      <LevelTask
        description="Обери з фрагментів гімн України"
        hasTopMargin
        audio="task/january/pick-anthem-fragment.m4a"
      />
      <div
        className={styles.container}
      >
        {cards.map(({ id, sound, title }, index) => (
          <AnthemCard
            key={id}
            id={id}
            audio={sound}
            title={title}
            onClick={() => setActiveButton(index)}
            isActive={activeButton === index}
          />
        ))}
      </div>
    </LevelLayout>
  );
};
