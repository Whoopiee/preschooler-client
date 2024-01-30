import * as Yup from 'yup';

export const newChildSchema = Yup
  .object()
  .shape({
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
    age: Yup
      .number()
      .required('Оберіть скільки років дитині'),
    isAttending: Yup
      .boolean()
      .default(true),
    kindergarten: Yup
      .object()
      .when('isAttending', {
        is: true,
        then: (schema) => schema
          .required('Оберіть номер садочка')
          .shape({
            id: Yup.number().nonNullable(),
            name: Yup.string().nonNullable(),
          }),
        otherwise: (schema) => schema.nullable(),
      }),
  });
