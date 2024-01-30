import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { useMouseHover } from '@hooks/useMouseHover';
import { SectionWithStyle } from '@customTypes/game';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { selectSection } from '../../gameMenuSlice';

import styles from './SectionButton.module.scss';

type Props = {
  section: SectionWithStyle;
};

export const SectionButton: React.FC<Props> = ({ section }) => {
  const { activeSection } = useAppSelector(state => state.gameMenu);
  const { activeGame } = useAppSelector(state => state.core);
  const dispatch = useAppDispatch();
  const { isHover, handleMouseEnter, handleMouseLeave } = useMouseHover();

  const buttonStyle = {
    // eslint-disable-next-line no-nested-ternary
    backgroundColor: isHover
      ? section.hoverColor
      : activeSection?.value === section.value
        ? section.backgroundColor
        : '#FFF',
    borderColor: section.borderColor,
  };

  return (
    <Link
      to="/"
      className={cn(
        styles.button,
        {
          [styles.gameOpened]: activeGame !== null,
        },
      )}
      style={buttonStyle}
      onClick={() => dispatch(selectSection(section))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={styles.text}>
        {section.name}
      </p>

      <img
        className={styles.icon}
        src={section.image}
        alt={section.name}
      />
    </Link>
  );
};
