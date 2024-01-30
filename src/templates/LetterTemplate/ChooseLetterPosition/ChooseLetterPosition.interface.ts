import { ILetterPositionCard } from '@components/cards/LetterPositionCard';
import { ILevel } from '@customTypes/ILevel';

export interface IChooseLetterPosition extends ILevel {
  initialAnswers: ILetterPositionCard[];
}
