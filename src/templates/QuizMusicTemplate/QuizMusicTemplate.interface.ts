import { CardItemsInARow } from '@components/cards/CardItem';
import { IMusicCard } from '@components/cards/MusicCard';
import { IQuizMusicCard } from '@components/cards/QuizMusicCard';
import { ILevel } from '@customTypes/ILevel';

export interface IQuizMusicTemplate extends ILevel {
  exampleMusicCards?: IMusicCard[]
  initialMusicAnswers: IQuizMusicCard[];
  descriptionSecond: string;
  audioSecond?: string;
  cardsInARow: CardItemsInARow;
}
