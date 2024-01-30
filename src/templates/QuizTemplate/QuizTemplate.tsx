import { useState } from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';
import { QuizCard } from '@components/cards/QuizCard';
import { Template } from '@customTypes/Template';
import { IQuizTemplate, IQuizChoice } from './QuizTemplate.interface';

export const QuizTemplate: Template<IQuizTemplate> = ({
  children,
  level: {
    initialChoices,
    description,
    errorMessage,
    audio,
    verse,
    audioVerse,
    isStrictCheck,
    isSwitchable,
    card,
  },
}) => {
  const [choices, setChoices] = useState<IQuizChoice[]>(initialChoices);

  const makeChoice = (choiceId: string): void => (
    setChoices(prevState => prevState.map(choice => (
      choice.id !== choiceId
        ? choice
        : { ...choice, isChosen: isSwitchable ? !choice.isChosen : true }
    )))
  );

  const checkIsGameFinished = (): boolean => {
    if (!isStrictCheck) {
      return true;
    }

    return choices
      .filter((choice) => choice.isRight)
      .every((choice) => choice.isChosen);
  };

  return (
    <LevelLayout
      checkIsGameFinished={checkIsGameFinished}
      errorMessage={errorMessage}
      description={description}
      audio={audio}
      verse={verse}
      audioVerse={audioVerse}
    >
      {children !== undefined && (
        <>
          {children}
        </>
      )}

      <CardsList>
        {choices.map(({
          id,
          text,
          riddlesText,
          image,
          isChosen,
          isRight,
        }) => (
          <CardItem key={id} {...card}>
            <QuizCard
              text={text}
              riddlesText={riddlesText}
              image={image}
              isChosen={isChosen}
              isRight={isRight}
              onClick={() => makeChoice(id)}
              {...card}
            />
          </CardItem>
        ))}
      </CardsList>
    </LevelLayout>
  );
};
