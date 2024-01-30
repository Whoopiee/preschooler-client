import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowIcon from '@assets/icons/arrow.svg';
import refreshIcon from '@assets/icons/refresh.svg';
import closeIcon from '@assets/icons/close.svg';

import { PrimaryButton } from '@components/buttons/PrimaryButton';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useScrollIntoView } from '@hooks/useScrollIntoView';
import { useGoNextLevel } from '@core/hooks/useGoNextLevel';

import { startLevel } from '../../coreSlice';
import { NextLevelContext } from '../../contexts/NextLevelContext';
import { ILevelLayout } from './LevelLayout.interface';
import styles from './LevelLayout.module.scss';
import { LevelTask } from '../LevelTask';

export const LevelLayout: React.FC<ILevelLayout> = ({
  children,
  errorMessage,
  description,
  audio,
  verse,
  audioVerse,
  checkIsGameFinished,
  onClear,
}) => {
  const { activeGame } = useAppSelector(state => state.core);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { elementToScroll } = useScrollIntoView<HTMLDivElement>();
  const { next } = useContext(NextLevelContext);
  const { goNextLevel } = useGoNextLevel({
    next,
    errorMessage,
    checkIsGameFinished,
  });

  useEffect(() => {
    dispatch(startLevel());
  }, []);

  return (
    <div
      className={styles.page}
      ref={elementToScroll}
    >
      <div className={styles.top}>
        <PrimaryButton
          text="Закрити"
          onClick={() => navigate('/')}
          icon={closeIcon}
          theme="blue"
          className={styles.closeButton}
        />

        <h1 className={styles.title}>
          {activeGame?.name}
        </h1>
      </div>

      <LevelTask
        description={description}
        verse={verse}
        audio={audio}
        audioVerse={audioVerse}
        autoPlay="task"
      />

      <div className={styles.level}>
        {children}
      </div>

      <div className={styles.buttons}>
        {onClear && (
          <PrimaryButton
            text="Очистити"
            className={styles.button}
            theme="grey"
            icon={refreshIcon}
            onClick={onClear}
          />
        )}

        <PrimaryButton
          className={styles.button}
          text="Далі"
          theme="orange"
          icon={arrowIcon}
          onClick={goNextLevel}
        />
      </div>
    </div>
  );
};
