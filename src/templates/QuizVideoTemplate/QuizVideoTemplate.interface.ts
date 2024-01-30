import { IQuizTemplate } from '../QuizTemplate';

export interface IQuizVideoTemplate extends IQuizTemplate {
  url: string;
  descriptionSecond?: string;
  audioSecond?: string;
}
