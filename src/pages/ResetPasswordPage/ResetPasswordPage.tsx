import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@components/layouts/AuthLayout';
import {
  ResetPasswordForm,
} from '@redux/features/user/components/ResetPasswordForm';

export const ResetPasswordPage: React.FC = () => {
  return (
    <AuthLayout
      title="Відновлення паролю"
      formElement={<ResetPasswordForm />}
      linksElement={(
        <>
          <Link to="/login">
            Вже маю акаунт
          </Link>

          <Link to="/registration">
            Зареєструватись
          </Link>
        </>
      )}
    />
  );
};
