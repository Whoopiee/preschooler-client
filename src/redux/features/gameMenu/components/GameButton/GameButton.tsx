import React from 'react';
import { Link } from 'react-router-dom';
import { EmbedPDF } from '@simplepdf/react-embed-pdf';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Game } from '@customTypes/game';
import { useAppSelector } from '@redux/hooks';
import { useMouseHover } from '@hooks/useMouseHover';

import styles from './GameButton.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
  game: Game;
  isBook?: boolean;
};

export const GameButton: React.FC<Props> = ({ game, isBook = false }) => {
  const { activeSection } = useAppSelector(state => state.gameMenu);
  const { isHover, handleMouseEnter, handleMouseLeave } = useMouseHover();

  const hoverStyle = {
    backgroundColor: isHover ? activeSection?.backgroundColor : undefined,
    boxShadow: isHover ? `0 0 10px ${activeSection?.hoverColor}` : undefined,
  };

  const commonButtonProps = {
    className: styles.button,
    style: hoverStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const buttonContent = (
    <>
      <div className={styles.container}>
        <LazyLoadImage
          className={styles.image}
          wrapperClassName={styles.wrapper}
          effect="blur"
          src={`${import.meta.env.VITE_FILES_API_URL}/images/${game.image}`}
          alt="Game preview"
        />
      </div>
      <p className={styles.text}>{game.name}</p>
    </>
  );

  return (
    isBook ? (
      <EmbedPDF>
        <a
          href={`${import.meta.env.VITE_FILES_API_URL}/books/${game.slug}`}
          {...commonButtonProps}
        >
          {buttonContent}
        </a>
      </EmbedPDF>
    ) : (
      <Link
        to={game.slug}
        {...commonButtonProps}
      >
        {buttonContent}
      </Link>
    )
  );
};
