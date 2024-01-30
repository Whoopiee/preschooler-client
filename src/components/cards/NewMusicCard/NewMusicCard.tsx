import React from 'react';
import cn from 'classnames';
import { PlayMusicButton } from '@components/buttons/PlayMusicButton';
import { Picture } from '../../Picture';

import styles from './NewMusicCard.module.scss';

interface Props {
  id: string,
  audio: string,
  title: string,
  image?: string,
  hasBackground?: boolean | true;
}

export const NewMusicCard: React.FC<Props> = ({
  id,
  image,
  audio,
  title,
  hasBackground,
}) => {
  return (
    <div className={cn(styles.card, hasBackground && styles.background)}>
      {image && (
        <Picture
          className={styles.image}
          src={image}
          alt="image"
        />
      )}

      <PlayMusicButton
        id={id}
        title={title}
        audio={audio}
        className={styles.button}
      />
    </div>
  );
};
