import { ILevel } from '@customTypes/ILevel';

export type Item = {
  id: string;
  image?: string;
};

export type Slot = {
  id: string;
  item: Item | null;
};

export interface IMoveIntoGapsTemplate extends ILevel {
  startSlots: Slot[];
  targetSlots: Slot[];
  threshold: number;
}
