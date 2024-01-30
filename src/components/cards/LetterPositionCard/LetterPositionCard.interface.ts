interface RightAnswerMask {
  text: string,
  isRight: boolean,
}

export interface ILetterPositionCard {
  id: string;
  image: string;
  rightAnswerMask: Array<boolean> | Array<RightAnswerMask>;
  isAnswered: Array<boolean>;
}
