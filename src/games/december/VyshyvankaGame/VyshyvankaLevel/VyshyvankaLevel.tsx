import React, { useRef } from 'react';
import { LevelLayout } from '@core/components/LevelLayout';
import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';
import { Picture } from '@components/Picture';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { LevelTask } from '@core/components/LevelTask';
import { Warning } from '@components/Warning';
import { cards } from './Vyshyvanka.settings';
import { DragOrnament } from './DragOrnament/DragOrnament';

import styles from './VyshivankaLevel.module.scss';

export const VyshyvankaLevel: React.FC = () => {
  const width = useDeviceWidth();
  const dropRef = useRef(null);

  if (width < 768) {
    return (
      <LevelLayout
        description=""
      >
        <Warning />
      </LevelLayout>
    );
  }

  // const handleClear = () => {
  //   if (dropRef.current) {
  //     dropRef.current.onClear();
  //   }
  // };

  return (
    <LevelLayout
      // eslint-disable-next-line max-len
      description="Нижче зображене українське національне вбрання з орнаментною вишивкою"
      errorMessage="Прикрасьте вишиванку"
      audio="task/december/picture-of-national-costume.m4a"
      // onClear={handleClear}
      checkIsGameFinished={() => true}
    >
      <CardsList className={styles.container}>
        {cards.map(({ id, image }) => (
          <CardItem key={id} cardsInARow={4}>
            <Picture
              key={image}
              className={styles.image}
              src={image}
            />
          </CardItem>
        ))}
      </CardsList>
      <LevelTask
        hasTopMargin
        description="Прикрась візерунком українську сорочку"
        audio="task/december/decorate-with-pattern.m4a"
        className={styles.title}
      />

      <DragOrnament
        ref={dropRef}
      />
    </LevelLayout>
  );
};
