import { ILevel } from '@customTypes/ILevel';

type AutoPlay = 'task' | 'verse' | 'none';

export type TLevelTask = Omit<ILevel, 'errorMessage'> & {
  autoPlay?: AutoPlay;
  className?: string;
  hasTopMargin?: boolean;
};
