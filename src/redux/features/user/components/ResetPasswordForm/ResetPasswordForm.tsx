import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import { TextField } from '@components/controls/TextField';
import { LoadingButton } from '@components/buttons/LoadingButton';
import { authService } from '@services/authService';

import styles from '../LoginForm/LoginForm.module.scss';
import { resetPasswrodSchema } from './ResetPasswordForm.validation';

export const ResetPasswordForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ text: '', color: '' });

  const handleSubmit = async ({ email }: { email: string }) => {
    setIsLoading(true);

    authService.resetPassword(email)
      .then(() => setStatus({
        text: 'Перевірте пошту. Вам прийшов новий пароль на пошту',
        color: 'green',
      }))
      .catch(() => setStatus({
        text: 'Не вдалось відновити пароль, спробуйте пізніше',
        color: '#e73434',
      }))
      .finally(() => setIsLoading(false));
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={resetPasswrodSchema}
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

        <LoadingButton
          type="submit"
          theme="blue"
          className={styles.button}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Відновити пароль
        </LoadingButton>

        <p style={{
          color: status.color,
          fontSize: 16,
          marginBottom: 15,
          marginTop: -10,
        }}
        >
          {status.text}
        </p>
      </Form>
    </Formik>
  );
};
