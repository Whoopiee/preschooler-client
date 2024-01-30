interface IAudioChoice {
  text: string;
  isRight: boolean;
  isChosen: boolean;
}

export interface IQuizMusicCard {
  id: string;
  image: string;
  audio: string;
  choices: Array<IAudioChoice>;
  riddlesText?: string;
}
