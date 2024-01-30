import { FC } from 'react';
import cn from 'classnames';
import styles from './withField.module.scss';

export const withField = <T extends { wrapperClassname?: string }>(
  WrappedComponent: FC<T>,
): FC<T> => ({ ...props }) => (
  <div className={cn(styles.field, props.wrapperClassname)}>
    <WrappedComponent {...props} />
  </div>
);
