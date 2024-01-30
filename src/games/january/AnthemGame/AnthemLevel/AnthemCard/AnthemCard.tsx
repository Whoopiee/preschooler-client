import React from 'react';
import cn from 'classnames';
import { PlayMusicButton } from '@components/buttons/PlayMusicButton';

import styles from './AnthemCard.module.scss';

type Prop = {
  id: string;
  title?: string;
  audio: string;
  isActive: boolean;
  onClick: () => void;
};

export const AnthemCard: React.FC<Prop> = ({
  id,
  title,
  audio,
  isActive,
  onClick,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={cn(styles.card, isActive && styles.active)}
      type="button"
      onClick={handleClick}
    >
      <div className={styles.imageDiv}>
        <PlayMusicButton
          id={id}
          audio={audio}
          wrapperClass={styles.mainButton}
          className={styles.button}
          imageClass={styles.imageButton}
          iconClass={styles.iconButton}
        />
      </div>
      <div className={styles.textDiv}>
        <p>{title}</p>
      </div>
    </button>
  );
};
