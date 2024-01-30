import React from 'react';
import cn from 'classnames';
import styles from './CardsList.module.scss';

type Props = {
  children: React.ReactNode;
  maxWidth?: number;
  gap?: number;
  className?: string;
};

export const CardsList: React.FC<Props> = ({
  children, maxWidth, gap, className,
}) => {
  return (
    <ul className={cn(styles.list, className)} style={{ maxWidth, gap }}>
      {children}
    </ul>
  );
};
