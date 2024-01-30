import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@components/layouts/AuthLayout';
import { LoginForm } from '@redux/features/user/components/LoginForm';

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      title="Авторизація"
      formElement={<LoginForm />}
      linksElement={(
        <>
          <Link to="/registration">
            Зареєструватись
          </Link>

          <Link to="/resetpassword">
            Відновити пароль
          </Link>
        </>
      )}
    />
  );
};
