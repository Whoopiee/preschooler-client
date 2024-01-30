import * as Yup from 'yup';

export const resetPasswrodSchema = Yup
  .object()
  .shape({
    email: Yup
      .string()
      .email('Невірно введено e-mail')
      .required('E-mail обов\'язковий'),
  });
