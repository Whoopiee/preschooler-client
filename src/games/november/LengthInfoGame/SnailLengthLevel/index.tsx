import {
  IInputValueTemplate, InputValueTemplate,
} from '@templates/InputValueTemplate';

const level: IInputValueTemplate = {
  description: 'Дай правильну відповідь',
  errorMessage: `Порахуй, яку відстань проповз равлик та запиши цифру у поле.
  Кожен відрізок це один сантиметр`,
  image: 'pics/snailPic.png',
  audioForQuestion: 'task/november/snail-distance.m4a',
  rightAnswer: '6',
  question: 'Скільки сантиметрів проповз равлик?',
  audio: 'task/november/give-right-answer.m4a',
};

export const SnailLengthLevel: React.FC = () => (
  <InputValueTemplate level={level} />
);
