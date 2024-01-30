import React from 'react';

import styles from './CopyrightLogo.module.scss';
import logo from '../../assets/icons/ednipro-logo.svg';

export const CopyrightLogo: React.FC = () => {
  return (
    <div className={styles.copyright}>
      <p className={styles.developed}>Розроблено</p>

      <a href="https://ednipro.dp.ua" target="_blank" rel="noreferrer">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
    </div>
  );
};
