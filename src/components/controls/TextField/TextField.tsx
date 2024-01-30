import React, { useId } from 'react';
import cn from 'classnames';
import { Field } from 'formik';

import styles from './TextField.module.scss';
import { withField } from '../withField';
import { FieldError } from '../FieldError';

type Props = {
  name: string;
  className?: string;
  label?: string;
  wrapperClassname?: string;
  errorClassname?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField: React.FC<Props> = withField(
  ({
    name,
    className,
    errorClassname,
    label,
    ...props
  }) => {
    const controlId = useId();

    return (
      <>
        <label htmlFor={controlId}>{label}</label>

        <Field
          id={controlId}
          name={name}
          className={cn(styles.control, className)}
          {...props}
        />

        <FieldError
          name={name}
          className={errorClassname}
        />
      </>
    );
  },
);
