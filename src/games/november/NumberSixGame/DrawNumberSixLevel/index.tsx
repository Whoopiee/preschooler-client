import React from 'react';
import { DrawLetterLevel } from '@templates/LetterTemplate/DrawLetterLevel';
import { Picture } from '@components/Picture';

export const DrawNumberSixLevel: React.FC = () => (
  <DrawLetterLevel level={{
    image: 'pics/draw-6-canvas.png',
    description: 'Обведи цифри 6',
    audio: 'task/november/circle-number-six.m4a',
  }}
  >
    <Picture
      src="pics/draw6prew.png"
      alt="number 6"
      style={{ width: '100%' }}
    />
  </DrawLetterLevel>
);
