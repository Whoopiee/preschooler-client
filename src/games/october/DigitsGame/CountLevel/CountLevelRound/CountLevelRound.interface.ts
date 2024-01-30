export type CountLevelChoice = {
  class: '1' | '2' | '3' | '4';
  text: '0' | '1' | '2' | '3' | '4' | '5';
  isRight: boolean;
};

export interface ICountLevelRound {
  question: string;
  rightAnswer: CountLevelChoice['text'];
  image: string;
  audio: string;
}
