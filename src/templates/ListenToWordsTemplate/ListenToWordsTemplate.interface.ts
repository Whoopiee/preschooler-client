import { IMusicCard } from '@components/cards/MusicCard/MusicCard.interface';
import { ILevel } from '@customTypes/ILevel';

export interface IListenToWordsTemplate extends ILevel {
  image: string;
  tracks: Omit<IMusicCard, 'image'>[];
}
