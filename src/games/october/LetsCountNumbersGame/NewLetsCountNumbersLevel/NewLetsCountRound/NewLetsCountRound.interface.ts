export type CountLevelChoice = {
  text: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
  isRight: boolean;
};

export interface ICountLevelRound {
  question: string;
  rightAnswer: CountLevelChoice['text'];
  image: string;
  audio: string;
}
