import {
  IInputValueTemplate, InputValueTemplate,
} from '@templates/InputValueTemplate';

const level: IInputValueTemplate = {
  description: 'Дай правильну відповідь',
  errorMessage: 'Порахуй кількість трикутників',
  image: 'objects/trigon.png',
  rightAnswer: '9',
  question: 'Введи кількість трикутників',
};

export const TrigonLevel: React.FC = () => (
  <InputValueTemplate level={level} />
);
