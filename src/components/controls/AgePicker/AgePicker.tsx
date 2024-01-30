import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';

import { INewChildForm } from '@components/NewChildForm/NewChildForm.interface';

import styles from './AgePicker.module.scss';
import { FieldError } from '../FieldError';
import { withField } from '../withField';

type Props = {
  name: string;
  label?: string;
  wrapperClassname?: string;
  errorClassname?: string;
};

export const AgePicker: React.FC<Props> = withField(({
  name,
  label,
  errorClassname,
}) => {
  const [, meta, helpers] = useField<INewChildForm['age']>(name);

  const age = meta.value;
  const { setValue } = helpers;

  return (
    <>
      <p>{label}</p>

      <ul className={styles.items}>
        {[
          { value: 5, text: '5 років' },
          { value: 6, text: '6 років' },
          { value: 7, text: '7 років' },
        ].map(({ value, text }) => (
          <li key={value} className={styles.item}>
            <button
              type="button"
              className={cn(
                styles.button,
                {
                  [styles.selected]: value === age,
                },
              )}
              onClick={() => (
                age === value
                  ? setValue(null, false)
                  : setValue(value)
              )}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>

      <FieldError name={name} className={errorClassname} />
    </>
  );
});
