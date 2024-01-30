import React, { useState, useContext } from 'react';
import { AudioLevelContext } from '@core/contexts/AudioLevelContext';
import { Picture } from '@components/Picture';
import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';
import { IQuizMusicCard, QuizMusicCard } from '@components/cards/QuizMusicCard';
import { LevelLayout } from '@core/components/LevelLayout';
import { LevelTask } from '@core/components/LevelTask';
import { initialMusicAnswers } from './MusicalMoods.settings';

import styles from './MusicalMoods.module.scss';

export const MusicalMoodsLevel: React.FC = () => {
  const [answers, setAnswers] = useState<IQuizMusicCard[]>(initialMusicAnswers);
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
      description="Прослухайте звуковий фрагмент,
      що представляє певний настрій (Лад).
      Розглянемо основні лади"
      audio="task/january/listen-to-fragment.m4a"
      checkIsGameFinished={checkIsLevelFinished}
      errorMessage="Вгадайте всі настрої"
    >

      <div className={styles.container}>
        <div className={styles.halfDiv}>
          <Picture
            src="objects/happy-person.png"
            className={styles.image}
          />
          <h3 className={styles.title}>Мажорний лад</h3>
          <p>Радісна, бадьора, позитивна, енергійна музика</p>
        </div>
        <div className={styles.halfDiv}>
          <Picture
            src="objects/sad-person.png"
            className={styles.image}
          />
          <h3 className={styles.title}>Мінорний лад</h3>
          <p>Сумна, спокійна, трагічна музика</p>
        </div>

      </div>

      <LevelTask
        description="Вгадай настрій музики"
        audio="task/january/guess-music-mood.m4a"
        hasTopMargin
      />

      <CardsList gap={50}>
        {answers.map((answer) => (
          <CardItem
            key={answer.id}
            cardsInARow={4}
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
