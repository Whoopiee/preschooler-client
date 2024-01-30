import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HomePageLayout } from '../../layouts/HomePageLayout';
import { ErrorGost } from '../../components/ErrorGost';

import styles from './NotFoundPage.module.scss';
import { PrimaryButton } from '../../components/buttons/PrimaryButton';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomePageLayout>
      <div className={styles.page}>
        <div className={styles.error}>
          <div className={styles.number}>
            4
          </div>

          <ErrorGost />

          <div className={styles.number}>4</div>
        </div>

        <div className={styles.text}>
          Ууупс. Сторінка, яку ви шукаєте, не існує.
        </div>

        <PrimaryButton
          className={styles.button}
          text="Повернутися на головну"
          onClick={() => navigate('/')}
        />
      </div>
    </HomePageLayout>
  );
};
