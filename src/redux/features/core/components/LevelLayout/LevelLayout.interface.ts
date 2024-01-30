import { ILevel } from '@customTypes/ILevel';

export interface ILevelLayout extends ILevel {
  children: React.ReactNode;
  checkIsGameFinished?: () => boolean;
  onClear?: () => void;
}
