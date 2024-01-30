import { ILoginForm } from '@redux/features/user/components/LoginForm';
import { User } from '@customTypes/auth';
import { httpClient } from '@client/httpClient';
import { authClient } from '@client/authClient';
import { IRegisterForm } from '@redux/features/user/components/RegisterForm';

async function login(payload: ILoginForm): Promise<User> {
  return authClient.post('/user/login', payload);
}

async function register(
  payload: IRegisterForm,
): Promise<Omit<User, 'Children'>> {
  return authClient.post('/user/register', payload);
}

async function resetPassword(email: string): Promise<void> {
  await authClient.post('/user/resetPass', { email });
}

async function refresh(): Promise<Omit<User, 'token'>> {
  return httpClient.get('/user/me');
}

export const authService = {
  login,
  register,
  resetPassword,
  refresh,
};
