import React from 'react';
import { Formik, Form } from 'formik';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useDidUpdateEffect } from '@hooks/useDidUpdateEffect';
import { toast } from 'react-toastify';

import { TextField } from '@components/controls/TextField';
import { AgePicker } from '@components/controls/AgePicker';
import { KindergartenPicker } from '@components/controls/KindergartenPicker';
import { ImageField } from '@components/controls/ImageField';
import { LoadingButton } from '@components/buttons/LoadingButton';
import { CloseButton } from '@components/buttons/CloseButton';
import { createChild, uploadPhoto } from '../../redux/features/childSlice';

import { newChildSchema } from './NewChildForm.validation';
import styles from './NewChildForm.module.scss';
import { INewChildForm } from './NewChildForm.interface';

export const NewChildForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user);
  const { loading, error } = useAppSelector(state => state.child);

  const initialValues: INewChildForm = {
    firstName: '',
    lastName: '',
    age: null,
    isAttending: true,
    kindergarten: null,
    photo: null,
    parentId: user.id,
    sexId: 1,
  };

  useDidUpdateEffect(() => {
    if (error && !loading) {
      toast.error(error, { toastId: error, position: 'top-right' });
    }
  }, [error, loading]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newChildSchema}
      onSubmit={(values) => {
        if (values.photo) {
          const formData = new FormData();

          formData.append('', values.photo);
          dispatch(uploadPhoto(formData)).then((item) => {
            dispatch(createChild({ ...values, photo: `${import.meta.env.VITE_API_URL}/${item.payload.url}` })).then(item2 => {
              if (item2.meta.requestStatus === 'fulfilled') {
                navigate('/');
              }
            });
          });
        } else {
          dispatch(createChild(values)).then(item2 => {
            if (item2.meta.requestStatus === 'fulfilled') {
              navigate('/');
            }
          });
        }
      }}
    >
      <Form
        className={styles.form}
        noValidate
      >
        <CloseButton
          className={styles.closeButton}
          navigateTo="/"
        />
        <TextField
          type="text"
          name="firstName"
          placeholder="Введіть ім'я..."
          label="Ім'я"
          className={styles.textField}
          wrapperClassname={styles.field}
          errorClassname={styles.error}
        />

        <TextField
          type="text"
          name="lastName"
          placeholder="Введіть прізвище..."
          label="Прізвище"
          className={styles.textField}
          wrapperClassname={styles.field}
          errorClassname={styles.error}
        />

        <AgePicker
          name="age"
          label="Повних років"
          wrapperClassname={styles.field}
          errorClassname={styles.error}
        />

        <KindergartenPicker
          name="kindergarten"
          label="Чи відвідує дитина дошкільний заклад?"
          wrapperClassname={styles.field}
          errorClassname={styles.error}
        />

        <ImageField
          name="photo"
          label="Фото (за бажанням)"
          wrapperClassname={styles.field}
          errorClassname={styles.error}
        />

        <LoadingButton
          type="submit"
          theme="blue"
          className={styles.button}
          isLoading={loading}
          disabled={loading}
        >
          Додати дитину
        </LoadingButton>
      </Form>
    </Formik>
  );
};
