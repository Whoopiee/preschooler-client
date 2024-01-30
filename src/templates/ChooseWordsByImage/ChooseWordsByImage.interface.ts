import { ILevel } from '@customTypes/ILevel';
import { IQuizChoice } from '@templates/QuizTemplate';

export type WordChoice = Required<Pick<
IQuizChoice, 'id' | 'isRight' | 'isChosen' | 'text'
>>;

export interface IChooseWordsByImage extends ILevel {
  initialChoices: WordChoice[];
  image: string;
  imageText: string;
  imageAudio: string;
  isStrict: boolean;
}
