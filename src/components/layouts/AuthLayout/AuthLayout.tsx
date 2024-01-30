import React from 'react';
import { Picture } from '@components/Picture';
import { CopyrightLogo } from '@components/CopyrightLogo';
import { useDeviceWidth } from '@hooks/useDeviceWidth';

import styles from './AuthLayout.module.scss';

type Props = {
  title: string;
  formElement: React.ReactElement;
  linksElement: React.ReactElement;
};

export const AuthLayout: React.FC<Props> = ({
  title,
  formElement,
  linksElement,
}) => {
  const deviceWidth = useDeviceWidth();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* <AuthLayoutText /> */}
        <Picture
          alt="Doshkilnyatko"
          // doshkilnyatko-banner-481x350.png
          src={
            deviceWidth < 1200
              ? 'pics/doshkilnyatko-banner-750x226.png'
              : 'pics/doshkilnyatko-banner-750x1086.png'
          }
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.form}>
          <h1 className={styles.title}>
            {title}
          </h1>

          {formElement}

          <div className={styles.nav}>
            {linksElement}
          </div>
        </div>
        <div className={styles.footer}>
          <CopyrightLogo />
        </div>
      </div>
    </div>
  );
};
