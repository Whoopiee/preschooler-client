import * as Yup from 'yup';

export const registerSchema = Yup
  .object()
  .shape({
    email: Yup
      .string()
      .email('Невірно введено e-mail')
      .required('E-mail обов\'язковий'),
    password: Yup
      .string()
      .required('Пароль обов\'язковий')
      .min(4, 'Потрібно мінімум 4 символи'),
    firstName: Yup
      .string()
      .required('Ім\'я обов\'язковe')
      .min(2, 'Потрібно принаймні 2 символи')
      .max(50, 'Не більше 50 символів'),
    lastName: Yup
      .string()
      .required('Прізвище обов\'язковe')
      .min(2, 'Потрібно принаймні 2 символи')
      .max(50, 'Не більше 50 символів'),
  });
