import React from 'react';
import cn from 'classnames';
import { resolveImage } from '@helpers/resolver';

import styles from './ActionButton.module.scss';

interface Prop {
  // actionIcon?: string;
  title: string;
  className?: string;
  onClick: () => void;
  isActive?: boolean;
  // activeClassName?: string;
}

export const ActionButton: React.FC<Prop> = (
  {
    // actionIcon,
    title,
    className,
    // activeClassName,
    onClick,
    isActive,
  },
) => {
  return (
    <button
      type="button"
      onClick={() => {
        onClick();
      }}
      className={cn(styles.button, className, isActive && styles.active)}
      style={{ backgroundImage: isActive ? `url(${resolveImage('elements/white-heart-background.png')}` : '' }}
    >
      <p className={styles.text}>
        {title}
      </p>
    </button>
  );
};
