import React from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';

import styles from './HighlightLetter .module.scss';

type Prop = {
  text: string;
  letter: string;
};

export const HighlightLetter: React.FC<Prop> = ({ text, letter }) => {
  const characters = text.split('');
  const firstLetter = characters.indexOf(letter);

  return (
    <span className={styles.text}>
      {characters.map((char, index) => (
        <span
          key={uuid()}
          className={
            cn(
              styles.text,
              char.toLowerCase() === letter.toLowerCase()
                && index === firstLetter
                ? styles.highlight
                : null,
            )
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
};
