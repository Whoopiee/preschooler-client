import React from 'react';

import styles from './HomePageLayout.module.scss';

import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';

type Props = {
  children: React.ReactNode;
};

export const HomePageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>

      <main className={styles.main}>
        <Container className={styles.container}>
          {children}
        </Container>
      </main>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
