import { ILevel } from '@customTypes/ILevel';

export interface IStartLevelLevel extends ILevel {
  audio: string;
  letter: string;
  sound: string;
  author?: string;
  leftBlock: {
    image: string;
    text: string;
  },
  rightBlock: {
    image: string;
    text: string;
  }
}
