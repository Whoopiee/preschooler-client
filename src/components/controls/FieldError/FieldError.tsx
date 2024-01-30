import React from 'react';
import { ErrorMessage } from 'formik';
import cn from 'classnames';

import styles from './FieldError.module.scss';

type Props = {
  name: string;
  className?: string;
};

export const FieldError: React.FC<Props> = ({ name, className }) => {
  return (
    <small className={cn(styles.error, className)}>
      <ErrorMessage name={name} />
    </small>
  );
};
