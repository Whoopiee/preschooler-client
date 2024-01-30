import React, { useState } from 'react';

import { LevelLayout } from '@core/components/LevelLayout';
import { Picture } from '@components/Picture';
import { ElementWithAudio } from '@components/ElementWithAudio';

import styles from './InputValueTemplate.module.scss';
import { IInputValueTemplate } from './InputValueTemplate.interface';

type Props = {
  level: IInputValueTemplate
};

export const InputValueTemplate: React.FC<Props> = ({ level }) => {
  const [inputValue, setInputValue] = useState('');

  const checkIsGameFinished = () => inputValue === level.rightAnswer;

  return (
    <LevelLayout
      {...level}
      checkIsGameFinished={checkIsGameFinished}
    >
      <Picture
        className={styles.image}
        src={level.image}
      />
      <label>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        {
          level.audioForQuestion
            ? (
              <ElementWithAudio audio={level.audioForQuestion}>
                <p>{level.question}</p>
              </ElementWithAudio>
            )
            : <p>{level.question}</p>
        }
      </label>
    </LevelLayout>
  );
};
