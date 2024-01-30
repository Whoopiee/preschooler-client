import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { Filter } from '@customTypes/game';
import { getFilterText } from '@helpers/styling';

import { selectFilter } from '../../gameMenuSlice';
import styles from './FilterButton.module.scss';

type Props = {
  filter: Filter
};

export const FilterButton: React.FC<Props> = ({ filter }) => {
  const dispatch = useAppDispatch();
  const {
    activeSection,
    activeFilter,
  } = useAppSelector(state => state.gameMenu);

  const buttonStyle = {
    backgroundColor: filter === activeFilter
      ? activeSection?.backgroundColor
      : undefined,
    borderColor: filter === activeFilter
      ? activeSection?.borderColor
      : undefined,
  };

  return (
    <Link
      to="/"
      className={styles.button}
      style={buttonStyle}
      onClick={() => dispatch(selectFilter(filter))}
    >
      {getFilterText(filter)}
    </Link>
  );
};
