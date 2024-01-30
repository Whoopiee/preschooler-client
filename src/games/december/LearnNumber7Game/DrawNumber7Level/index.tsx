import React from 'react';

import { DrawLetterLevel } from '@templates/LetterTemplate/DrawLetterLevel';
import { Picture } from '@components/Picture';

const number7Image = 'pics/draw-7-canvas-1358x252.png';

const number7prewImage = 'objects/draw7prew.png';

export const DrawNumber7Level: React.FC = () => (
  <DrawLetterLevel
    level={
      {
        image: number7Image,
        description: 'Обведи цифри 7',
        audio: 'task/december/circle-number-7.m4a',
      }
    }
  >
    <Picture src={number7prewImage} alt="number 7" style={{ width: '100%' }} />
  </DrawLetterLevel>
);
