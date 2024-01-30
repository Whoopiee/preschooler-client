import React from 'react';
import cn from 'classnames';
import styles from './AnimatedShine.module.scss';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const AnimatedShine: React.FC<Props> = React.memo(({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {children}
    </div>
  );
});
