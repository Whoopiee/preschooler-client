import { useState } from 'react';

import { ILetterPositionCard, LetterPositionCard }
  from '@components/cards/LetterPositionCard';
import { LevelLayout } from '@core/components/LevelLayout';
import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';

import { Template } from '@customTypes/Template';
import { IChooseLetterPosition } from './ChooseLetterPosition.interface';

export const ChooseLetterPosition: Template<IChooseLetterPosition> = ({
  level,
}) => {
  const [answers, setAnswers] = useState<ILetterPositionCard[]>(
    level.initialAnswers,
  );

  const giveAnswer = (id: string, index: number) => {
    const foundAnswer = answers.find(answer => answer.id === id);

    if (foundAnswer) {
      const isAnswered = [...foundAnswer.isAnswered];

      isAnswered[index] = true;

      const newAnswer: ILetterPositionCard = {
        ...foundAnswer,
        isAnswered,
      };

      setAnswers(answers.map(answer => (
        answer.id !== id ? answer : newAnswer)));
    }
  };

  const checkIsLevelFinished = () => answers.every(answer => (
    answer.isAnswered.some((isAnsweredUnit, i) => (
      isAnsweredUnit && answer.rightAnswerMask[i]
    ))
  ));

  return (
    <LevelLayout
      {...level}
      errorMessage="Дай правильну відповідь на всі питання"
      checkIsGameFinished={checkIsLevelFinished}
    >
      <CardsList>
        {answers.map(answer => (
          <CardItem key={answer.id} cardsInARow={5} hasHeightByContent>
            <LetterPositionCard
              answer={answer}
              giveAnswer={giveAnswer}
            />
          </CardItem>
        ))}
      </CardsList>
    </LevelLayout>
  );
};
