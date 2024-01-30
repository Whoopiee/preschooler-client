import React from 'react';

import { CardsList } from '@components/CardsList';
import { Picture } from '@components/Picture';
import { CardItem } from '@components/cards/CardItem';

import styles from './InsectInfo.module.scss';

type Props = {
  items: { text: string; image: string }[];
};

export const InsectInfo: React.FC<Props> = React.memo(({ items }) => (
  <CardsList>
    {items.map(({ text, image }) => (
      <CardItem key={text} cardsInARow={4}>
        <div className={styles.card}>
          <div className={styles.container}>
            <Picture
              key={image}
              className={styles.insectImage}
              src={image}
            />
          </div>
          <span className={styles.text}>{text}</span>
        </div>
      </CardItem>
    ))}
  </CardsList>
));
