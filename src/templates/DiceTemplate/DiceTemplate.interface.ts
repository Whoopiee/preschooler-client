import { ILevel } from '@customTypes/ILevel';

export interface Block {
  id: string,
  image: string,
  answer: string,
}

export interface IDiceTemplate extends ILevel {
  data: Block[],
  answer: string,
  rightNumber: string,
  answerImage: string,
}
