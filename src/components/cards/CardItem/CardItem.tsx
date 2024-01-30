import React from 'react';
import cn from 'classnames';
import styles from './CardItem.module.scss';
import { ICardItem } from './CardItem.interface';

type Props = {
  children: React.ReactNode;
} & ICardItem;

export const CardItem: React.FC<Props> = ({
  children,
  cardsInARow,
  isCardsWide,
  hasHeightByContent = false,
  hasWidthByContent = false,
  hasMobile100PercentWidth = false,
}) => {
  return (
    <li className={cn(
      styles.item,
      {
        [styles.cardsInARow2]: cardsInARow === 2,
        [styles.cardsInARow3]: cardsInARow === 3,
        [styles.cardsInARow4]: cardsInARow === 4,
        [styles.cardsInARow5]: cardsInARow === 5,
        [styles.cardsWide]: isCardsWide,
        [styles.heightByContent]: hasHeightByContent,
        [styles.widthByContent]: hasWidthByContent,
        [styles.mobile100PercentWidth]: hasMobile100PercentWidth,
      },
    )}
    >
      {children}
    </li>
  );
};
