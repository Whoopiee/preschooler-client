import { ILevel } from './ILevel';

export type Template<T extends ILevel>
  = React.FC<{ level: T, children?: React.ReactNode }>;
