import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@components/layouts/AuthLayout';
import { RegisterForm } from '@redux/features/user/components/RegisterForm';

export const RegisterPage: React.FC = () => {
  return (
    <AuthLayout
      title="Реєстрація"
      formElement={<RegisterForm />}
      linksElement={(
        <>
          <Link to="/login">
            Вже маю акаунт
          </Link>

          <Link to="/resetpassword">
            Відновити пароль
          </Link>
        </>
      )}
    />
  );
};
