import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
// import { RequireAuth } from './components/RequireAuth';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { DevelopmentPage } from './pages/DevelopmentPage';

import { useOctoberRoutes } from './router/useOctoberRoutes';
import { useNovemberRoutes } from './router/useNovemberRoutes';
import { useDecemberRoutes } from './router/useDecemberRoutes';
import { useJanuaryRoutes } from './router/useJanuaryRoutes';
import { useFebruaryRoutes } from './router/useFebruaryRoutes';
import { useBooks } from './books';

export const Root: React.FC = () => {
  useBooks();

  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="home" element={<Navigate to="/" replace />} />

        {useOctoberRoutes()}
        {useNovemberRoutes()}
        {useDecemberRoutes()}
        {useJanuaryRoutes()}
        {useFebruaryRoutes()}

      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/registration" element={<RegisterPage />} />

      <Route path="/development" element={<DevelopmentPage />} />
      <Route path="/new-child" element={<HomePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
