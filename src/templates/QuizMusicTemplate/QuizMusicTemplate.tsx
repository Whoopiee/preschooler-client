/* eslint-disable max-len */
import { useState, useContext } from 'react';

import { Template } from '@customTypes/Template';
import { LevelLayout } from '@core/components/LevelLayout';
import { LevelTask } from '@core/components/LevelTask';
import { MusicCard } from '@components/cards/MusicCard';
import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';
import { QuizMusicCard, IQuizMusicCard } from '@components/cards/QuizMusicCard';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';

import { IQuizMusicTemplate } from './QuizMusicTemplate.interface';

export const QuizMusicTemplate: Template<IQuizMusicTemplate> = ({ level }) => {
  const [answers, setAnswers] = useState<IQuizMusicCard[]>(level.initialMusicAnswers);
  const {
    track,
    progress,
    isPlaying,
    toggleTrack,
  } = useContext(AudioLevelContext);

  const giveAnswer = (id: string, index: number) => {
    const foundAnswer = answers.find(answer => answer.id === id);

    if (foundAnswer) {
      const choices = [...JSON.parse(JSON.stringify(foundAnswer.choices))];

      choices[index].isChosen = true;

      const newAnswer: IQuizMusicCard = {
        ...foundAnswer,
        choices,
      };

      setAnswers(answers.map(answer => (
        answer.id !== id ? answer : newAnswer)));
    }
  };

  const checkIsLevelFinished = () => answers.every(answer => (
    answer.choices.some(choice => (
      choice.isChosen && choice.isRight
    ))
  ));

  return (
    <LevelLayout
      {...level}
      checkIsGameFinished={checkIsLevelFinished}
    >
      {level.exampleMusicCards && (
        <CardsList gap={50}>
          {level.exampleMusicCards.map((music) => (
            <CardItem
              key={music.id}
              cardsInARow={level.cardsInARow}
              hasHeightByContent
              hasMobile100PercentWidth
            >
              <MusicCard
                music={music}
                onClick={() => (
                  toggleTrack({ id: music.id, src: music.sound })
                )}
                isPlaying={track?.id === music.id && isPlaying}
                progress={track?.id === music.id ? progress : 0}
              />
            </CardItem>
          ))}
        </CardsList>
      )}

      <LevelTask
        description={level.descriptionSecond}
        audio={level.audioSecond}
        hasTopMargin
      />

      <CardsList gap={50}>
        {answers.map((answer) => (
          <CardItem
            key={answer.id}
            cardsInARow={level.cardsInARow}
            hasHeightByContent
            hasMobile100PercentWidth
          >
            <QuizMusicCard
              key={answer.id}
              answer={answer}
              giveAnswer={giveAnswer}
              onClick={() => (
                toggleTrack({ id: answer.id, src: answer.audio })
              )}
              isPlaying={track?.id === answer.id && isPlaying}
              progress={track?.id === answer.id ? progress : 0}
            />
          </CardItem>

        ))}
      </CardsList>
    </LevelLayout>
  );
};
