import React from 'react';
import cn from 'classnames';

import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { useAppSelector } from '@redux/hooks';
import { getMonthText } from '@helpers/styling';

import styles from './MonthButton.module.scss';

type Props = {
  onClick: () => void;
  isOpened: boolean;
};

export const MonthButton: React.FC<Props> = ({ onClick, isOpened }) => {
  const { activeMonth } = useAppSelector(state => state.gameMenu);

  return (
    <PrimaryButton
      text={getMonthText(activeMonth)}
      className={styles.button}
      onClick={onClick}
      theme="white"
    >
      <span className={cn(
        styles.arrow,
        {
          [styles.closed]: isOpened,
        },
      )}
      >
        &#8594;
      </span>
    </PrimaryButton>
  );
};
