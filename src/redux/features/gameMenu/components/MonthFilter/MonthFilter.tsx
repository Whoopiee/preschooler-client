import React from 'react';
import cn from 'classnames';
import { toast } from 'react-toastify';

import { getMonthText } from '@helpers/styling';
import { Month } from '@customTypes/game';

import { monthService } from '@services/monthService';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import lockImage from '@assets/icons/lock.svg';

import { selectMonth } from '../../gameMenuSlice';
import styles from './MonthFilter.module.scss';

type Props = {
  isOpened: boolean;
  onClick: () => void;
};

export const MonthFilter: React.FC<Props> = ({ isOpened, onClick }) => {
  const { activeMonth } = useAppSelector(state => state.gameMenu);
  const dispatch = useAppDispatch();

  const handleMonthWarning = (month: Month) => {
    if (!toast.isActive('Month error')) {
      toast.dismiss();
      toast.warning(`Програма стане доступна 1 ${getMonthText(month, 'genetive').toLowerCase()}`, { toastId: 'Month error' });
    }
  };

  return (
    <div
      className={cn(
        styles.monthFilter,
        {
          [styles.opened]: isOpened,
        },
      )}
    >
      {monthService.months.map(month => (
        <button
          key={month}
          type="button"
          className={cn(
            styles.button,
            {
              [styles.blue]: activeMonth === month,
            },
          )}
          onClick={() => {
            if (monthService.isLastMonth(month)) {
              dispatch(selectMonth(month));
              onClick();
              toast.dismiss();
            } else {
              handleMonthWarning(month);
            }
          }}
        >
          {getMonthText(month)}

          {!monthService.isLastMonth(month) && (
            <img
              className={styles.lock}
              src={lockImage}
              alt="Lock"
            />
          )}
        </button>
      ))}
    </div>
  );
};
