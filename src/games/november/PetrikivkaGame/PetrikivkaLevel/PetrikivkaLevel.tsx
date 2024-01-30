import React, { useState } from 'react';
import Color from 'color';

import { DrawCanvas, DrawCanvasLine } from '@components/DrawCanvas';
import { LevelLayout } from '@core/components/LevelLayout';
import { useDeviceWidth } from '@hooks/useDeviceWidth';
import { Warning } from '@components/Warning';
import { ColorPicker } from '@components/ColorPicker';
import { LevelTask } from '@core/components/LevelTask';
import { CardsList } from '@components/CardsList';
import { CardItem } from '@components/cards/CardItem';
import { Picture } from '@components/Picture';
import { colors, cards } from './Petrikivka.settings';

import styles from './PetrikivkaLevel.module.scss';

export const PetrikivkaLevel: React.FC = () => {
  const [lines, setLines] = useState<DrawCanvasLine[]>([]);
  const [currentColor, setCurrentColor] = useState<Color>(colors[0]);

  const handleClear = () => setLines([]);
  const checkIsGameFinished = () => lines.length !== 0;

  const width = useDeviceWidth();

  if (width < 768) {
    return (
      <LevelLayout
        description=""
      >
        <Warning />
      </LevelLayout>
    );
  }

  return (
    <LevelLayout
      errorMessage="Нічого не намальовано"
      description="Народне мистецтво Дніпропетровщини"
      audio="task/november/folk-art.m4a"
      checkIsGameFinished={checkIsGameFinished}
      onClear={handleClear}
    >
      <CardsList className={styles.container}>
        {cards.map(({ id, image }) => (
          <CardItem key={id} cardsInARow={3}>
            <Picture
              key={image}
              className={styles.image}
              src={image}
            />
          </CardItem>
        ))}
      </CardsList>

      <LevelTask
        description="Розмалюй фрагмент розпису"
        audio="task/november/color-natyurmort.m4a"
        hasTopMargin
      />

      <div className={styles.layout}>
        <DrawCanvas
          lines={lines}
          setLines={setLines}
          image="objects/petrekivka-draw.png"
          aspectRation={0.75}
          color={currentColor}
        />
      </div>

      <ColorPicker
        colors={colors}
        setActiveColor={setCurrentColor}
        isHorizontal
      />
    </LevelLayout>
  );
};
