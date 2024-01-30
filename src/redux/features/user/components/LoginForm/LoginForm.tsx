import React from 'react';
import { Formik, Form } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { login } from '@redux/features/user/userSlice';
import { TextField } from '@components/controls/TextField';
import { LoadingButton } from '@components/buttons/LoadingButton';
import { useDidUpdateEffect } from '@hooks/useDidUpdateEffect';

import { loginSchema } from './LoginForm.validation';
import { ILoginForm } from './LoginForm.interface';
import styles from './LoginForm.module.scss';

const initialValues: ILoginForm = {
  email: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useAppSelector(state => state.user);

  const handleSubmit = async (data: ILoginForm) => {
    dispach(login(data))
      .then((item) => {
        if (item.meta.requestStatus === 'fulfilled') {
          navigate(location.state?.from?.pathname || '/');
        }
      });
  };

  useDidUpdateEffect(() => {
    if (error && !loading) {
      toast.error(error, { toastId: error, position: 'top-right' });
    }
  }, [error, loading]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form
        className={styles.form}
        noValidate
      >
        <TextField
          type="email"
          name="email"
          placeholder="Введіть e-mail..."
        />

        <TextField
          type="password"
          name="password"
          placeholder="Введіть пароль..."
        />

        <LoadingButton
          type="submit"
          theme="blue"
          className={styles.button}
          isLoading={loading}
          disabled={loading}
        >
          Увійти
        </LoadingButton>
      </Form>
    </Formik>
  );
};
