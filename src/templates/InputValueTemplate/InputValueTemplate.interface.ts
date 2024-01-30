import { ILevel } from '@customTypes/ILevel';

export interface IInputValueTemplate extends ILevel {
  rightAnswer: string;
  image: string;
  question: string;
  audioForQuestion?: string;
}
