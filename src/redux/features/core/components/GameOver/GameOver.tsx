import React from 'react';
import cn from 'classnames';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@redux/hooks';
import { PrimaryButton } from '@components/buttons/PrimaryButton';

import styles from './GameOver.module.scss';

export const GameOver: React.FC = () => {
  const { activeGame } = useAppSelector(state => state.core);
  const navigate = useNavigate();

  return (
    <div className={styles.gameOver}>

      <div className={styles.confettiContainer}>
        <Confetti
          gravity={0.05}
        />
      </div>

      <h1>
        Вітаємо! Ви закінчили гру
      </h1>

      <p className={styles.gameName}>
        {`"${activeGame?.name}"`}
      </p>

      <div className={styles.buttons}>
        <PrimaryButton
          className={styles.button}
          text="Пройти ще раз"
          onClick={() => navigate(`/${activeGame?.slug}`)}
          theme="grey"
        />

        <PrimaryButton
          className={cn(styles.button, styles.continue)}
          text="Продовжити"
          onClick={() => navigate('/')}
          theme="blue"
        />
      </div>
    </div>
  );
};
