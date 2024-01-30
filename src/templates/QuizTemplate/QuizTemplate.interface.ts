import { ICardItem } from '@components/cards/CardItem';
import { IQuizCard } from '@components/cards/QuizCard';
import { ILevel } from '@customTypes/ILevel';

export interface IQuizChoice {
  id: string;
  isRight: boolean;
  isChosen: boolean;
  image: string;
  text?: string;
  riddlesText?: string;
}

export interface IQuizTemplate extends ILevel {
  initialChoices: IQuizChoice[];
  isStrictCheck?: boolean,
  isSwitchable?: boolean,
  card: ICardItem & IQuizCard;
}
