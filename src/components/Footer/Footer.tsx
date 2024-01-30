import React, { useCallback, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import logo from '../../assets/icons/ednipro-logo.svg';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const Phones = useMemo(() => ([
    // '+38 (098) 745-65-21',
    // '+38 (095) 874-65-44',
    // '+38 (097) 456-21-45',
    '+38 (050) 876-94-49',
    '+38 (050) 876-94-49',
    '+38 (050) 876-94-49',
  ]), []);

  const replacePhoneNumber = useCallback((phone: string) => (
    phone.replace(/\D/g, '')
  ), []);

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p className={styles.developed}>Розроблено</p>

        <a href="https://ednipro.dp.ua" target="_blank" rel="noreferrer">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.contacts}>
        <span className={styles.support}>Служба підтримки:</span>
        {Phones.map((phone) => (
          <a
            key={uuid()}
            href={`tel:${replacePhoneNumber(phone)}`}
            className={styles.phone}
          >
            <p>{phone}</p>
          </a>
        ))}
      </div>
    </footer>
  );
};
