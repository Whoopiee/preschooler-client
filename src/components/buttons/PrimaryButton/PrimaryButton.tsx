import React from 'react';
import cn from 'classnames';

import styles from './PrimaryButton.module.scss';

type Props = {
  children?: React.ReactNode;
  text?: string;
  icon?: string;
  theme?: 'orange' | 'grey' | 'blue' | 'white';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton: React.FC<Props> = React.memo(({
  children,
  text,
  icon,
  theme = 'orange',
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={
        cn(
          styles.button,
          className,
          {
            [styles.orange]: theme === 'orange',
            [styles.grey]: theme === 'grey',
            [styles.blue]: theme === 'blue',
            [styles.white]: theme === 'white',
          },
        )
      }
      {...props}
    >
      {text}

      {children}

      {icon && (
        <img
          className={cn(
            styles.icon,
            {
              [styles.withText]: text,
            },
          )}
          src={icon}
          alt={text}
        />
      )}
    </button>
  );
});
