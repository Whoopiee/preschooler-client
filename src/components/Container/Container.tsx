import React from 'react';
import cn from 'classnames';

import styles from './Container.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
};
