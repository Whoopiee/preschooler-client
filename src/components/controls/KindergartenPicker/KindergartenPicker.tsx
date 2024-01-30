import React from 'react';
import { useField, useFormikContext } from 'formik';
import Select, { StylesConfig } from 'react-select';
import cn from 'classnames';

import { INewChildForm } from '@components/NewChildForm';

import { FieldError } from '../FieldError';
import { withField } from '../withField';
import { kindergartens } from './KindergartemPicker.data';

import styles from './KindergartenPicker.module.scss';

type Props = {
  name: string;
  label?: string;
  wrapperClassname?: string;
  errorClassname?: string;
};

export const KindergartenPicker: React.FC<Props> = withField(
  ({ name, label, errorClassname }) => {
    const [, meta, helpers] = useField<INewChildForm['kindergarten']>(name);
    const formik = useFormikContext<INewChildForm>();

    const kindergarten = meta.value;
    const { setValue } = helpers;

    const { isAttending } = formik.values;
    const setIsAttending = (isAttend: boolean) => (
      formik.setFieldValue('isAttending', isAttend)
    );

    const customSelectStyles: StylesConfig<INewChildForm['kindergarten']> = {
      control: (provided) => ({
        ...provided,
        borderRadius: 15,
        borderWidth: 0,
        boxShadow: 'none',
        boxSizing: 'border-box',
        height: 50,
        border: '1px solid rgb(104, 104, 104)',
      }),
      menu: (provided) => ({
        ...provided,
        width: 'fit-content',
        borderRadius: 10,
        overflow: 'hidden',
      }),
      valueContainer: (provided) => ({
        ...provided,
        height: 50,
      }),
      option: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#fcf7f4',
        },
        backgroundColor: state.isSelected
          ? '#ffc9aa !important'
          : 'transperent',
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
      }),
    };

    return (
      <>
        <span>{label}</span>

        <div className={styles.items}>
          <button
            type="button"
            className={cn(
              styles.button,
              {
                [styles.selected]: isAttending,
              },
            )}
            onClick={() => setIsAttending(true)}
          >
            Так
          </button>

          <button
            type="button"
            className={cn(
              styles.button,
              {
                [styles.selected]: !isAttending,
              },
            )}
            onClick={() => {
              setIsAttending(false);
              setValue(null, false);
            }}
          >
            Ні
          </button>

          {isAttending && (
            <Select
              isMulti={false}
              className={styles.select}
              value={kindergarten}
              onChange={(k) => setValue(k)}
              options={kindergartens}
              maxMenuHeight={300}
              noOptionsMessage={() => 'Такого садочка не існує'}
              placeholder={(
                <p className={styles.placeholder}>
                  Номер садочка...
                </p>
              )}
              isSearchable
              formatOptionLabel={(k) => (
                <span className={styles.option}>
                  {k?.name.slice(k?.name.indexOf('№'))}
                </span>
              )}
              getOptionValue={(option) => option?.id.toString() ?? ''}
              filterOption={(option, inputValue) => (
                option.data?.name.toLowerCase().includes(
                  inputValue.toLowerCase(),
                ) ?? false
              )}
              styles={customSelectStyles}
            />
          )}
        </div>

        <FieldError name={name} className={errorClassname} />
      </>
    );
  },
);
