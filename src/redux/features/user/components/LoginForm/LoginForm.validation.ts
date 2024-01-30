import * as Yup from 'yup';

export const loginSchema = Yup
  .object()
  .shape({
    email: Yup
      .string()
      .email('Невірно введено e-mail')
      .required('E-mail не може бути порожнім'),
    password: Yup
      .string()
      .required('Пароль не може бути порожнім')
      .min(4, 'Потрібно мінімум 4 символи'),
  });
