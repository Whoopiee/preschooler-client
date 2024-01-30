import React from 'react';

import { DrawLetterLevel } from '@templates/LetterTemplate/DrawLetterLevel';
import { Picture } from '@components/Picture';

const number8Image = 'objects/draw8.png';

const number8prewImage = 'pics/draw8prew.png';

export const DrawNumber8Level: React.FC = () => (
  <DrawLetterLevel level={
    {
      image: number8Image,
      description: 'Обведи цифри 8',
      audio: 'task/january/circle-numbers-8.m4a',
    }
  }
  >
    <Picture src={number8prewImage} alt="number 8" style={{ width: '100%' }} />
  </DrawLetterLevel>
);
