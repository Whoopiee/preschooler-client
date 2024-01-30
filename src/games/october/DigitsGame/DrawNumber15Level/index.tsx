import React from 'react';
import { DrawLetterLevel } from '@templates/LetterTemplate/DrawLetterLevel';

export const DrawNumber15Level: React.FC = () => (
  <DrawLetterLevel
    level={{
      image: 'pics/draw-1-5.png',
      audio: 'task/october/draw-number-1-5-task.m4a',
      description: 'Обведи цифри',
    }}
  />
);
