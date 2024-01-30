interface IMissingSymbolsRoundBase {
  question: string;
  image: string;
  rightAnswer: string;
}

interface IMissingSymbolsAlternatives {
  alternatives: string[];
  alternativesSize: number;
}

export interface IMissingSymbolsRound extends
  IMissingSymbolsRoundBase,
  IMissingSymbolsAlternatives {
}

export interface IMissingSymbolsTemplate extends
  IMissingSymbolsAlternatives {
  rounds: IMissingSymbolsRoundBase[];
}
