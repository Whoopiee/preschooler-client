/* eslint-disable max-len */
import React, { useState } from 'react';
import { Outlet } from 'react-router';

import { sections, filters } from '@customTypes/game';

import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';

import { useAppSelector } from '@redux/hooks';
import { useScrollIntoView } from '@hooks/useScrollIntoView';
import { getSectionWithStyle } from '@helpers/styling';

import { SectionButton } from '../SectionButton';
import { GameButton } from '../GameButton';
import { FilterButton } from '../FilterButton';
import { MonthButton } from '../MonthButton';
import { MonthFilter } from '../MonthFilter';

import styles from './GameMenu.module.scss';

export const GameMenu: React.FC = () => {
  const {
    activeSection,
    games,
  } = useAppSelector(state => state.gameMenu);
  const { activeGame, isLevelActive } = useAppSelector(state => state.core);
  const [isMonthFilterOpened, setIsMonthFilterOpened] = useState(false);
  const { scrollTo, elementToScroll } = useScrollIntoView<HTMLDivElement>({ isOnMount: false, top: 0.02 });

  return (
    <>
      <>
        <div ref={elementToScroll} />

        <MonthButton
          onClick={() => {
            scrollTo();
            setIsMonthFilterOpened(prevState => !prevState);
          }}
          isOpened={isMonthFilterOpened}
        />

        <MonthFilter
          isOpened={isMonthFilterOpened}
          onClick={() => setIsMonthFilterOpened(false)}
        />
      </>

      <ul className={styles.sections}>
        {sections.map((section) => (
          <SectionButton
            key={section}
            section={getSectionWithStyle(section)}
          />
        ))}
      </ul>

      {(activeSection?.value === 'education') && (
        <ul className={styles.filters}>
          {filters.map((filter) => (
            <li key={filter} className={styles.filterItem}>
              <FilterButton filter={filter} />
            </li>
          ))}
        </ul>
      )}

      {(!activeGame || !isLevelActive) && (
        <CardsList>
          {games.map((game) => (
            <CardItem key={game.slug} cardsInARow={3} isCardsWide>
              <GameButton game={game} isBook={game.section === 'reading'} />
            </CardItem>
          ))}
        </CardsList>
      )}

      <Outlet />
    </>
  );
};
