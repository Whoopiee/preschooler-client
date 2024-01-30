import React from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import cn from 'classnames';

import closeImage from '@assets/icons/close.svg';

import styles from './CloseButton.module.scss';

type Props = {
  className?: string;
  navigateTo: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const CloseButton: React.FC<Props> = ({ className, navigateTo }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Link to={navigateTo}>
        <button
          type="button"
        >
          <SVG
            className={styles.icon}
            src={closeImage}
          />
        </button>
      </Link>
    </div>
  );
};
